import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import AllTripsCard from "../../components/AllTripsCard/AllTripsCard";
import { getToken } from "../../auth/auth";
import { useEffect, useState } from "react";
import UseHttp from "../../hooks/request";

export default function PassengerCurrentTrips() {
  const [allTrips, setallTrips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = await getToken();
      const result = await UseHttp("get_passenger_finished_trips", "GET", "", {
        Authorization: "bearer " + token,
      });
      setallTrips(result.trips);
    };
    fetchData();
  }, []);

  const header = () => {
    return (
      <View style={styles.container}>
        <Background />
        <Logo />
        <Image
          source={require("../../assets/Delivery_Time.png")}
          style={styles.image}
        />
        <Text style={styles.choose_driver}>All Trips:</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={allTrips}
      ListHeaderComponent={header}
      renderItem={({ item }) => <AllTripsCard item={item} />}
      keyExtractor={(item) => item.toString()}
      contentContainerStyle={styles.listContainer}
      style={styles.list}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F1F1",
    marginBottom: 80,
  },
  image: {
    top: 120,
    left: "40%",
    width: 90,
    height: 90,
    zIndex: 2,
    position: "absolute",
  },
  choose_driver: {
    left: 40,
    top: 340,
    position: "absolute",
    zIndex: 2,
    fontSize: 32,
    color: "black",
    fontWeight: "bold",
  },
  listContainer: {
    flexDirection: "column",
    gap: -30,
  },
  list: {
    flexGrow: 0,
  },
});
