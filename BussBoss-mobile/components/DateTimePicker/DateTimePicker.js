import React, { useState } from "react";
import { View, TextInput, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DateTimeInput() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <View>
      <TextInput value={date.toString()} editable={false} />
      <Button title="Select Date" onPress={showDatePicker} />
      {show && (
        <DateTimePicker
          value={date}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

// import { StatusBar } from "expo-status-bar";
// import react, { useState } from "react";
// import { StyleSheet, Text, View, Button, Platform } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";

// export default function DateTime() {
//   const [date, setDate] = useState(new Date());
//   const [mode, setMode] = useState("date");
//   const [show, setShow] = useState(false);
//   const [text, setText] = useState("Empty");

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === "ios");
//     setDate(currentDate);

//     let tempDate = new Date(currentDate);
//     let fDate =
//       tempDate.getDate() +
//       "/" +
//       (tempDate.getMonth() + 1) +
//       "/" +
//       tempDate.getFullYear();
//     let fTime =
//       "Hours" + tempDate.getHours() + "| Minutes" + tempDate.getMinutes();
//     setText(fDate + "\n" + fTime);
//   };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };
//   return (
//     <View style={styles.container}>
//       <Text>{text}</Text>
//       <View style={{ margin: 20 }}>
//         <Button title="DatePicker" onPress={() => showMode("date")} />
//       </View>
//       <View style={{ margin: 20 }}>
//         <Button title="TimePicker" onPress={() => showMode("time")} />
//       </View>
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={new Date()}
//           mode="datetime"
//           is24Hour={true}
//           display="default"
//           onChange={(event, selectedDate) => setDateTime(selectedDate)}
//         />
//       )}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
