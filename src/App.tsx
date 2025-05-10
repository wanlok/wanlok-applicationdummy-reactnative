import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Pages/Home'
import Application from './Pages/Application'
import messaging from '@react-native-firebase/messaging'
import { useEffect } from 'react'

const Stack = createNativeStackNavigator<RootStackParamList>()

export type RootStackParamList = {
  Home: undefined
  Application: undefined
}

const App = () => {
  useEffect(() => {
    // Request permission on iOS
    messaging().requestPermission()
    // Listen for foreground messages
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived: ' + JSON.stringify(remoteMessage))
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from background/killed:', remoteMessage)
          // You can navigate or handle the message here
        }
      })
  }, [])

  useEffect(() => {
    messaging()
      .getToken()
      .then(token => {
        console.log('FCM Token:', token)
      })
  }, [])

  // useEffect(() => {
  //   messaging()
  //     .requestPermission()
  //     .then(authStatus => {
  //       if (
  //         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //         authStatus === messaging.AuthorizationStatus.PROVISIONAL
  //       ) {
  //         console.log('Notification permission granted.')
  //       } else {
  //         console.log('Notification permission denied.')
  //       }
  //     })
  // }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Application" component={Application} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
