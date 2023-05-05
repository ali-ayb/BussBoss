import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Rating } from "react-native-ratings";
function onPressLearnMore() {
  alert("test");
}
function AllTripsCard() {
  return (
    <View style={styles.AllTripsCard}>
      {/* <Text style={styles.driver_name}>Driver: Driver Name</Text> */}
      <Text style={styles.driver_name}>Driver: Driver Name</Text>
      <Image
        style={styles.calender_icon}
        source={require("../../assets/calender.png")}
      />
      <Image
        style={styles.clock_icon}
        source={require("../../assets/clock_icon.png")}
      />
      <Image
        style={styles.pin_icon}
        source={require("../../assets/pin_icon.png")}
      />
      <Text style={styles.trip_time}>10:00 {"<-->"} 10:30</Text>
      <Text style={styles.trip_position}>From {"<-->"} To Position </Text>
      <Text style={styles.date}>20/4/2023</Text>
      <Text style={styles.rating}>Rating</Text>
      <Rating
        type="custom"
        ratingColor="#146C94"
        ratingCount={5}
        imageSize={30}
        ratingBackgroundColor="#D9D9D9"
        tintColor="#FFF"
        readonly="true"
        onFinishRating={this.ratingCompleted}
        style={{ paddingVertical: 10, top: -100, left: 0 }}
      />
    </View>
  );
}
export default AllTripsCard;
const styles = StyleSheet.create({
  AllTripsCard: {
    backgroundColor: "#FFF",
    height: 140,
    width: 335,
    left: "10%",
    borderRadius: 15,
    elevation: 20,
    marginBottom: 50,
  },
  rating: {
    fontSize: 16,
    top: -67,
    left: 25,
  },
  calender_icon: { top: 17, left: 190 },
  clock_icon: {
    top: -10,
    left: 25,
  },
  pin_icon: {
    height: 50,
    width: 30,
    top: -15,
    left: 20,
  },
  trip_time: {
    top: -80,
    left: 60,
    fontSize: 14,
  },
  trip_position: {
    top: -65,
    left: 60,
    fontSize: 14,
  },
  driver_name: {
    top: 10,
    left: 25,
    fontSize: 14,
    fontWeight: "bold",
  },
  date: {
    top: -115,
    left: 230,
    fontSize: 14,
  },
});
