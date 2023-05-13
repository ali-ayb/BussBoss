import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import Greeting from "../../components/Greeting/Greeting";
import Search from "../../components/Search/Search";
import DriverTripsBar from "../../components/DriverTripBar/DriverTripBar";
import DriverTripCard from "../../components/DriverTripCard/DriverTripCard";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getToken } from "../../auth/auth";
import UseHttp from "../../hooks/request";
import * as geoLocation from "expo-location";

export default function DriverMain() {
  const formData = new FormData();
  const [current_trips, setCurrentTrips] = useState([]);
  const getDrvierLocation = async () => {
    let { status } = await geoLocation.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }
    let getLocation = await geoLocation.getCurrentPositionAsync({});
    const latitude = getLocation.coords.latitude;
    const longitude = getLocation.coords.longitude;
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    const token = await getToken();
    const result = await UseHttp("add_driver_location", "POST", formData, {
      Authorization: "Bearer " + token,
    });
  };
  setInterval(getDrvierLocation, 10000);

  const refreshData = async () => {
    const token = await getToken();
    const result = await UseHttp("get_driver_current_trips", "GET", "", {
      Authorization: "bearer " + token,
    });
    setCurrentTrips(result.trips);
  };

  useEffect(() => {
    refreshData();
  }, []);

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("AddTrip");
  };
  const header = () => {
    return (
      <View style={styles.main}>
        <Background />
        <Logo />
        <Greeting />
        <DriverTripsBar />
        <Text style={styles.title}>Current Trips</Text>
        <TouchableOpacity style={styles.add_trip_btn} onPress={handlePress}>
          <Text style={styles.add_trip_txt}>Add Trip</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "column",
            gap: 10,
            // backgroundColor: "#000",
            top: 60,
          }}></View>
      </View>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={header}
      data={current_trips}
      renderItem={({ item }) => (
        <DriverTripCard item={item} refreshData={refreshData} />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{ gap: -10 }}
      style={styles.list}
    />
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F6F1F1",
    marginBottom: 70,
  },
  add_trip_btn: {
    backgroundColor: "#146C94",
    borderRadius: 15,
    padding: 10,
    left: 230,
    top: 45,
    width: 130,
  },
  add_trip_txt: {
    color: "#FFF",
    fontSize: 18,
    left: 22,
  },
  title: {
    left: 40,
    top: 390,
    position: "absolute",
    zIndex: 2,
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
  },
});
