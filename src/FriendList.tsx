"use no memo"
import { useFriendOnlineCount } from "./UseFriendOnlineCount.tsx";

interface Friend {
  id: string;
  name: string;
}

interface Friends {
  friends: Friend[];
}

export function FriendList({ friends }: Friends) {
  const onlineCount = useFriendOnlineCount();
  if (friends.length === 0) return <NoFriends />;

  return (
    <div>
      <span>{onlineCount} online in total</span>
      <div>
        {friends.map((friend) => (
          <FriendListCard key={friend.id} friend={friend} />
        ))}
      </div>
      <MessageButton />
    </div>
  );
}

function NoFriends() {
  return <div>No friends</div>;
}

function FriendListCard({ friend }: { friend: Friend }) {
  return <div>{friend.name}</div>;
}

function MessageButton() {
  return <button>Message</button>;
}
