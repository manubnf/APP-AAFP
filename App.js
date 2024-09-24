import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from './screens/SignIn';
import Dashboard from './screens/Dashboard';
import Register from './screens/Register';
import Search from './screens/Search';

const Stack = createNativeStackNavigator();

export default function Router(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn}
        options={{ headerShown: false }}/>
        <Stack.Screen name="Dashboard" component={Dashboard}
        options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register}
        options={{ headerShown: false }}/>
        <Stack.Screen name="Search" component={Search}
        options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}