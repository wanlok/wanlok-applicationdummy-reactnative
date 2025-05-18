import react, { ReactNode, useEffect, useRef } from 'react'
import messaging from '@react-native-firebase/messaging'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import { Text, View } from 'react-native'
import PaymentReceived from '../Screens/PaymentReceived'
import { usePushNotification } from '../Hooks/PushNotificationContext'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from './Navigation'

const PushNotificationContainer = ({ children }: { children: ReactNode }) => {
  const { pushNotification, setPushNotification } = usePushNotification()

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

  // const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  // useEffect(() => {
  // if (show) {
  //   bottomSheetModalRef.current?.present()
  // } else {
  //   bottomSheetModalRef.current?.dismiss()
  // }
  // }, [show])

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
      {/* {pushNotification && pushNotification.data && (
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
      )} */}
    </>
  )
}

export default PushNotificationContainer
