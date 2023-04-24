import { StyleSheet, View, Text } from "react-native";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import Greeting from "../../components/Greeting/Greeting";
import Search from "../../components/Search/Search";
import TripsBar from "../../components/TripsBar/TripsBar";
export default function PassengerMain() {
  return (
    <View>
      <Background />
      <Logo />
      <Greeting />
      <Text style={styles.search_title}>Where are you heading?</Text>
      <Search />
      <TripsBar />
    </View>
  );
}

const styles = StyleSheet.create({
  search_title: {
    left: 35,
    top: 130,
    position: "absolute",
    zIndex: 2,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
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
  paid_title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    color: "rgba(255, 255, 255, 0.5)",
    top: -50,
    left: 215,
  },
  paid_number: {
    fontSize: 42,
    fontWeight: "bold",
    color: "white",
    top: -50,
    left: 230,
  },
});
