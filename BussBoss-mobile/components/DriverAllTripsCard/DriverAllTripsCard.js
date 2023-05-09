import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Rating } from "react-native-ratings";

function AllTripsCard({ item }) {
  const destination = item.destination;
  const source = item.source;
  const trip_id = item.id;
  const rating = item.rating;
  const departure_time = new Date(item.departure_time);
  const arrival_time = new Date(item.arrival_time);
  return (
    <View style={styles.AllTripsCard}>
      {/* <Text style={styles.driver_name}>Driver: Driver Name</Text> */}
      <Text style={styles.driver_name}>Trip Number: {trip_id}</Text>
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
      <Text style={styles.trip_time}>
        {departure_time.getHours()}:{departure_time.getMinutes()} {"<-->"}
        {arrival_time.getHours()}:{arrival_time.getMinutes()}
      </Text>
      <Text style={styles.trip_position}>
        {source} {"<-->"} {destination}
      </Text>
      <Text style={styles.date}>
        {departure_time.getDay()}/{departure_time.getMonth()}/
        {departure_time.getFullYear()}
      </Text>
      <Text style={styles.rating}>Average Rating</Text>
      <Rating
        type="custom"
        ratingColor="#146C94"
        ratingCount={5}
        imageSize={30}
        ratingBackgroundColor="#D9D9D9"
        startingValue={rating}
        tintColor="#FFF"
        readonly="true"
        onFinishRating={this.ratingCompleted}
        style={{ paddingVertical: 10, top: -101, left: 40 }}
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
