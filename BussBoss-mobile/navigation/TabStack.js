import PassengerMain from "../Screens/PassengerMain/PassengerMain";
import PassengerCurrentTrips from "../Screens/PassengerCurrentTrips/PassengerCurrentTrips";
import PassengerAllTrips from "../Screens/PassengerAllTrips/PassengerAllTrips";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Screen2Stack from "./Screen2Stack";

const TabStack = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          options={{
            tabBarIcon: () => (
              <Text>S1</Text>
              //   <Ionicons name={"home"} size />
            ),
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
    </NavigationContainer>
  );
};

export default TabStack;
