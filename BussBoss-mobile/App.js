import { StyleSheet, View } from "react-native";
import TabStack from "./navigation/TabStack";
import DriverMain from "./Screens/Driver/DriverMain";
import OnboardingStack from "./navigation/OnboardingStack";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      {/* <TabStack /> */}
      <DriverMain />
      {/* <OnboardingStack /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
