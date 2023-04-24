import { StyleSheet, View, Text } from "react-native";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import Greeting from "../../components/Greeting/Greeting";
import Search from "../../components/Search/Search";
import TripsBar from "../../components/TripsBar/TripsBar";
import DriverCard from "../../components/DriverCard/DriverCard";
export default function PassengerMain() {
  return (
    <View style={{ backgroundColor: "#F6F1F1", flex: 1 }}>
      <Background />
      <Greeting />
      <Text style={styles.search_title}>Where are you heading?</Text>
      <Search />
      <TripsBar />
      <Text style={styles.choose_driver}>Choose your driver</Text>
      <View style={{ flexDirection: "column", gap: 10 }}>
        <DriverCard />
        <DriverCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F6F1F1",
  },
  search_title: {
    left: 35,
    top: 130,
    position: "absolute",
    zIndex: 2,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  choose_driver: {
    left: 40,
    top: 380,
    position: "absolute",
    zIndex: 2,
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
});
