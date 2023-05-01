import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
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
      <Image
        source={require("../../assets/Map_Pinpoint.png")}
        style={styles.image}
      />

      <TouchableOpacity style={styles.add_trip_btn} onPress={onPressLearnMore}>
        <Text style={styles.add_trip_txt}>Add Trip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    top: 120,
    left: "50%",
    width: 130,
    height: 110,
    zIndex: 2,
    position: "absolute",
  },
});
