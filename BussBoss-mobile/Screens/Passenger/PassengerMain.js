import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
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
            `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC4xLjQ6ODAwMC9hcGkvbG9naW4iLCJpYXQiOjE2ODMxNDM3NzIsImV4cCI6MTY4MzE0NzM3MiwibmJmIjoxNjgzMTQzNzcyLCJqdGkiOiIzRkw2TG9mNlU1Z0p5aVZOIiwic3ViIjoiNCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.rhAN3q4ST2fFrZtfT4Qa0ylaqigMaAgVGwPdb2YV3SU`,
        }
      );
      console.log(result);
    };
    fetchData();
  }, [destination]);

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("BussSchedule");
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
        <TouchableOpacity onPress={handlePress}>
          <DriverCard />
        </TouchableOpacity>

        <DriverCard />
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
