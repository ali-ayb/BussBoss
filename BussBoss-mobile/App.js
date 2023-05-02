import { StyleSheet, View } from "react-native";
import TabStack from "./navigation/TabStack";
import DriverTabStack from "./navigation/DriverTabStack";
import DriverMain from "./Screens/Driver/DriverMain";
import Login from "./Screens/Auth/Login";
import OnboardingStack from "./navigation/OnboardingStack";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      {/* <TabStack /> */}
      {/* <DriverTabStack /> */}
      {/* <DriverMain /> */}
      {/* <OnboardingStack /> */}
      <Login />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
