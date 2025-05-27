import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { AuthenticationProvider } from './Hooks/AuthenticationContext'
import { PushNotificationProvider } from './Hooks/PushNotificationContext'
import Navigation from './Components/Navigation'
import { Auth0Provider } from 'react-native-auth0'
import Config from 'react-native-config'
import { PermissionsAndroid, Platform } from 'react-native'

const App = () => {
  const requestPermission = async () => {
    const title = 'Push Notification Permission'
    const message = 'Allow push notifications to receive important updates about your account.'
    const buttonPositive = 'OK'
    const { OS, Version } = Platform
    let status = null
    if (OS === 'android' && Version >= 33) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        { title, message, buttonPositive },
      )
      status = granted === PermissionsAndroid.RESULTS.GRANTED
    }
    console.log(title, OS, Version, status)
  }

  useEffect(() => {
    requestPermission()
  }, [])

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
