import PassengerMain from "../Screens/PassengerMain/PassengerMain";
import PassengerCurrentTrips from "../Screens/PassengerCurrentTrips/PassengerCurrentTrips";
import PassengerAllTrips from "../Screens/PassengerAllTrips/PassengerAllTrips";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Entypo } from "@expo/vector-icons";

const TabStack = () => {
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
          tabBarIcon: () => <Text>S2</Text>,
        }}
        name="PassengerCurrentTrips"
        component={PassengerCurrentTrips}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: () => <Text>S3</Text>,
        }}
        name="PassengerAllTrips"
        component={PassengerAllTrips}
      />
    </Tabs.Navigator>
  );
};

export default TabStack;
