import { StyleSheet, View, Image, Text } from "react-native";

function DriverCard() {
  return (
    <View style={styles.driver_card}>
      <Image
        style={styles.driver_img}
        source={require("../../assets/driver_img.png")}
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
    top: 70,
    left: 35,
    borderRadius: 15,
    elevation: 20,
  },
  driver_img: {
    top: 25,
    left: 23,
  },
});
