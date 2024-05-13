import { useEffect } from 'react';
import { Notification } from "./Notification";
import avatarMarkWebber from "../assets/images/avatar-mark-webber.webp";
import avatarAngelaGray from "../assets/images/avatar-angela-gray.webp";
import avatarJacobThompson from "../assets/images/avatar-jacob-thompson.webp";
import avatarRizkyHasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp";
import avatarKimberlySmith from "../assets/images/avatar-kimberly-smith.webp";
import avatarNathanPeterson from "../assets/images/avatar-nathan-peterson.webp";
import avatarAnnaKim from "../assets/images/avatar-anna-kim.webp";

export const Notifications = ({ setCount }) => {
  const notifications = [
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
  ];

  useEffect(() => {
    const unreadCount = notifications.filter(
      (notification) => !notification.read
    ).length;
    setCount(unreadCount);
  }, []); 

  return (
    <div>
      {notifications.map((notification) => (
        <Notification key={notification.name} {...notification} />
      ))}
    </div>
  );
};