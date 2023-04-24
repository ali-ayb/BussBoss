import { StyleSheet, View, Text } from "react-native";
function TripsBar() {
  return (
    <View style={styles.trips_bar}>
      <Text style={styles.trips_title}>TOTAL TRIPS</Text>
      <Text style={styles.trips_count}>102</Text>
    </View>
  );
}
export default TripsBar;

const styles = StyleSheet.create({
  trips_bar: {
    backgroundColor: "#19A7CE",
    top: 240,
    left: 35,
    height: 120,
    width: 335,
    position: "absolute",
    zIndex: 2,
    borderRadius: 15,
  },
  trips_title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.5)",
    top: 20,
    left: 30,
  },
  trips_count: {
    fontSize: 42,
    fontWeight: "bold",
    color: "white",
    top: 20,
    left: 40,
  },
});
