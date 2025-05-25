import { useEffect, useRef } from 'react'
import { Text, View } from 'react-native'
import { usePushNotification } from '../Hooks/PushNotificationContext'
import TwoColumnList from './TwoColumnList'
import { Color, Size } from '../Styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import { useAuthentication } from '../Hooks/AuthenticationContext'

const PushNotificationButtonSheet = () => {
  const { bottom } = useSafeAreaInsets()
  const { authenticated } = useAuthentication()
  const { pushNotification, setPushNotificationRedirected } = usePushNotification()
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  useEffect(() => {
    if (authenticated === false) {
      bottomSheetModalRef.current?.present()
      setPushNotificationRedirected(true)
    }
  }, [pushNotification, authenticated])

  const ignoreKeys = ['redirectRoutes']

  const data = Object.entries(pushNotification.data)
    .filter(([key]) => !ignoreKeys.includes(key))
    .map(([key, value]) => ({ label: key, value: String(value) }))

  return data.length > 0 ? (
    <BottomSheetModal ref={bottomSheetModalRef}>
      <BottomSheetView>
        <View style={{ marginBottom: bottom }}>
          <Text style={[Color.text, Size.small, { fontWeight: 'bold', padding: 16 }]}>
            Received Push Notification
          </Text>
          <TwoColumnList keyPrefix={'pushNotification'} data={data} />
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  ) : (
    <></>
  )
}

export default PushNotificationButtonSheet
