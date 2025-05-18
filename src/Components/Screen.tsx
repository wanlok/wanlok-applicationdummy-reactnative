import react, { ReactNode, useEffect } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAuthentication } from '../Hooks/AuthenticationContext'
import { useFocusEffect } from '@react-navigation/native'
import messaging from '@react-native-firebase/messaging'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from './Navigation'

export default ({
  authenticationRequired = true,
  navigation,
  children,
}: {
  authenticationRequired?: boolean
  navigation?: NativeStackNavigationProp<RootStackParamList>
  children: ReactNode
}) => {
  const { bottom } = useSafeAreaInsets()

  const { authenticate } = useAuthentication()

  useFocusEffect(() => {
    console.log('authenticationRequired', authenticationRequired)
    if (authenticationRequired) {
      authenticate()
    }
  })

  useEffect(() => {
    messaging().requestPermission()
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage)
      const { data } = remoteMessage
      if (data) {
        navigation?.navigate('PushNotification', data)
      }
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          const { data } = remoteMessage
          if (data) {
            navigation?.navigate('PushNotification', data)
          }
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

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={[{ flex: 1, marginBottom: bottom }]}>{children}</View>
    </View>
  )
}
