import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function onPressLearnMore() {
  alert("test");
}
function CurrentTripCard({ item }) {
  const destination = item.destination;
  const first_name = item.first_name;
  const last_name = item.last_name;
  const departure_time = new Date(item.departure_time);
  const arrival_time = new Date(item.arrival_time);
  return (
    <View style={styles.CurrentTripCard}>
      <Image
        style={styles.clock_icon}
        source={require("../../assets/clock_icon.png")}
      />
      <Image
        style={styles.pin_icon}
        source={require("../../assets/pin_icon.png")}
      />
      <Text style={styles.trip_time}>
        {departure_time.getHours()}:{departure_time.getMinutes()} {"<-->"}
        {arrival_time.getHours()}:{arrival_time.getMinutes()}
      </Text>
      <Text style={styles.trip_position}>{destination} </Text>

      <Text style={styles.driver_name}>
        Driver: {first_name} {last_name}
      </Text>

      <TouchableOpacity style={styles.finish_btn} onPress={onPressLearnMore}>
        <Text style={styles.finish_btn_text}>Finish Trip</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.track_btn} onPress={onPressLearnMore}>
        <Text style={styles.track_btn_text}>Track Bus</Text>
      </TouchableOpacity>
    </View>
  );
}
export default CurrentTripCard;
const styles = StyleSheet.create({
  CurrentTripCard: {
    backgroundColor: "#FFF",
    height: 110,
    width: 335,
    left: "10%",
    borderRadius: 15,
    elevation: 20,
    marginBottom: 50,
  },
  clock_icon: {
    top: 20,
    left: 25,
  },
  pin_icon: {
    height: 50,
    width: 30,
    top: 25,
    left: 20,
  },
  trip_time: {
    top: -50,
    left: 60,
    fontWeight: "bold",
    fontSize: 16,
  },
  trip_position: {
    top: -30,
    left: 60,
    fontSize: 16,
    fontWeight: "bold",
  },
  driver_name: {
    top: -90,
    left: 180,
    fontSize: 16,
    fontWeight: "bold",
  },
  track_btn: {
    borderRadius: 15,
  },
  finish_btn: {
    backgroundColor: "#0E7BCB",
    borderRadius: 15,
    padding: 5,
    left: "73%",
    top: "-64%",
    width: 80,
  },
  finish_btn_text: {
    color: "#FFFFFF",
    left: 5,
  },

  track_btn: {
    backgroundColor: "#6CC1FF",
    borderRadius: 15,
    padding: 5,
    left: "47%",
    top: "-89%",
    width: 80,
  },
  track_btn_text: {
    color: "#000",
    left: 5,
  },
});
