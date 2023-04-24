import { StyleSheet, View, Image, Text } from "react-native";

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
    left: 35,
    borderRadius: 15,
    elevation: 20,
  },
  clock_icon: {
    // height: 40,
    // width: 50,
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
});
