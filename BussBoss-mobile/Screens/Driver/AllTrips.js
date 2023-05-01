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

  return (
    <View style={{ backgroundColor: "#F6F1F1", flex: 1 }}>
      <Background />
      <Logo />
      <Greeting />
      <DriverTripsBar />
      <Text style={styles.title}>Current Trips</Text>
      <TouchableOpacity style={styles.add_trip_btn} onPress={onPressLearnMore}>
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

const styles = StyleSheet.create({});
