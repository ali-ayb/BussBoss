import { createStackNavigator } from "@react-navigation/stack";
import BussSchedule from "../Screens/BussSchedule/BussSchedule";
import PassengerMain from "../Screens/PassengerMain/PassengerMain";

const Stack = createStackNavigator();

const OnboardingStack = () => {
  // const PassengerStack = createStackNavigator();
  // const DriverStack = createStackNavigator();
  // const BussSchedule = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="PassengerMain" component={PassengerMain} />

      <Stack.Screen
        name="BussSchedule"
        component={BussSchedule}
        header={false}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
