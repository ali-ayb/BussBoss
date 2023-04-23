import React from "react";
import { Image } from "react-native";

function Background() {
  return (
    <Image
      source={require("../../assets/rectangle.png")}
      style={{
        width: "100%",
        height: "60%",
        // position: "relative",
        zIndex: 2,
      }}
    />
  );
}

export default Background;
