import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
const Stack = createNativeStackNavigator();
const globalScreenOptions={
  headerStyle:{backgroundColor:"#0066ff"},
  headerTitleStyle:{color:"white"},
  headerTintColor:"white",
  headerTitleAlign:"center"
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign Up" component={Signup}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
