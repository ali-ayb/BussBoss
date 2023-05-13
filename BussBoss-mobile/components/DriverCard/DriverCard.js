import { StyleSheet, View, Image, Text } from "react-native";
import { Rating } from "react-native-ratings";

function DriverCard({ item }) {
  const first_name = item.first_name;
  const last_name = item.last_name;
  const departure_time = new Date(item.departure_time);
  const source = item.source;
  const rating = item.rating;

  return (
    <View style={styles.driver_card}>
      <Image
        style={styles.driver_img}
        source={require("../../assets/driver_img.png")}
      />
      <Text style={styles.driver_name}>
        {first_name} {last_name}
      </Text>
      <Text style={styles.trip_date}>
        When: {departure_time.getMonth()}/{departure_time.getDay()}{" "}
        {departure_time.getHours()}
        {":"}
        {departure_time.getMinutes()}
      </Text>
      <Text style={styles.trip_source}>Souce: {source}</Text>
      <Text style={styles.driver_Rating}>Rating</Text>
      <Rating
        type="custom"
        ratingColor="#146C94"
        ratingCount={5}
        startingValue={rating}
        imageSize={30}
        ratingBackgroundColor="#D9D9D9"
        tintColor="#fff"
        readonly="true"
        onFinishRating={this.ratingCompleted}
        style={{ paddingVertical: 10, top: -70, left: 25 }}
      />
    </View>
  );
}
export default DriverCard;
const styles = StyleSheet.create({
  driver_card: {
    backgroundColor: "#FFF",
    height: 150,
    width: 335,
    top: 0,
    left: 35,
    borderRadius: 15,
    elevation: 20,
    marginBottom: 30,
  },
  driver_img: {
    top: 25,
    left: 23,
  },
  driver_name: {
    top: -75,
    left: 125,
    fontSize: 16,
    fontWeight: "bold",
  },
  trip_date: {
    top: -70,
    left: 125,
    fontSize: 14,
    color: "#C2C2C2",
    fontWeight: "bold",
  },
  trip_source: {
    top: -70,
    left: 125,
    fontSize: 14,
    color: "#C2C2C2",
    fontWeight: "bold",
  },
  driver_Rating: {
    top: -70,
    left: 125,
    fontSize: 14,
    color: "#C2C2C2",
    fontWeight: "bold",
  },
});
