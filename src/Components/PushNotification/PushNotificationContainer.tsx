import { ReactNode, useEffect } from 'react'
import messaging from '@react-native-firebase/messaging'
import { usePushNotification } from './PushNotificationContext'

const PushNotificationContainer = ({ children }: { children: ReactNode }) => {
  const { setPushNotification } = usePushNotification()

  useEffect(() => {
    messaging().requestPermission()
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage)
      setPushNotification(remoteMessage)
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        console.log(remoteMessage)
        setPushNotification(remoteMessage)
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

  return children
}

export default PushNotificationContainer
