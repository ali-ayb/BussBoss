import { StyleSheet, View, Image } from "react-native";
import Background from "./components/Background/Background";

export default function App() {
  return (
    <View>
      <Background />
      <Image
        source={require("./assets/logo.png")}
        style={{
          width: 170,
          height: 40,
          marginLeft: 30,
          top: 40,
          position: "absolute",
          zIndex: 2,
        }}
      />

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
