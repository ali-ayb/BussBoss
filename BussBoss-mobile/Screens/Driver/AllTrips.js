import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import DriverAllTripsCard from "../../components/DriverAllTripsCard/DriverAllTripsCard";

export default function AllTrips() {
  const data = [1, 2, 3, 4, 5, 6];

  const renderItem = ({ item }) => <DriverAllTripsCard />;

  return (
    <View style={styles.container}>
      <Background />
      <Logo />
      <Image
        source={require("../../assets/Delivery_Time.png")}
        style={styles.image}
      />
      <Text style={styles.title}>All Trips:</Text>
      <View style={styles.test}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}
          contentContainerStyle={styles.listContainer}
          style={styles.list}
          height={400}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F1F1",
  },
  test: {
    top: 60,
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
    flexDirection: "column",
    gap: 10,
  },
  list: {
    flexGrow: 0, // Set the flex property to adjust height
  },
});
