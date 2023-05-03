import { createStackNavigator } from "@react-navigation/stack";
import BussSchedule from "../Screens/Passenger/BussSchedule";
import PassengerMain from "../Screens/Passenger/PassengerMain";
import { Ionicons } from "@expo/vector-icons";
import PassengerTabStack from "./PassengerTabStack";

const Stack = createStackNavigator();

const PassengerOnboardingStack = ({ navigation }) => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: true,
    //   headerLeft: () => (
    //     <Ionicons
    //       name="arrow-back"
    //       size={32}
    //       color="black"
    //       onPress={() => navigation.goBack()}
    //     />
    //   ),
    // }}
    >
      <Stack.Screen name="Passenger" component={PassengerTabStack} />
      <Stack.Screen name="BussSchedule" component={BussSchedule} />
      {/* <Stack.Screen name="PassengerOnboardingStack" component={PassengerMain} /> */}
    </Stack.Navigator>
  );
};

export default PassengerOnboardingStack;
