import { StyleSheet, View, Text, Image } from "react-native";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import CurrentTripCard from "../../components/CurrentTripCard/CurrentTripCard";

export default function PassengerMain() {
  return (
    <View style={{ backgroundColor: "#F6F1F1", flex: 1 }}>
      <Background />
      <Logo />
      <Image
        source={require("../../assets/map_marker.png")}
        style={{
          top: 120,
          left: "40%",
          width: 90,
          height: 90,
          zIndex: 2,
          position: "absolute",
        }}
      />
      <Text style={styles.choose_driver}>Trips:</Text>
      <View style={{ flexDirection: "column", gap: 10 }}>
        <CurrentTripCard />
        <CurrentTripCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F6F1F1",
  },
  choose_driver: {
    left: 40,
    top: 340,
    position: "absolute",
    zIndex: 2,
    fontSize: 32,
    color: "black",
    fontWeight: "bold",
  },
});
