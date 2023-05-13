import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import DriverAllTripsCard from "../../components/DriverAllTripsCard/DriverAllTripsCard";
import { getToken } from "../../auth/auth";
import { useEffect, useState } from "react";
import UseHttp from "../../hooks/request";

export default function AllTrips() {
  const [allTrips, setallTrips] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(true);

  const fetchData = async () => {
    const token = await getToken();
    const result = await UseHttp("get_driver_finished_trips", "GET", "", {
      Authorization: "bearer " + token,
    });
    setallTrips(result.trips);
    setIsRefreshing(false);
  };

  useEffect(() => {
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
        <Text style={styles.title}>All Trips:</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={allTrips}
      ListHeaderComponent={header}
      renderItem={({ item }) => <DriverAllTripsCard item={item} />}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
      style={styles.list}
      refreshing={isRefreshing}
      onRefresh={fetchData}
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
  title: {
    left: 40,
    top: 340,
    position: "absolute",
    zIndex: 2,
    fontSize: 32,
    color: "black",
    fontWeight: "bold",
  },
  listContainer: {
    listContainer: {
      gap: -30,
    },
  },
  list: {
    flexGrow: 0, // Set the flex property to adjust height
  },
});
