import { Notification } from "./Notification";
import avatarMarkWebber from "../assets/images/avatar-mark-webber.webp";

export const Notifications = () => {
  return (
    <div>
      <Notification
        name="Mark Webber"
        photo={avatarMarkWebber}
        action="reacted to your recent post"
        postTitle="My first tournament today!"
        postTime="1m ago"
        read={true}
      />
    </div>
  );
};

// Angela Gray followed you
// 5m ago

// Jacob Thompson has joined your group Chess Club
// 1 day ago

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
