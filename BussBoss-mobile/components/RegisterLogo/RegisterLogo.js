import React from "react";
import { Image } from "react-native";

function logo() {
  return (
    <Image
      source={require("../../assets/RegisterLogo.png")}
      style={{
        marginLeft: 100,
        top: 140,
        position: "absolute",
        zIndex: 2,
      }}
    />
  );
}

export default logo;
