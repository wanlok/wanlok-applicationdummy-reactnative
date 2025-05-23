import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { AuthenticationProvider } from './Hooks/AuthenticationContext'
import { PushNotificationProvider } from './Hooks/PushNotificationContext'
import Navigation from './Components/Navigation'
import { Auth0Provider } from 'react-native-auth0'
import Config from 'react-native-config'

const App = () => {
  return (
    <Auth0Provider domain={Config.AUTH0_DOMAIN ?? ''} clientId={Config.AUTH0_CLIENT_ID ?? ''}>
      <AuthenticationProvider>
        <SafeAreaProvider>
          <GestureHandlerRootView>
            <BottomSheetModalProvider>
              <PushNotificationProvider>
                <NavigationContainer>
                  <Navigation />
                </NavigationContainer>
              </PushNotificationProvider>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </AuthenticationProvider>
    </Auth0Provider>
  )
}

export default App
