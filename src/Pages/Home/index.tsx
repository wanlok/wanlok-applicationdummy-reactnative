import React, { useEffect } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import DPage from '../../Components/DPage'
import DButton from '../../Components/DButton'
import { usePushNotification } from '../../Components/PushNotification/PushNotificationContext'
import { useAuth0 } from 'react-native-auth0'
import { FlatList, Text } from 'react-native'

export default ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) => {
  const { pushNotification, show, setShow } = usePushNotification()

  const { authorize, clearSession } = useAuth0()

  useEffect(() => {
    console.log(pushNotification)
  }, [pushNotification])

  const data = [
    {
      title: 'Application',
      onClick: () => navigation.navigate('Application'),
    },
    {
      title: 'Loan List',
      onClick: () => navigation.navigate('LoanList'),
    },
    {
      title: 'Login',
      onClick: async () => {
        try {
          await authorize()
        } catch (e) {
          console.log(e)
        }
      },
    },
    {
      title: 'Logout',
      onClick: async () => {
        try {
          await clearSession()
        } catch (e) {
          console.log(e)
        }
      },
    },
    {
      title: 'Test Bottom Sheet',
      onClick: () => {
        setShow(!show)
      },
    },
  ]

  return (
    <DPage>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (
            <DButton style={{ marginTop: index > 0 ? 1 : 0 }} onClick={item.onClick}>
              {item.title}
            </DButton>
          )
        }}
      />
    </DPage>
  )
}
