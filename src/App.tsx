import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screens/Home'
import Application from './Screens/Application'
import { PushNotificationProvider } from './Components/PushNotification/PushNotificationContext'
import PushNotificationContainer from './Components/PushNotification/PushNotificationContainer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Auth0Provider } from 'react-native-auth0'
import Config from 'react-native-config'
import LoanList from './Screens/LoanList'

const Stack = createNativeStackNavigator<RootStackParamList>()

export type RootStackParamList = {
  Home: undefined
  Application: undefined
  LoanList: undefined
}

const App = () => {
  return (
    <Auth0Provider domain={Config.AUTH0_DOMAIN ?? ''} clientId={Config.AUTH0_CLIENT_ID ?? ''}>
      <SafeAreaProvider>
        <GestureHandlerRootView>
          <BottomSheetModalProvider>
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
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Auth0Provider>
  )
}

export default App
