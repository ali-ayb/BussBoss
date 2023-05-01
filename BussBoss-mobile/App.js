import { StyleSheet, View } from "react-native";
import PassengerMain from "./Screens/PassengerMain/PassengerMain";
import TabStack from "./navigation/TabStack";
import OnboardingStack from "./navigation/OnboardingStack";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <TabStack />
      {/* <OnboardingStack /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
