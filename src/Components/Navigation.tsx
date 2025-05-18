import React from 'react'
import { Pressable } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuthentication } from '../Hooks/AuthenticationContext'
import Icon from '@react-native-vector-icons/ionicons'
import Login from '../Screens/Login'
import Logout from '../Screens/Logout'
import LoanList from '../Screens/LoanList'
import LoanDetails from '../Screens/LoanDetails'
import Application from '../Screens/Application'
import PaymentReceived from '../Screens/PaymentReceived'
import RepayLoan from '../Screens/RepayLoan'

export type RootStackParamList = {
  Login: undefined
  Logout: undefined
  LoanList: undefined
  LoanDetails: { index: number }
  ApplicationScreen: undefined
  PushNotification: undefined
  RepayLoan: { index: number }
}

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator<RootStackParamList>()

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
      <Stack.Screen name="RepayLoan" component={RepayLoan} />
      <Stack.Screen name="PushNotification" component={PaymentReceived} />
    </Stack.Navigator>
  )
}

const ApplicationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ApplicationScreen"
        component={Application}
        options={showMenu('Application')}
      />
      <Stack.Screen name="PushNotification" component={PaymentReceived} />
    </Stack.Navigator>
  )
}

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="PushNotification" component={PaymentReceived} />
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
          <Drawer.Screen name="Login" component={LoginStack} />
        </>
      )}
    </Drawer.Navigator>
  )
}

export default Navigation
