import { StyleSheet, View, Text } from "react-native";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import Greeting from "../../components/Greeting/Greeting";
import Search from "../../components/Search/Search";
export default function PassengerMain() {
  return (
    <View>
      <Background />
      <Logo />
      <Greeting />
      <Text style={styles.search_title}>Where are you heading?</Text>
      <Search />
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
});
