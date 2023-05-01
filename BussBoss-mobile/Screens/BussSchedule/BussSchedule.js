import { Image, StyleSheet, Text, View } from "react-native";
import Background from "../../components/Background/Background";
import ReserveTripCard from "../../components/ReserveTripCard/ReserveTripCard";

export default function BussSchedule() {
  return (
    <View style={{ backgroundColor: "#F6F1F1", flex: 1 }}>
      <Background />
      <Text style={styles.title}>Bus Schedule</Text>
      <Image
        style={styles.buss_image}
        source={require("../../assets/Shuttle_bus.png")}
      />
      <Text style={styles.subtitle}>Choose Schedule</Text>
      <View style={{ flexDirection: "column", gap: 10 }}>
        <ReserveTripCard isFull={false} />
        <ReserveTripCard isFull={true} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  buss_image: {
    top: 120,
    left: "37%",
    width: 130,
    height: 130,
    zIndex: 2,
    position: "absolute",
  },
  title: {
    position: "absolute",
    zIndex: 2,
    fontSize: 32,
    color: "#FFF",
    fontWeight: "bold",
    left: "30%",
    top: "8%",
  },
  subtitle: {
    position: "absolute",
    zIndex: 2,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    left: "7%",
    top: "40%",
  },
  main: {
    backgroundColor: "#F6F1F1",
  },
});
