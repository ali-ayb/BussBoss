import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import MapViewDirections from "react-native-maps-directions";
import { useEffect, useState } from "react";
import Geolocation from "react-native-geolocation-service";
import { PermissionsAndroid } from "react-native";
import * as geoLocation from "expo-location";

export default function BussSchedule() {
  const [myLocation, setMyLocation] = useState({
    latitude: 33.450736,
    longitude: 35.396315,
  });
  const [userLocation, setUserLocation] = useState({
    latitude: 33.490736,
    longitude: 35.366315,
  });

  const getLocation = async () => {
    let { status } = await geoLocation.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }
    let getLocation = await geoLocation.getCurrentPositionAsync({});
    setMyLocation({
      latitude: getLocation.coords.latitude,
      longitude: getLocation.coords.longitude,
    });
  };
  getLocation();
  console.log(myLocation);
  const [duration, setDuration] = useState(null);
  const [modified_duration, setModifiedDuration] = useState(null);

  const onReady = (result) => {
    setDuration(result.duration);
  };
  // console.log(duration);

  useEffect(() => {
    if (duration !== null && modified_duration === null) {
      const modDur = duration.toString().slice(0, 4);
      setModifiedDuration(modDur);
    }
  }, [duration, modified_duration]);

  return (
    <View style={styles.mainView}>
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
          onReady={onReady}
        />

        <Marker coordinate={userLocation} title={"Bus Location"} />
      </MapView>
      <View style={styles.arrival_time}>
        <Text
          style={{ fontWeight: "bold", color: "#FFF", left: 45, fontSize: 17 }}>
          Arrives In: {modified_duration} minutes
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#146C94",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    // alignItems: "center",
    // height: "100%",
  },
  mapView: {
    flex: 1,
    height: "100%",
    // width: "100%",
  },
  arrival_time: {
    height: 50,
    width: "60%",
    bottom: 0,
    position: "absolute",
    bottom: 100,
    left: 85,
    opacity: 0.9,
    backgroundColor: "#146C94",
    justifyContent: "center",
    borderRadius: 15,
  },
});
