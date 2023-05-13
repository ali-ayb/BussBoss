import { StyleSheet, View } from "react-native";
import TabStack from "./navigation/PassengerTabStack";
import DriverMain from "./Screens/Driver/DriverMain";
import AllTrips from "./Screens/Driver/AllTrips";
import RegisterPassenger from "./Screens/Auth/RegisterPassenger";
import Login from "./Screens/Auth/Login";
import OnboardingStack from "./navigation/PassengerOnboardingStack";
import { NavigationContainer } from "@react-navigation/native";
import StackSwitcher from "./navigation/StackSwitcher";
import { Provider } from "react-redux";

import { store } from "./redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <StackSwitcher />
    </Provider>
  );
}

const styles = StyleSheet.create({});
