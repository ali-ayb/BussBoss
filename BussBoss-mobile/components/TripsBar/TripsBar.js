import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import UseHttp from "../../hooks/request";

function TripsBar() {
  const [total_paid, setTotalPaid] = useState("");
  const [total_trips, setTotalTrips] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await UseHttp("get_Passenger_total_paid", "GET", "", {
        Authorization:
          "Bearer " +
          `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC4xLjQ6ODAwMC9hcGkvbG9naW4iLCJpYXQiOjE2ODMxNTEyMjIsImV4cCI6MTY4MzE1NDgyMiwibmJmIjoxNjgzMTUxMjIyLCJqdGkiOiJCSU9uaWtqODkzSnVsWDk0Iiwic3ViIjoiNCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.0YURYcYxZtJMsxK_CeNrOq0Rm8TWit74mQALbAucisM`,
      });
      setTotalPaid(result.total_paid);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await UseHttp("get_passenger_total_trips", "GET", "", {
        Authorization:
          "Bearer " +
          `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC4xLjQ6ODAwMC9hcGkvbG9naW4iLCJpYXQiOjE2ODMxNTEyMjIsImV4cCI6MTY4MzE1NDgyMiwibmJmIjoxNjgzMTUxMjIyLCJqdGkiOiJCSU9uaWtqODkzSnVsWDk0Iiwic3ViIjoiNCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.0YURYcYxZtJMsxK_CeNrOq0Rm8TWit74mQALbAucisM`,
      });
      setTotalTrips(result.total_trips);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.trips_bar}>
      <Text style={styles.trips_title}>TOTAL TRIPS</Text>
      <Text style={styles.trips_count}>{total_trips}</Text>
      <Text style={styles.paid_title}>TOTAL PAID</Text>
      <Text style={styles.paid_number}>{total_paid}$</Text>
    </View>
  );
}
export default TripsBar;

const styles = StyleSheet.create({
  trips_bar: {
    backgroundColor: "#19A7CE",
    top: 240,
    left: 35,
    height: 120,
    width: 335,
    position: "absolute",
    zIndex: 2,
    borderRadius: 15,
  },
  trips_title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.5)",
    top: 20,
    left: 30,
  },
  trips_count: {
    fontSize: 42,
    fontWeight: "bold",
    color: "white",
    top: 20,
    left: 65,
  },
  paid_title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    color: "rgba(255, 255, 255, 0.5)",
    top: -50,
    left: 215,
  },
  paid_number: {
    fontSize: 42,
    fontWeight: "bold",
    color: "white",
    top: -50,
    left: 240,
  },
});
