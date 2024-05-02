import { Notification } from "./Notification";
import avatarMarkWebber from "../assets/images/avatar-mark-webber.webp";
import avatarAngelaGray from "../assets/images/avatar-angela-gray.webp";
import avatarJacobThompson from "../assets/images/avatar-jacob-thompson.webp";


export const Notifications = () => {
  return (
    <div>
      <Notification
        name="Mark Webber"
        photo={avatarMarkWebber}
        action="reacted to your recent post"
        title="My first tournament today!"
        postTime="1m ago"
        read={false}
      />

      <Notification
        name="Angela Gray"
        photo={avatarAngelaGray}
        action="followed you"
        postTime="5m ago"
        read={false}
      />

<Notification
        name="Jacob Thompson"
        photo={avatarJacobThompson}
        action="has joined your group"
        title= "Chess Club"
        postTime="1 day ago"
        read={false}
      />
    </div>
  );
};


// Rizky Hasanuddin sent you a private message
// 5 days ago
// Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
// I'm already having lots of fun and improving my game.

// Kimberly Smith commented on your picture
// 1 week ago

// Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate
// 2 weeks ago

// Anna Kim left the group Chess Club
// 2 weeks ago
