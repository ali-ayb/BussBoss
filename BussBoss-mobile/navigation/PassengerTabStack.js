import PassengerMain from "../Screens/Passenger/PassengerMain";
import PassengerCurrentTrips from "../Screens/Passenger/PassengerCurrentTrips";
import PassengerAllTrips from "../Screens/Passenger/PassengerAllTrips";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import OnboardingStack from "./PassengerOnboardingStack";

const PassengerTabStack = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
        name="PassengerMain"
        component={PassengerMain}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="map-marked-alt" size={24} color="black" />
          ),
        }}
        name="PassengerCurrentTrips"
        component={PassengerCurrentTrips}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="clipboard-clock-outline"
              size={24}
              color="black"
            />
          ),
        }}
        name="PassengerAllTrips"
        component={PassengerAllTrips}
      />
      <Tabs.Screen
        name="OnboardingStack"
        component={OnboardingStack}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, //hide tab bar on this screen
        }}
      />
    </Tabs.Navigator>
  );
};

export default PassengerTabStack;
