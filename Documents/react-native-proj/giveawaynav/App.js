import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login, signup, welcome, Splash, Pronouns } from './screens/authscreens';
import { Navigation } from './screens/authscreens';

//import { ClerkProvider } from "@clerk/clerk-react";
//import { ClerkProvider } from "@clerk/clerk-expo";

//if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
//  throw new Error("Missing Publishable Key")
//}
//const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
      >
        <Stack.Screen 
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="Pronouns"
          component={Pronouns}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="welcome"
          component={welcome}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="signup"
          component={signup}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="Navigation"
          component={Navigation}
          options={{
            headerShown: false,
          }}
        />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
