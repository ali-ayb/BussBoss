import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import Background from "../../components/Background/Background";
import ReserveTripCard from "../../components/ReserveTripCard/ReserveTripCard";
import { getToken } from "../../auth/auth";
import UseHttp from "../../hooks/request";
import { useEffect, useState } from "react";

export default function BussSchedule({ route }) {
  const [Schedule, setSchedule] = useState([]);
  const { driver_id } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      const token = await getToken();
      const result = await UseHttp(
        `get_trips_from_driver_id?driver_id=${driver_id}`,
        "GET",
        "",
        {
          Authorization: "bearer " + token,
        }
      );
      setSchedule(result.trips);
    };
    fetchData();
  }, []);

  const header = () => {
    return (
      <View style={styles.main}>
        <Background />
        <Text style={styles.title}>Bus Schedule</Text>
        <Image
          style={styles.buss_image}
          source={require("../../assets/Shuttle_bus.png")}
        />
        <Text style={styles.subtitle}>Choose Schedule</Text>
      </View>
    );
  };
  return (
    <FlatList
      ListHeaderComponent={header}
      data={Schedule}
      renderItem={({ item }) => <ReserveTripCard item={item} />}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{ flex: 1 }}
      style={styles.list}
    />
  );
}
const styles = StyleSheet.create({
  buss_image: {
    top: 120,
    left: "37%",
    width: 130,
    height: 130,
    zIndex: 2,
    position: "absolute",
  },
  main: {
    backgroundColor: "#F6F1F1",
    marginBottom: 80,
  },
  title: {
    position: "absolute",
    zIndex: 2,
    fontSize: 32,
    color: "#FFF",
    fontWeight: "bold",
    left: "30%",
    top: "8%",
  },
  subtitle: {
    position: "absolute",
    zIndex: 2,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    left: "9%",
    top: "100%",
  },
  list: {
    flexGrow: 0,
    height: "100%",
  },
});
