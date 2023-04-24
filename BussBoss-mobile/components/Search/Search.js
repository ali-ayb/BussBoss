import React from "react";
import { Text, TextInput } from "react-native";
function Search() {
  return (
    <TextInput
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
      }}
    />
  );
}

export default Search;
