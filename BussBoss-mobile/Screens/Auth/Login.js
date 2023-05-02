import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Background from "../../components/Background/Background";
import CenteredLogo from "../../components/CenteredLogo/CenteredLogo";

function handlePress() {
  alert("test");
}
export default function Login() {
  return (
    <View style={{ backgroundColor: "#F6F1F1", flex: 1 }}>
      <Background />
      <CenteredLogo />
      <Text style={styles.welcome_title}>Welcome Back.</Text>
      <View style={{ gap: 20 }}>
        <TextInput style={styles.TextInput} placeholder="  Phone Number" />
        <TextInput style={styles.TextInput} placeholder="  Password" />
      </View>
      <TouchableOpacity>
        <View style={styles.Login_btn} onPress={handlePress}>
          <Text style={{ fontSize: 24, color: "#FFF", top: 8, left: 125 }}>
            Login
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome_title: {
    fontSize: 32,
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center",
    left: 110,
  },
  TextInput: {
    backgroundColor: "#FFF",
    padding: 10,
    width: 300,
    borderRadius: 15,
    top: 70,
    left: 50,
    elevation: 10,
  },
  Login_btn: {
    backgroundColor: "#146C94",
    width: 300,
    height: 50,
    top: 130,
    left: 50,
    borderRadius: 15,
    elevation: 5,
  },
});
