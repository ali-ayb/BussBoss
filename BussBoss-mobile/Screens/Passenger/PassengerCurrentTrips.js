import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import CurrentTripCard from "../../components/CurrentTripCard/CurrentTripCard";
import { useEffect, useState } from "react";
import UseHttp from "../../hooks/request";
import { getToken } from "../../auth/auth";

export default function PassengerCurrentTrips() {
  const [currentReservations, setCurrentReservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = await getToken();
      const result = await UseHttp(
        "get_passenger_current_reservations",
        "GET",
        "",
        {
          Authorization: "bearer " + token,
        }
      );
      setCurrentReservations(result.currentReservation);
    };
    fetchData();
  }, []);

  const header = () => {
    return (
      <View style={{ backgroundColor: "#F6F1F1", marginBottom: 50 }}>
        <Background />
        <Logo />
        <Image
          source={require("../../assets/map_marker.png")}
          style={{
            top: 120,
            left: "40%",
            width: 90,
            height: 90,
            zIndex: 2,
            position: "absolute",
          }}
        />
        <Text style={styles.title}>Reserved Trips:</Text>
      </View>
    );
  };
  return (
    <FlatList
      ListHeaderComponent={header}
      data={currentReservations}
      renderItem={({ item }) => <CurrentTripCard item={item} />}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{ gap: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F6F1F1",
  },
  title: {
    left: 40,
    top: 340,
    position: "absolute",
    zIndex: 2,
    fontSize: 32,
    color: "black",
    fontWeight: "bold",
  },
});
