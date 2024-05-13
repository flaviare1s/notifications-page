import { useEffect } from 'react';
import { Notification } from "./Notification";

export const Notifications = ({ notifications, setCount }) => {
  useEffect(() => {
    const unreadCount = notifications.filter(
      (notification) => !notification.read
    ).length;
    setCount(unreadCount);
  }, [notifications, setCount])

  return (
    <div>
      {notifications.map((notification) => (
        <Notification key={notification.name} {...notification} />
      ))}
    </div>
  )
}
