import { StyleSheet, View, Text } from "react-native";

export default function PassengerMain() {
  return (
    <Text style={styles.name}>
      {"     "} Hello,{"\n"}Ali Ayoub
    </Text>
  );
}

const styles = StyleSheet.create({
  name: {
    left: 300,
    top: 40,
    position: "absolute",
    zIndex: 2,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
