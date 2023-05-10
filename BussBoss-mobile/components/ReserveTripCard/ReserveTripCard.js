import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { getToken } from "../../auth/auth";
import Toast from "react-native-root-toast";
import UseHttp from "../../hooks/request";
import { useNavigation } from "@react-navigation/native";

function ReserveTripCard({ item }) {
  const destination = item.destination;
  const source = item.source;
  const price = item.price;
  const departure_time = new Date(item.departure_time);
  const arrival_time = new Date(item.arrival_time);
  // const isFull = false;
  const formData = new FormData();
  const navigation = useNavigation();

  const reserveTrip = async (id) => {
    const token = await getToken();
    formData.append("trip_id", id);
    const result = await UseHttp("reserve_trip", "POST", formData, {
      Authorization: "bearer " + token,
    });
    if (result.status === true) {
      Toast.show("Trip Reserved sucessfully ", {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        backgroundColor: "#6CC1FF",
        textStyle: { fontSize: 16, color: "white", fontWeight: "bold" },
        animation: true,
        hideOnPress: true,
        containerStyle: { top: 170, alignItems: "center", borderRadius: 15 },
      });
      navigation.navigate("Passenger");
    }
  };

  return (
    <View style={styles.CurrentTripCard}>
      <Image
        style={styles.clock_icon}
        source={require("../../assets/clock_icon.png")}
      />
      <Image
        style={styles.pin_icon}
        source={require("../../assets/pin_icon.png")}
      />
      <Text style={styles.trip_time}>
        {departure_time.getHours()}:{departure_time.getMinutes()} {"<-->"}
        {arrival_time.getHours()}:{arrival_time.getMinutes()}
      </Text>
      <Text style={styles.trip_position}>
        {source} {"<-->"} {destination}{" "}
      </Text>
      <Text style={styles.price}>{price}$</Text>
      <TouchableOpacity
        style={styles.finish_btn}
        onPress={() => {
          reserveTrip(item.id);
          // console.log(item.id);
        }}>
        <Text style={styles.Select_btn_text}>Select</Text>
      </TouchableOpacity>
      {/* {isFull ? <Text style={styles.full}>(Full Trip)</Text> : <></>} */}
    </View>
  );
}
export default ReserveTripCard;
const styles = StyleSheet.create({
  CurrentTripCard: {
    backgroundColor: "#FFF",
    height: 110,
    width: 335,
    top: 0,
    left: "10%",
    borderRadius: 15,
    marginBottom: 15,
    elevation: 20,
  },
  full: {
    top: -60,
    left: 258,
  },
  clock_icon: {
    top: 20,
    left: 25,
  },
  pin_icon: {
    height: 50,
    width: 30,
    top: 25,
    left: 20,
  },
  trip_time: {
    top: -50,
    left: 60,
    fontSize: 14,
  },
  trip_position: {
    top: -25,
    left: 60,
    fontSize: 14,
  },
  price: {
    top: -85,
    left: 260,
    fontSize: 14,
  },
  finish_btn: {
    backgroundColor: "#0E7BCB",
    borderRadius: 15,
    padding: 5,
    left: "73%",
    top: "-55%",
    width: 80,
  },
  Select_btn_text: {
    color: "#FFFFFF",
    left: "25%",
  },
});
