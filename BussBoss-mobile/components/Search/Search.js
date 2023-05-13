import React from "react";
import { Text, TextInput } from "react-native";
function Search(props) {
  const { userInput, setUserInput } = props;

  return (
    <TextInput
      value={userInput}
      onChangeText={(e) => {
        setUserInput(e);
      }}
      placeholder="Search"
      placeholderTextColor="#FFF"
      style={{
        height: 40,
        top: 160,
        left: 40,
        position: "absolute",
        zIndex: 2,
        width: 330,
        borderWidth: 1,
        borderColor: "#FFF",
        borderRadius: 5,
        paddingHorizontal: 10,
        color: "#FFF",
      }}
    />
  );
}

export default Search;
