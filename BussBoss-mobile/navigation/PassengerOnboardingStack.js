import { createStackNavigator } from "@react-navigation/stack";
import BussSchedule from "../Screens/Passenger/BussSchedule";
import PassengerMain from "../Screens/Passenger/PassengerMain";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const OnboardingStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={32}
            color="black"
            onPress={() => navigation.goBack()}
          />
        ),
      }}>
      <Stack.Screen
        name="BussSchedule"
        component={BussSchedule}
        options={{ tabBarVisible: false }}
      />
      <Stack.Screen name="PassengerMain" component={PassengerMain} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
