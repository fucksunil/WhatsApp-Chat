import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatsScreen from "../screens/ChatsScreen";
import ChatScreen from "../screens/ChatScreen";
import MainTabNavigator from "./MainTabNavigator";
import ContactsScreen from "../screens/ContactsScreen";

const Stack = createNativeStackNavigator();

// console.log(Stack.Screen)

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: 'whitesmoke'}}}>
        <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="Chat" component={ChatScreen}/>
        <Stack.Screen name="Contacts" component={ContactsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator