import { StyleSheet, View, Image, Text } from "react-native";

function CurrentTripCard() {
  return <View style={styles.CurrentTripCard}></View>;
}
export default CurrentTripCard;
const styles = StyleSheet.create({
  CurrentTripCard: {
    backgroundColor: "#FFF",
    height: 150,
    width: 335,
    top: 85,
    left: 35,
    borderRadius: 15,
    elevation: 20,
  },
});
