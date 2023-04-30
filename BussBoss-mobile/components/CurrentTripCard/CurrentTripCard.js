import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
function onPressLearnMore() {
  alert("test");
}
function CurrentTripCard() {
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
      <Text style={styles.trip_time}>10:00 {"<-->"} 10:30</Text>
      <Text style={styles.trip_position}>To Position </Text>

      <Text style={styles.driver_name}>Driver: Driver Name</Text>

      <TouchableOpacity style={styles.finish_btn} onPress={onPressLearnMore}>
        <Text style={styles.finish_btn_text}>Finish Trip</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.track_btn} onPress={onPressLearnMore}>
        <Text style={styles.track_btn_text}>Finish Trip</Text>
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
    top: 85,
    left: "10%",
    borderRadius: 15,
    elevation: 20,
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
    fontSize: 14,
  },
  trip_position: {
    top: -25,
    left: 60,
    fontSize: 14,
  },
  driver_name: {
    top: -85,
    left: 200,
    fontSize: 14,
  },
  track_btn: {
    borderRadius: 15,
  },
  finish_btn: {
    backgroundColor: "#0E7BCB",
    borderRadius: 15,
    padding: 5,
    left: "73%",
    top: "-55%",
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
    top: "-80%",
    width: 80,
  },
  track_btn_text: {
    color: "#000",
    left: 5,
  },
});
