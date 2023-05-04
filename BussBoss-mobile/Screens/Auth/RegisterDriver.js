import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import RegisterLogo from "../../components/RegisterLogo/RegisterLogo";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";
import { useState } from "react";

function login() {
  alert("register");
}
export default function RegisterDriver() {
  const [value, setValue] = useState("first");

  return (
    <View style={{ backgroundColor: "#F6F1F1", flex: 1 }}>
      <View style={{ top: -60 }}>
        <RegisterLogo />
      </View>

      <View style={{ gap: 20 }}>
        <TextInput style={styles.first_name} placeholder="  First Name" />
        <TextInput style={styles.last_name} placeholder="  Last Name" />
        <TextInput style={styles.TextInput} placeholder="  Phone Number" />
        <TextInput style={styles.TextInput} placeholder="  Password" />
        <TextInput style={styles.TextInput} placeholder="  Birth Date" />
        <TextInput style={styles.TextInput} placeholder="  Licence Number" />
        <TextInput style={styles.TextInput} placeholder="  Image" />
        <RadioButton.Group onValueChange={setValue} value={value}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              top: 160,
              left: -100,
            }}>
            <RadioButton value="first" />
            <Text>Male</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              top: 110,
              left: 100,
            }}>
            <RadioButton value="second" />
            <Text>Female</Text>
          </View>
        </RadioButton.Group>
      </View>
      <TouchableOpacity style={styles.register_btn} onPress={login}>
        <Text style={{ fontSize: 24, color: "#FFF", top: 8, left: 35 }}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  first_name: {
    backgroundColor: "#FFF",
    padding: 10,
    width: 150,
    borderRadius: 15,
    top: 230,
    left: 50,
    elevation: 10,
  },
  last_name: {
    backgroundColor: "#FFF",
    padding: 10,
    width: 150,
    borderRadius: 15,
    top: 163,
    left: 220,
    elevation: 10,
  },
  TextInput: {
    backgroundColor: "#FFF",
    padding: 10,
    width: 320,
    borderRadius: 15,
    top: 165,
    left: 50,
    elevation: 10,
  },
  register_btn: {
    backgroundColor: "#146C94",
    width: 150,
    height: 50,
    top: 120,
    left: 135,
    borderRadius: 15,
    elevation: 5,
  },
});
