import { Text, View } from 'react-native'
import Screen from '../../Components/Screen'
import { usePushNotification } from '../../Hooks/PushNotificationContext'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../Components/Navigation'

export default ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) => {
  const { pushNotification } = usePushNotification()

  const senderName = pushNotification.data.senderName as string
  const accountName = pushNotification.data.accountName as string
  const bsb = pushNotification.data.bsb as string
  const accountNumber = pushNotification.data.accountNumber as string
  const amount = pushNotification.data.amount as string
  const balance = pushNotification.data.balance as string

  return (
    <Screen navigation={navigation}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 32, color: 'black' }}>Payment Received</Text>
        <Text style={{ marginTop: 24, lineHeight: 24, fontSize: 16, color: 'black' }}>
          You have been paid {amount} by {senderName}. The payment will be sent to the following
          account:
        </Text>
        <Text style={{ marginTop: 24, fontSize: 16, color: 'black' }}>
          Account Name: {accountName}
        </Text>
        <Text style={{ marginTop: 4, fontSize: 16, color: 'black' }}>BSB: {bsb}</Text>
        <Text style={{ marginTop: 4, fontSize: 16, color: 'black' }}>
          Account Number: {accountNumber}
        </Text>
        <Text style={{ marginTop: 4, fontSize: 16, color: 'black' }}>Balance: {balance}</Text>
      </View>
    </Screen>
  )
}
