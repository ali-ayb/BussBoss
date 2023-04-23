import { StyleSheet, View, Image, Text } from "react-native";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import Greeting from "../../components/Greeting/Greeting";
export default function PassengerMain() {
  return (
    <View>
      <Background />
      <Logo />
      <Greeting />
    </View>
  );
}

const styles = StyleSheet.create({});
