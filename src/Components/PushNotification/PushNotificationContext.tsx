import { FirebaseMessagingTypes } from '@react-native-firebase/messaging'
import React, { createContext, useState, useContext, ReactNode } from 'react'

export const PushNotificationContext = createContext<{
  pushNotification: FirebaseMessagingTypes.RemoteMessage | null
  setPushNotification: React.Dispatch<
    React.SetStateAction<FirebaseMessagingTypes.RemoteMessage | null>
  >
}>({
  pushNotification: null,
  setPushNotification: () => {},
})

export const PushNotificationProvider = ({ children }: { children: ReactNode }) => {
  const [pushNotification, setPushNotification] =
    useState<FirebaseMessagingTypes.RemoteMessage | null>(null)
  return (
    <PushNotificationContext.Provider value={{ pushNotification, setPushNotification }}>
      {children}
    </PushNotificationContext.Provider>
  )
}

export const usePushNotification = () => useContext(PushNotificationContext)
