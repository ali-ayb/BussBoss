import { StyleSheet, View, Text } from "react-native";
function TripsBar() {
  return <View style={styles.trips_bar}></View>;
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
});
