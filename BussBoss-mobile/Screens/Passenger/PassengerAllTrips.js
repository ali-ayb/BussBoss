import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import AllTripsCard from "../../components/AllTripsCard/AllTripsCard";

export default function PassengerCurrentTrips() {
  const data = [1, 2, 3, 4, 5, 6];

  const renderItem = ({ item }) => <AllTripsCard />;

  return (
    <View style={styles.container}>
      <Background />
      <Logo />
      <Image
        source={require("../../assets/Delivery_Time.png")}
        style={styles.image}
      />
      <Text style={styles.choose_driver}>All Trips:</Text>
      <View style={styles.cards_container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}
          contentContainerStyle={styles.listContainer}
          style={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F1F1",
  },
  cards_container: {
    top: 80,
    height: 400,
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
    gap: 10,
  },
  list: {
    flexGrow: 0,
  },
});
