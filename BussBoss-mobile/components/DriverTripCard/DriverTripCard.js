import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function DriverTripCard({ item, refreshData }) {
  const destination = item.destination;
  const source = item.source;
  const passenger_number = item.passenger_number;
  const seats_available = item.seats_available;
  const reservation_id = item.id;
  const driver_id = item.driver_id;
  const departure_time = new Date(item.departure_time);
  const arrival_time = new Date(item.arrival_time);
  const formData = new FormData();
  function onPressLearnMore() {
    alert("test");
  }
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
      <Text style={styles.trip_position}>
        {source} {"<-->"} {destination}
      </Text>
      <Text style={styles.passenger_number}>
        Passenger: {passenger_number}/{seats_available}
      </Text>
      <TouchableOpacity style={styles.finish_btn} onPress={onPressLearnMore}>
        <Text style={styles.cancel_btn_text}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}
export default DriverTripCard;
const styles = StyleSheet.create({
  CurrentTripCard: {
    backgroundColor: "#FFF",
    height: 110,
    width: 335,
    top: 0,
    left: "10%",
    borderRadius: 15,
    elevation: 20,
    marginBottom: 30,
  },
  full: {
    top: -60,
    left: 258,
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
  passenger_number: {
    top: -85,
    left: 220,
    fontSize: 14,
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
    top: "-55%",
    width: 80,
  },
  cancel_btn_text: {
    color: "#FFFFFF",
    left: "22%",
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
