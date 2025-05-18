import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import DButton from '../../Components/DButton'
import { usePushNotification } from '../../Hooks/PushNotificationContext'
import { FlatList, RefreshControl, Text, View } from 'react-native'
import Screen from '../../Components/Screen'
import { RootStackParamList } from '../../Components/Navigation'
import { useAuthentication } from '../../Hooks/AuthenticationContext'

const Home = ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) => {
  const { authenticated, authenticate, login, logout } = useAuthentication()
  const { pushNotification, show, setShow } = usePushNotification()
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    console.log(pushNotification)
  }, [pushNotification])

  const onRefresh = async () => {
    setRefreshing(true)
    await authenticate()
    setRefreshing(false)
  }

  return (
    <Screen>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <DButton onClick={login}>Login</DButton>
      </View>
      {/* <FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        data={authenticated ? userMenu : menu}
        renderItem={({ item, index }) => {
          return (
            <DButton style={{ marginTop: index > 0 ? 2 : 0 }} onClick={item.onClick}>
              {item.title}
            </DButton>
          )
        }}
      /> */}
    </Screen>
  )
}

export default Home
