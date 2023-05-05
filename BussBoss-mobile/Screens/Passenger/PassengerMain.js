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
import TripsBar from "../../components/TripsBar/TripsBar";
import DriverCard from "../../components/DriverCard/DriverCard";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import UseHttp from "../../hooks/request";
import { getToken } from "../../auth/auth";

export default function PassengerMain() {
  const [destination, setDestination] = useState("");
  const [drivers, setDrivers] = useState([]);
  const formData = new FormData();

  useEffect(() => {
    const fetchData = async () => {
      formData.append("destination", destination);
      const token = await getToken();
      const result = await UseHttp(
        "get_drivers_from_destination",
        "POST",
        formData,
        {
          Authorization: "Bearer " + token,
        }
      );
      setDrivers(result.drivers);
    };
    fetchData();
  }, [destination]);

  console.log(drivers);

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("BussSchedule");
  };

  return (
    <View style={{ backgroundColor: "#F6F1F1", flex: 1 }}>
      <Background />
      <Logo />
      <Greeting />
      <Text style={styles.search_title}>Where are you heading?</Text>
      <Search userInput={destination} setUserInput={setDestination} />
      <TripsBar />
      <Text style={styles.title}>Choose your driver</Text>
      <View style={{ height: 400, top: 80 }}>
        <FlatList
          data={drivers}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={handlePress}>
              <DriverCard item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ gap: 10, top: 0 }}
          style={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F6F1F1",
  },
  search_title: {
    left: 35,
    top: 130,
    position: "absolute",
    zIndex: 2,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  title: {
    left: 40,
    top: 380,
    position: "absolute",
    zIndex: 2,
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  list: {
    flexGrow: 0, // Set the flex property to adjust height
  },
});
