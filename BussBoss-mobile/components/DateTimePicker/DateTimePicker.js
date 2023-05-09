import React, { useState } from "react";
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const MyDateTimePicker = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [time2, setTime2] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
    setShowDatePicker(false);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === "ios");
    setTime(currentTime);
    setShowTimePicker(false);
  };

  const onDate2Change = (event, selectedDate) => {
    const currentDate = selectedDate || date2;
    setShowDatePicker(Platform.OS === "ios");
    setDate2(currentDate);
    setShowDatePicker(false);
  };

  const onTime2Change = (event, selectedTime) => {
    const currentTime = selectedTime || time2;
    setShowTimePicker(Platform.OS === "ios");
    setTime2(currentTime);
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
        <Text style={{ color: "#FFF" }}>Time</Text>
        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={onTimeChange}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => showDateTimePicker("date")}
        style={styles.date}>
        <Text style={{ color: "#FFF" }}>Date</Text>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.selectedValue}>
        {` ${date.toDateString()}`}
        {` ${time.toLocaleTimeString()}`}
      </Text>

      <TouchableOpacity
        onPress={() => showDateTimePicker("time")}
        style={styles.time}>
        <Text style={{ color: "#FFF" }}>Time</Text>
        {showTimePicker && (
          <DateTimePicker
            value={time2}
            mode="time"
            display="default"
            onChange={onTime2Change}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => showDateTimePicker("date")}
        style={styles.date}>
        <Text style={{ color: "#FFF" }}>Date</Text>
        {showDatePicker && (
          <DateTimePicker
            value={date2}
            mode="date"
            display="default"
            onChange={onDate2Change}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.selectedValue}>
        {` ${date2.toDateString()}`}
        {` ${time2.toLocaleTimeString()}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    backgroundColor: "#19A7CE",
    width: 50,
    padding: 10,
    left: 290,
    top: -30,
  },
  time: {
    backgroundColor: "#19A7CE",
    width: 50,
    padding: 10,
    left: 350,
    top: 8,
  },
  selectedValue: {
    backgroundColor: "#D9D9D9",
    padding: 5,
    width: 220,
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    top: -70,
    left: 50,
  },
});

export default MyDateTimePicker;
