import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import { useNavigation } from "@react-navigation/native";
import MyDateTimePicker from "../../components/DateTimePicker/DateTimePicker";
import { useState } from "react";

export default function DriverMain() {
  const [dateTime, setDateTime] = useState(null);

  function onPressLearnMore() {
    if (dateTime) {
      alert(dateTime.toString());
    } else {
      alert("Please select a date and time");
    }
  }

  return (
    <View style={{ backgroundColor: "#F6F1F1", flex: 1 }}>
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
      <TouchableOpacity style={styles.add_trip_btn} onPress={onPressLearnMore}>
        <Text style={styles.add_trip_txt}>Add Trip</Text>
      </TouchableOpacity>
    </View>
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
  },
  title2: {
    fontWeight: "bold",
    fontSize: 18,
    left: 60,
    top: -140,
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
    top: 80,
  },
});
