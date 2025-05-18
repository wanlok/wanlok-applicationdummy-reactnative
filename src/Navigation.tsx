import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Pressable } from 'react-native'
import LoanList from './Screens/LoanList'
import Icon from '@react-native-vector-icons/ionicons'
import LoanDetails from './Screens/LoanDetails'
import Application from './Screens/Application'
import Landing from './Screens/Landing'
import Logout from './Screens/Logout'
import { useAuthentication } from './Components/Authentication/AuthenticationContext'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator<RootStackParamList>()

export type RootStackParamList = {
  Landing: undefined
  Application: undefined
  LoanList: undefined
  LoanDetails: { index: number }
  Logout: undefined
}

const showMenu = (title: string) => {
  return ({ navigation }: { navigation: any }) => ({
    title,
    headerLeft: () => (
      <Pressable
        android_ripple={{ color: '#ddd', borderless: true }}
        style={{ marginRight: 24, padding: 2 }}
        onPress={() => navigation.getParent()?.openDrawer()}
      >
        <Icon name="menu" size={24} color={'black'} />
      </Pressable>
    ),
  })
}

const LoanStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoanList" component={LoanList} options={showMenu('Loans')} />
      <Stack.Screen name="LoanDetails" component={LoanDetails} />
    </Stack.Navigator>
  )
}

const ApplicationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Application" component={Application} options={showMenu('Applications')} />
    </Stack.Navigator>
  )
}

const Navigation = () => {
  const { authenticated } = useAuthentication()
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      {authenticated ? (
        <>
          <Drawer.Screen name="Loans" component={LoanStack} />
          <Drawer.Screen name="Application" component={ApplicationStack} />
          <Drawer.Screen name="Logout" component={Logout} />
        </>
      ) : (
        <>
          <Drawer.Screen name="Landing" component={Landing} />
        </>
      )}
    </Drawer.Navigator>
  )
}

export default Navigation
