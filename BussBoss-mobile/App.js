import { StyleSheet, View, Image } from "react-native";
import Background from "./components/Background/Background";
import Logo from "./components/Logo/Logo";

export default function App() {
  return (
    <View>
      <Background />
      <Logo />
      {/* <Image
        source={require("./assets/logo.png")}
        style={{
          width: 170,
          height: 40,
          marginLeft: 30,
          top: 40,
          position: "absolute",
          zIndex: 2,
        }}
      /> */}

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
