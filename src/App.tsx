import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Pages/Home'
import Application from './Pages/Application'
import { PushNotificationProvider } from './Components/PushNotification/PushNotificationContext'
import PushNotificationContainer from './Components/PushNotification/PushNotificationContainer'
import LoanList from './Components/LoanList'

const Stack = createNativeStackNavigator<RootStackParamList>()

export type RootStackParamList = {
  Home: undefined
  Application: undefined
  LoanList: undefined
}

const App = () => {
  return (
    <PushNotificationProvider>
      <PushNotificationContainer>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Application" component={Application} />
            <Stack.Screen name="LoanList" component={LoanList} />
          </Stack.Navigator>
        </NavigationContainer>
      </PushNotificationContainer>
    </PushNotificationProvider>
  )
}

export default App
