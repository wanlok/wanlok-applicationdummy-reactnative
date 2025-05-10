import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Pages/Home'
import Application from './Pages/Application'
import { PushNotificationProvider } from './Components/PushNotification/PushNotificationContext'
import PushNotificationContainer from './Components/PushNotification/PushNotificationContainer'

const Stack = createNativeStackNavigator<RootStackParamList>()

export type RootStackParamList = {
  Home: undefined
  Application: undefined
}

const App = () => {
  return (
    <PushNotificationProvider>
      <PushNotificationContainer>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Application" component={Application} />
          </Stack.Navigator>
        </NavigationContainer>
      </PushNotificationContainer>
    </PushNotificationProvider>
  )
}

export default App
