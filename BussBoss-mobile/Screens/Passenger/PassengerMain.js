import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Background from "../../components/Background/Background";
import Logo from "../../components/Logo/Logo";
import Greeting from "../../components/Greeting/Greeting";
import Search from "../../components/Search/Search";
import TripsBar from "../../components/TripsBar/TripsBar";
import DriverCard from "../../components/DriverCard/DriverCard";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import UseHttp from "../../hooks/request";

export default function PassengerMain() {
  const [destination, setDestination] = useState("");
  const [drivers, setDrivers] = useState([]);
  const formData = new FormData();

  useEffect(() => {
    const fetchData = async () => {
      formData.append("destination", destination);
      const result = await UseHttp(
        "get_drivers_from_destination",
        "POST",
        formData,
        {
          Authorization:
            "Bearer " +
            `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC4xLjQ6ODAwMC9hcGkvbG9naW4iLCJpYXQiOjE2ODMxNTYzODUsImV4cCI6MTY4MzE1OTk4NSwibmJmIjoxNjgzMTU2Mzg1LCJqdGkiOiJzdEFBdEJoSFh2NUdmOFhxIiwic3ViIjoiNCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ReaUc-69FJ8vxSWmdUWiz9QWgXUlmfOWLeOegT4j_mE`,
        }
      );
      setDrivers(result);
    };
    fetchData();
  }, [destination]);
  console.log(drivers);

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("BussSchedule");
  };

  const renderItem = ({ item }) => {
    return (
      <DriverCard
        id={item.id}
        first_name={item.first_name}
        last_name={item.last_name}
      />
    );
    // <TouchableOpacity onPress={handlePress}>
    //   <DriverCard driver={item} />
    // </TouchableOpacity>
  };

  return (
    <View style={{ backgroundColor: "#F6F1F1", flex: 1 }}>
      <Background />
      <Logo />
      <Greeting />
      <Text style={styles.search_title}>Where are you heading?</Text>
      <Search userInput={destination} setUserInput={setDestination} />
      <TripsBar />
      <Text style={styles.choose_driver}>Choose your driver</Text>
      <View style={{ flexDirection: "column", gap: 10 }}>
        <FlatList
          data={drivers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F6F1F1",
  },
  search_title: {
    left: 35,
    top: 130,
    position: "absolute",
    zIndex: 2,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  choose_driver: {
    left: 40,
    top: 380,
    position: "absolute",
    zIndex: 2,
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
});
