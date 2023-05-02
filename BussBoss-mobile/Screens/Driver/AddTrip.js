import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "../../components/DateTimePicker/DateTimePicker";
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
        <Text style={styles.title1}>Departure Time</Text>
      </View>
      <DateTimePicker
        onChange={(event, selectedDate) => setDateTime(selectedDate)}
      />

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
});
