import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DriverTabStack from "./DriverTabStack";
import PassengerTabStack from "./PassengerTabStack";
import PassengerOnboardingStack from "./PassengerOnboardingStack";

const UserTypeSwitcher = () => {
  const isLoggedIn = true;
  const stack = createStackNavigator();
  const user = { type: "passenger" };
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen
        name="User Screeen"
        component={
          user.type == "passenger" ? PassengerOnboardingStack : DriverTabStack
        }
      />
    </stack.Navigator>
  );
};

export default UserTypeSwitcher;
