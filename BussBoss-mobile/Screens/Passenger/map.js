import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import MapViewDirections from "react-native-maps-directions";
import { useEffect, useState } from "react";
import { getToken } from "../../auth/auth";
import UseHttp from "../../hooks/request";
import { useRoute } from "@react-navigation/native";

export default function BussSchedule() {
  const route = useRoute();
  const formData = new FormData();
  const { driver_id } = route.params;
  const [myLocation, setMyLocation] = useState({
    latitude: 33.448099,
    longitude: 35.398279,
  });
  const [driverLocation, setDriverLocation] = useState({
    latitude: 33.377696,
    longitude: 35.481078,
  });

  const [duration, setDuration] = useState(null);
  const [modified_duration, setModifiedDuration] = useState(null);

  // const getDriverLocation = async () => {
  //   formData.append("driver_id", driver_id);

  //   const token = await getToken();
  //   const result = await UseHttp("get_driver_location", "POST", formData, {
  //     Authorization: "bearer " + token,
  //   });
  //   const latitude = result.status.latitude;
  //   const longitude = result.status.longitude;
  //   setDriverLocation({
  //     latitude,
  //     longitude,
  //   });
  // };

  // useEffect(getDriverLocation, []);

  const onReady = (result) => {
    setDuration(result.duration);
  };

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
          origin={driverLocation}
          destination={myLocation}
          apikey={Constants.manifest.extra.googleApiKey}
          strokeWidth={3}
          strokeColor={"#146C94"}
          onReady={onReady}
        />

        <Marker coordinate={driverLocation} title={"Bus Location"} />
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
    flex: 1,
  },
  mapView: {
    flex: 1,
    height: "100%",
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
