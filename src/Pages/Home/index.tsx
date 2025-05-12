import React, { useEffect } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import DPage from '../../Components/DPage'
import DButton from '../../Components/DButton'
import { usePushNotification } from '../../Components/PushNotification/PushNotificationContext'

export default ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) => {
  const { pushNotification, show, setShow } = usePushNotification()

  useEffect(() => {
    console.log(pushNotification)
  }, [pushNotification])

  return (
    <>
      <DPage>
        <DButton onClick={() => navigation.navigate('Application')}>Application</DButton>
        <DButton
          style={{ marginTop: 16 }}
          onClick={() => {
            setShow(!show)
          }}
        >
          Test Bottom Sheet
        </DButton>
        <DButton
          style={{ marginTop: 16 }}
          onClick={() => {
            navigation.navigate('LoanList')
          }}
        >
          Loan List
        </DButton>
      </DPage>
    </>
  )
}
