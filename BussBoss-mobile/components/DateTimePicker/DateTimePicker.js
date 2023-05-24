import React, { useState } from "react";
import {
  View,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const MyDateTimePicker = () => {
  const [departureDate, setDepartureDate] = useState(new Date());
  const [departuretime, setDepartureTime] = useState(new Date());
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [arrivalTime, setArrivalTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // console.log(time.getHours());

  const onDepartureDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || departureDate;
    setShowDatePicker(Platform.OS === "ios");
    setDepartureDate(currentDate);
    setShowDatePicker(false);
  };

  const onDepartureTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || departuretime;
    setShowTimePicker(Platform.OS === "ios");
    setDepartureTime(currentTime);
    setShowTimePicker(false);
  };

  const onArrivalDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || arrivalDate;
    setShowDatePicker(Platform.OS === "ios");
    setArrivalDate(currentDate);
    setShowDatePicker(false);
  };

  const onArrivalTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || arrivalTime;
    setShowTimePicker(Platform.OS === "ios");
    setArrivalTime(currentTime);
    setShowTimePicker(false);
  };

  const showDateTimePicker = (picker) => {
    if (picker === "date") {
      setShowDatePicker(true);
    } else if (picker === "time") {
      setShowTimePicker(true);
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => showDateTimePicker("time")}
        style={styles.time}>
        <Text style={{ color: "#FFF", left: 4 }}>Time</Text>
        {showTimePicker && (
          <DateTimePicker
            value={departuretime}
            mode="time"
            display="default"
            onChange={onDepartureTimeChange}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => showDateTimePicker("date")}
        style={styles.date}>
        <Text style={{ color: "#FFF", left: 4 }}>Date</Text>
        {showDatePicker && (
          <DateTimePicker
            value={departureDate}
            mode="date"
            display="default"
            onChange={onDepartureDateChange}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.selectedValue}>
        {` ${departureDate.toDateString()}`}
        {` ${departuretime.toLocaleTimeString()}`}
      </Text>

      <TouchableOpacity
        onPress={() => showDateTimePicker("time")}
        style={styles.time}>
        <Text style={{ color: "#FFF", left: 4 }}>Time</Text>
        {showTimePicker && (
          <DateTimePicker
            value={arrivalTime}
            mode="time"
            display="default"
            onChange={onArrivalTimeChange}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => showDateTimePicker("date")}
        style={styles.date}>
        <Text style={{ color: "#FFF", left: 4 }}>Date</Text>
        {showDatePicker && (
          <DateTimePicker
            value={arrivalDate}
            mode="date"
            display="default"
            onChange={onArrivalDateChange}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.selectedValue}>
        {` ${arrivalDate.toDateString()}`}
        {` ${arrivalTime.toLocaleTimeString()}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    backgroundColor: "#19A7CE",
    width: 55,
    padding: 7,
    left: 290,
    top: -50,
    borderRadius: 15,
    elevation: 15,
  },
  time: {
    backgroundColor: "#19A7CE",
    width: 55,
    padding: 7,
    left: 350,
    top: -13,
    borderRadius: 15,
    elevation: 15,
  },
  selectedValue: {
    backgroundColor: "#FFF",
    padding: 5,
    width: 245,
    marginTop: 5,
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    top: -90,
    left: 40,
    elevation: 20,
    borderRadius: 14,
  },
});

export default MyDateTimePicker;
