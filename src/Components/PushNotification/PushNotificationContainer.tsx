import { ReactNode, useEffect, useRef } from 'react'
import messaging from '@react-native-firebase/messaging'
import { usePushNotification } from './PushNotificationContext'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import { Text, View } from 'react-native'
import PaymentReceived from '../../Pages/PaymentReceived'

const PushNotificationContainer = ({ children }: { children: ReactNode }) => {
  const { pushNotification, setPushNotification, show, setShow } = usePushNotification()

  useEffect(() => {
    messaging().requestPermission()
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage)
      setPushNotification(remoteMessage)
      setShow(true)
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          setPushNotification(remoteMessage)
          setShow(true)
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

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  useEffect(() => {
    if (show) {
      bottomSheetModalRef.current?.present()
    } else {
      bottomSheetModalRef.current?.dismiss()
    }
  }, [show])

  // const mockData = {
  //   senderName: 'Peter Chan',
  //   accountName: 'Robert Wan',
  //   bsb: '123-456',
  //   accountNumber: '11111111',
  //   amount: '$100.00',
  //   balance: '$360,000.00',
  // }

  return (
    <>
      {children}
      {pushNotification && pushNotification.data && (
        // {true && (
        <BottomSheetModal
          ref={bottomSheetModalRef}
          onChange={index => {
            if (index === -1) {
              setShow(false)
            }
          }}
        >
          <BottomSheetView>
            <PaymentReceived data={pushNotification.data} />
          </BottomSheetView>
        </BottomSheetModal>
      )}
    </>
  )
}

export default PushNotificationContainer
