import { Image, StyleSheet, Text, View } from "react-native";
import Background from "../../components/Background/Background";
import ReserveTripCard from "../../components/ReserveTripCard/ReserveTripCard";
import { ScrollView } from "react-native-gesture-handler";

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
      <View style={{ height: 400, flexGrow: 0, gap: 10, marginTop: 0 }}>
        <ScrollView contentContainerStyle={{ gap: 10, marginBottom: 500 }}>
          <ReserveTripCard isFull={false} />
          <ReserveTripCard isFull={false} />
          <ReserveTripCard isFull={false} />
          <ReserveTripCard isFull={false} />
          <ReserveTripCard isFull={false} />
          <ReserveTripCard isFull={false} />
          <ReserveTripCard isFull={true} />
        </ScrollView>
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
    left: "9%",
    top: "47%",
  },
  main: {
    backgroundColor: "#F6F1F1",
  },
});
