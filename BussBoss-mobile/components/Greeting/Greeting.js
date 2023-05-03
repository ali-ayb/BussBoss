import { StyleSheet, View, Text } from "react-native";
import UseHttp from "../../hooks/request";
import { useState, useEffect } from "react";

export default function PassengerMain() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await UseHttp("get_passenger_full_name", "GET", "", {
        Authorization:
          "Bearer " +
          `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC4xLjQ6ODAwMC9hcGkvbG9naW4iLCJpYXQiOjE2ODMxMTU3MjIsImV4cCI6MTY4MzExOTMyMiwibmJmIjoxNjgzMTE1NzIyLCJqdGkiOiJXT0ZZMlF3cWthS0dLY0ZKIiwic3ViIjoiNCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.DZgJItU5cxvgoe--POauCetlCB3iQ04U4WSEMXJ405Q`,
      });
      // console.log(result.first_name);
      setFirstName(result.first_name);
      setLastName(result.last_name);
    };
    fetchData();
  }, []);

  return (
    <Text style={styles.name}>
      Hello,{"\n"}
      {first_name} {last_name}
    </Text>
  );
}

const styles = StyleSheet.create({
  name: {
    left: 290,
    top: 40,
    position: "absolute",
    zIndex: 2,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
