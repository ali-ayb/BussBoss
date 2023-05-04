import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import Greeting from "../../components/Greeting/Greeting";
import Search from "../../components/Search/Search";
import DriverTripsBar from "../../components/DriverTripBar/DriverTripBar";
import DriverTripCard from "../../components/DriverTripCard/DriverTripCard";
import { useNavigation } from "@react-navigation/native";

export default function DriverMain() {
  function onPressLearnMore() {
    alert("test");
  }
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("AddTrip");
  };
  return (
    <View style={{ backgroundColor: "#F6F1F1", flex: 1 }}>
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
        }}>
        <DriverTripCard />
        <DriverTripCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F6F1F1",
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
