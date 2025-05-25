import react, { ReactNode, useEffect } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAuthentication } from '../Hooks/AuthenticationContext'
import { useFocusEffect } from '@react-navigation/native'
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from './Navigation'
import { usePushNotification } from '../Hooks/PushNotificationContext'
import PushNotificationButtonSheet from './PushNotificationBottomSheet'
import DummyModal from './DummyModal'

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
  const { authenticated, authenticate } = useAuthentication()
  const {
    pushNotification,
    setPushNotification,
    pushNotificationViewed,
    setPushNotificationViewed,
    pushNotificationRedirected,
    setPushNotificationRedirected,
  } = usePushNotification()
  const currentRoutes = navigation?.getState().routes.map(route => route.name as string) ?? []

  useFocusEffect(() => {
    console.log('authenticationRequired', authenticationRequired)
    console.log('currentRoutes', currentRoutes)
    if (authenticationRequired) {
      authenticate()
    }
  })

  useEffect(() => {
    messaging()
      .getToken()
      .then(token => {
        console.log('FCM Token:', token)
      })
  }, [])

  const updatePushNotification = (remoteMessage: FirebaseMessagingTypes.RemoteMessage | null) => {
    if (remoteMessage) {
      const { data } = remoteMessage
      if (data) {
        console.log('remoteMessage.data', data)
        const redirectRoutes = JSON.parse(data.redirectRoutes as string)
        setPushNotification({ redirectRoutes, data })
        setPushNotificationViewed(false)
        if (authenticated === true) {
          setPushNotificationRedirected(false)
        }
      }
    }
  }

  useEffect(() => {
    messaging().requestPermission()
    const unsubscribe = messaging().onMessage(updatePushNotification)
    return unsubscribe
  }, [])

  useEffect(() => {
    messaging().getInitialNotification().then(updatePushNotification)
  }, [])

  useEffect(() => {
    const routes = pushNotification.redirectRoutes.filter(route => !currentRoutes.includes(route.s))
    if (routes.length > 0 && !pushNotificationRedirected) {
      const { s, p } = routes[0]
      if (s === 'LoanDetails' && p != undefined) {
        navigation?.navigate('LoanDetails', p)
      } else if (s === 'RepayLoan' && p != undefined) {
        navigation?.navigate('RepayLoan', p)
      } else if (s === 'PushNotification') {
        navigation?.navigate('PushNotification')
      }
      if (routes.length === 1) {
        setPushNotificationRedirected(true)
      }
    }
  }, [pushNotification, pushNotificationRedirected])

  const { notificationTitle, notificationText } = pushNotification.data

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={[{ flex: 1, marginBottom: bottom }]}>{children}</View>
      {/* <DummyModal
        visible={
          !pushNotificationViewed &&
          notificationTitle !== undefined &&
          notificationText !== undefined
        }
        title={notificationTitle as string}
        text={notificationText as string}
        leftButtonText="Navigate"
        rightButtonText="Close"
      /> */}
      {/* <PushNotificationButtonSheet /> */}
    </View>
  )
}
