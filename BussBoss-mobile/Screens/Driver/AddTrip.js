import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import MyDateTimePicker from "../../components/DateTimePicker/DateTimePicker";
import { useState } from "react";

export default function DriverMain() {
  const [dateTime, setDateTime] = useState(null);
  const [selectedValue, setSelectedValue] = useState("default");

  function onPressLearnMore() {
    if (dateTime) {
      alert(dateTime.toString());
    } else {
      alert("Please select a date and time");
    }
  }

  return (
    <ScrollView style={{ backgroundColor: "#F6F1F1", flex: 1 }}>
      <Background />
      <Logo />
      <Image
        source={require("../../assets/Map_Pinpoint.png")}
        style={styles.image}
      />
      <View>
        <Text style={styles.title1}>Departure Time:</Text>
      </View>

      <MyDateTimePicker
        onChange={(event, selectedDate) => setDateTime(selectedDate)}
      />
      <View>
        <Text style={styles.title2}>Arrival Time:</Text>
      </View>

      <Picker
        style={styles.source}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Source" value="Source" />
        <Picker.Item label="Nabatieh" value="Nabatieh" />
        <Picker.Item label="Beirut" value="Beirut" />
        <Picker.Item label="Jonieh" value="Jonieh" />
      </Picker>

      <Picker
        style={styles.destination}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Destination" value="Destination" />
        <Picker.Item label="Nabatieh" value="Nabatieh" />
        <Picker.Item label="Beirut" value="Beirut" />
        <Picker.Item label="Jonieh" value="Jonieh" />
      </Picker>
      <TouchableOpacity style={styles.add_trip_btn} onPress={onPressLearnMore}>
        <Text style={styles.add_trip_txt}>Add Trip</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    top: 120,
    left: "50%",
    width: 130,
    height: 110,
    zIndex: 2,
    position: "absolute",
  },
  title1: {
    fontWeight: "bold",
    fontSize: 18,
    left: 60,
    top: -20,
  },
  title2: {
    fontWeight: "bold",
    fontSize: 18,
    left: 60,
    top: -155,
  },

  add_trip_txt: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#FFF",
    left: 7,
  },
  add_trip_btn: {
    backgroundColor: "#146C94",
    width: 100,
    padding: 10,
    borderRadius: 15,
    left: 150,
    top: 0,
    marginBottom: 200,
  },
  TextInput: {
    backgroundColor: "#FFF",
    padding: 10,
    width: 250,
    borderRadius: 15,
    top: -75,
    left: 50,
    elevation: 10,
  },
  source: {
    backgroundColor: "#FFF",
    top: -80,
    width: 250,
    left: 60,
    borderRadius: 15,
  },
  destination: {
    backgroundColor: "#FFF",
    top: -50,
    width: 250,
    left: 60,
    borderRadius: 15,
  },
});
