import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { Platform, StatusBar, StyleSheet } from "react-native";
import Constants from "expo-constants";
// import * as geoLocation from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { useState } from "react";

export default function BussSchedule() {
  const [myLocation, setMyLocation] = useState({
    latitude: 33.450736,
    longitude: 35.396315,
  });
  const [userLocation, setUserLocation] = useState({
    latitude: 33.490736,
    longitude: 35.366315,
  });

  return (
    <SafeAreaView style={styles.mainView}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: myLocation.latitude,
          longitude: myLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}>
        <Marker coordinate={myLocation} title={"Your Location"} />

        <MapViewDirections
          origin={userLocation}
          destination={myLocation}
          apikey={Constants.manifest.extra.googleApiKey}
          strokeWidth={3}
          strokeColor={"#1B2126"}
        />

        <Marker coordinate={userLocation} title={"Picker Location"} />
      </MapView>
    </SafeAreaView>
  );
}
// const styles = StyleSheet.create({
//   mainView: {
//     backgroundColor: "#F6F1F1",
//     marginBottom: 80,
//   },
// });

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "blue",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
  mapView: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
