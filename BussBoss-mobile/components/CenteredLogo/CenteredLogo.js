import React from "react";
import { Image } from "react-native";

function logo() {
  return (
    <Image
      source={require("../../assets/CenteredLogo.png")}
      style={{
        marginLeft: 150,
        top: 110,
        position: "absolute",
        zIndex: 2,
      }}
    />
  );
}

export default logo;
