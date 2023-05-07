import { createStackNavigator } from "@react-navigation/stack";
import BussSchedule from "../Screens/Passenger/BussSchedule";
import map from "../Screens/Passenger/map";
import PassengerMain from "../Screens/Passenger/PassengerMain";
import { Ionicons } from "@expo/vector-icons";
import PassengerTabStack from "./PassengerTabStack";

const Stack = createStackNavigator();

const PassengerOnboardingStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Passenger" component={PassengerTabStack} />
      <Stack.Screen name="BussSchedule" component={BussSchedule} />
      <Stack.Screen name="map" component={map} />
    </Stack.Navigator>
  );
};

export default PassengerOnboardingStack;
