import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import DButton from '../../Components/DButton'
import { usePushNotification } from '../../Components/PushNotification/PushNotificationContext'
import { useAuth0 } from 'react-native-auth0'
import { FlatList, RefreshControl } from 'react-native'

export default ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) => {
  const { pushNotification, show, setShow } = usePushNotification()

  const { authorize, clearSession, user } = useAuth0()

  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    console.log(pushNotification)
  }, [pushNotification])

  const menu = [
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
  ]

  const userMenu = [
    {
      title: 'Application',
      onClick: () => navigation.navigate('Application'),
    },
    {
      title: 'Loan List',
      onClick: () => navigation.navigate('LoanList'),
    },
    {
      title: 'Test Bottom Sheet',
      onClick: () => {
        setShow(!show)
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
  ]

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true)
            setTimeout(() => {
              setRefreshing(false)
            }, 3000)
          }}
        />
      }
      data={user ? userMenu : menu}
      renderItem={({ item, index }) => {
        return (
          <DButton style={{ marginTop: index > 0 ? 1 : 0 }} onClick={item.onClick}>
            {item.title}
          </DButton>
        )
      }}
    />
  )
}
