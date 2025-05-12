import { FirebaseMessagingTypes } from '@react-native-firebase/messaging'
import React, { createContext, useState, useContext, ReactNode } from 'react'

export const PushNotificationContext = createContext<{
  pushNotification: FirebaseMessagingTypes.RemoteMessage | null
  setPushNotification: React.Dispatch<
    React.SetStateAction<FirebaseMessagingTypes.RemoteMessage | null>
  >
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}>({
  pushNotification: null,
  setPushNotification: () => {},
  show: false,
  setShow: () => {},
})

export const PushNotificationProvider = ({ children }: { children: ReactNode }) => {
  const [pushNotification, setPushNotification] =
    useState<FirebaseMessagingTypes.RemoteMessage | null>(null)
  const [show, setShow] = useState<boolean>(false)
  return (
    <PushNotificationContext.Provider
      value={{ pushNotification, setPushNotification, show, setShow }}
    >
      {children}
    </PushNotificationContext.Provider>
  )
}

export const usePushNotification = () => useContext(PushNotificationContext)
