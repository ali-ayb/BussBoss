import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DriverTabStack from "./DriverTabStack";
import PassengerTabStack from "./PassengerTabStack";
import PassengerOnboardingStack from "./PassengerOnboardingStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import DriverOnboardingStack from "./DriverOnboardingStack";

const UserTypeSwitcher = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const retrieveUserType = async () => {
      try {
        const value = await AsyncStorage.getItem("user_type");
        if (value !== null) {
          setUserType(value);
        }
      } catch (error) {
        console.log(error);
      }
    };
    retrieveUserType();
  }, []);

  const stack = createStackNavigator();
  const user = { type: userType };

  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen
        name="User Screen"
        component={
          user.type === "passenger"
            ? PassengerOnboardingStack
            : DriverOnboardingStack
        }
      />
    </stack.Navigator>
  );
};

export default UserTypeSwitcher;
