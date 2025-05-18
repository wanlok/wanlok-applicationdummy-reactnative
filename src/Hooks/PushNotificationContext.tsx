import React, { createContext, useState, useContext, ReactNode } from 'react'

interface PushNotification {
  redirectRoutes: { s: string; p?: string }[]
  data: { [key: string]: string | object }
}

const empty = { redirectRoutes: [], data: {} }

const PushNotificationContext = createContext<{
  pushNotification: PushNotification
  setPushNotification: React.Dispatch<React.SetStateAction<PushNotification>>
}>({
  pushNotification: empty,
  setPushNotification: () => {},
})

export const PushNotificationProvider = ({ children }: { children: ReactNode }) => {
  const [pushNotification, setPushNotification] = useState<PushNotification>(empty)
  return (
    <PushNotificationContext.Provider value={{ pushNotification, setPushNotification }}>
      {children}
    </PushNotificationContext.Provider>
  )
}

export const usePushNotification = () => useContext(PushNotificationContext)
