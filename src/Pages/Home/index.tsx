import React, { useEffect } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import DPage from '../../Components/DPage'
import DButton from '../../Components/DButton'
import { usePushNotification } from '../../Components/PushNotification/PushNotificationContext'
import { useAuth0 } from 'react-native-auth0'

export default ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) => {
  const { pushNotification, show, setShow } = usePushNotification()

  const { authorize, clearSession } = useAuth0()

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
        <DButton
          style={{ marginTop: 16 }}
          onClick={async () => {
            try {
              await authorize()
            } catch (e) {
              console.log(e)
            }
          }}
        >
          Login
        </DButton>
        <DButton
          style={{ marginTop: 16 }}
          onClick={async () => {
            try {
              await clearSession()
            } catch (e) {
              console.log(e)
            }
          }}
        >
          Logout
        </DButton>
      </DPage>
    </>
  )
}
