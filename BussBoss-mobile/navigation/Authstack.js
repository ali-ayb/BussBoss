import { createStackNavigator } from "@react-navigation/stack";
import BussSchedule from "../Screens/Passenger/BussSchedule";
import PassengerMain from "../Screens/Passenger/PassengerMain";
import { Ionicons } from "@expo/vector-icons";
import PassengerTabStack from "./PassengerTabStack";
import Login from "../Screens/Auth/Login";
import PreRegister from "../Screens/Auth/PreRegister";
import RegisterDriver from "../Screens/Auth/RegisterDriver";
import RegisterPassenger from "../Screens/Auth/RegisterPassenger";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login Screen" component={Login} />
      <Stack.Screen name="Preregister Screen" component={PreRegister} />
      <Stack.Screen
        name="RegisterDriver Screen"
        component={RegisterDriver}
        options={{
          headerShown: true,
          title: "Register Driver",
          headerStyle: { backgroundColor: "#146C94" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="RegisterPassenger Screen"
        component={RegisterPassenger}
        options={{
          headerShown: true,
          title: "Register Passneger",
          headerStyle: { backgroundColor: "#146C94" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
