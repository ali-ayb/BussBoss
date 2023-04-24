import { StyleSheet, View, Text } from "react-native";

function DriverCard() {
  return <View style={styles.driver_card}></View>;
}
export default DriverCard;
const styles = StyleSheet.create({
  driver_card: {
    backgroundColor: "#FFF",
    height: 150,
    width: 335,
    top: 70,
    left: 35,
    borderRadius: 15,
  },
});
