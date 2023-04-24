import React from "react";
import { Text, TextInput } from "react-native";
function Search() {
  return (
    <TextInput
      style={{ height: 40, top: 400 }}
      placeholder="Type here to translate!"
    />
  );
}

export default Search;
