import { StyleSheet, View } from "react-native";
import TabStack from "./navigation/PassengerTabStack";
import DriverMain from "./Screens/Driver/DriverMain";
import AllTrips from "./Screens/Driver/AllTrips";
import RegisterPassenger from "./Screens/Auth/RegisterPassenger";
import Login from "./Screens/Auth/Login";
import OnboardingStack from "./navigation/PassengerOnboardingStack";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      {/* <TabStack /> */}
      <DriverMain />
      {/* <OnboardingStack /> */}
      {/* <Login /> */}
      {/* <RegisterPassenger /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
