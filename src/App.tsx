import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landing from './Screens/Landing'
import Application from './Screens/Application'
import { PushNotificationProvider } from './Components/PushNotification/PushNotificationContext'
import PushNotificationContainer from './Components/PushNotification/PushNotificationContainer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Auth0Provider } from 'react-native-auth0'
import Config from 'react-native-config'
import LoanList from './Screens/LoanList'
import LoanDetails from './Screens/LoanDetails'

const Stack = createNativeStackNavigator<RootStackParamList>()

export type RootStackParamList = {
  Landing: undefined
  Application: undefined
  LoanList: undefined
  LoanDetails: { index: number }
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
                  <Stack.Navigator initialRouteName="Landing">
                    <Stack.Screen name="Landing" component={Landing} />
                    <Stack.Screen name="Application" component={Application} />
                    <Stack.Screen name="LoanList" component={LoanList} />
                    <Stack.Screen name="LoanDetails" component={LoanDetails} />
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
