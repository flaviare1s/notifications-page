import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Notifications } from "./components/Notifications";
import avatarMarkWebber from "../src/assets/images/avatar-mark-webber.webp";
import avatarAngelaGray from "../src/assets/images/avatar-angela-gray.webp";
import avatarJacobThompson from "../src/assets/images/avatar-jacob-thompson.webp";
import avatarRizkyHasanuddin from "../src/assets/images/avatar-rizky-hasanuddin.webp";
import avatarKimberlySmith from "../src/assets/images/avatar-kimberly-smith.webp";
import avatarNathanPeterson from "../src/assets/images/avatar-nathan-peterson.webp";
import avatarAnnaKim from "../src/assets/images/avatar-anna-kim.webp";

export function App() {
  const [count, setCount] = useState(0)
  const [notifications, setNotifications] = useState([
    {
      name: "Mark Webber",
      photo: avatarMarkWebber,
      action: "reacted to your recent post",
      title: "My first tournament today!",
      postTime: "1m ago",
      read: false,
    },
    {
      name: "Angela Gray",
      photo: avatarAngelaGray,
      action: "followed you",
      postTime: "5m ago",
      read: false,
    },
    {
      name: "Jacob Thompson",
      photo: avatarJacobThompson,
      action: "has joined your group",
      title: "Chess Club",
      postTime: "1 day ago",
      read: false,
    },
    {
      name: "Rizky Hasanuddin",
      photo: avatarRizkyHasanuddin,
      action: "sent you a private message",
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      postTime: "5 days ago",
      read: true,
    },
    {
      name: "Kimberly Smith",
      photo: avatarKimberlySmith,
      action: "commented on your picture",
      postTime: "1 week ago",
      read: true,
    },
    {
      name: "Nathan Peterson",
      photo: avatarNathanPeterson,
      action: "reacted to your recent post",
      title: "5 end-game strategies to increase your win rate",
      postTime: "2 weeks ago",
      read: true,
    },
    {
      name: "Anna Kim",
      photo: avatarAnnaKim,
      action: "left the group",
      title: "Chess Club",
      postTime: "2 weeks ago",
      read: true,
    },
  ])

  const markAllAsRead = () => {
    setNotifications(prevNotifications => prevNotifications.map(notification => ({
      ...notification,
      read: true,
    })))
    setCount(0)
  }

  return (
    <div className="font-Jakarta flex flex-col justify-center items-center m-auto w-full bg-very_light_grayish_blue">
      <div className="flex flex-col justify-center items-center m-auto w-full px-4 pt-6 pb-7 bg-white md:w-[80%] lg:w-[60%]">
        <Header count={count} markAllAsRead={markAllAsRead}/>
        <Notifications notifications={notifications} setCount={setCount} />
        <Footer />
      </div>
    </div>
  )
}
