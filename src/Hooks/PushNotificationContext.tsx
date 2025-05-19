import React, { createContext, useState, useContext, ReactNode, Dispatch } from 'react'

export interface PushNotification {
  redirectRoutes: { s: string; p?: { index: number } }[]
  data: { [key: string]: string | object }
}

export const emptyPushNotification = { redirectRoutes: [], data: {} }

const PushNotificationContext = createContext<{
  pushNotification: PushNotification
  setPushNotification: Dispatch<React.SetStateAction<PushNotification>>
  pushNotificationViewed: boolean
  setPushNotificationViewed: Dispatch<React.SetStateAction<boolean>>
}>({
  pushNotification: emptyPushNotification,
  setPushNotification: () => {},
  pushNotificationViewed: false,
  setPushNotificationViewed: () => {},
})

export const PushNotificationProvider = ({ children }: { children: ReactNode }) => {
  const [pushNotification, setPushNotification] = useState<PushNotification>(emptyPushNotification)
  const [pushNotificationViewed, setPushNotificationViewed] = useState(false)
  return (
    <PushNotificationContext.Provider
      value={{
        pushNotification,
        setPushNotification,
        pushNotificationViewed,
        setPushNotificationViewed,
      }}
    >
      {children}
    </PushNotificationContext.Provider>
  )
}

export const usePushNotification = () => useContext(PushNotificationContext)
