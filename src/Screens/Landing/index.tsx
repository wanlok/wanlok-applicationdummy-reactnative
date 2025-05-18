import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import DButton from '../../Components/DButton'
import { usePushNotification } from '../../Components/PushNotification/PushNotificationContext'
import { FlatList, RefreshControl } from 'react-native'
import useLogin from '../../useLogin'
import Screen from '../../Components/Screen'

const Home = ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) => {
  const { authenticated, authenticate, login, logout } = useLogin()
  const { pushNotification, show, setShow } = usePushNotification()
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    console.log(pushNotification)
  }, [pushNotification])

  const menu = [
    {
      title: 'Login',
      onClick: login,
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
      onClick: logout,
    },
  ]

  const onRefresh = async () => {
    setRefreshing(true)
    await authenticate()
    setRefreshing(false)
  }

  return (
    <Screen>
      <FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        data={authenticated ? userMenu : menu}
        renderItem={({ item, index }) => {
          return (
            <DButton style={{ marginTop: index > 0 ? 2 : 0 }} onClick={item.onClick}>
              {item.title}
            </DButton>
          )
        }}
      />
    </Screen>
  )
}

export default Home
