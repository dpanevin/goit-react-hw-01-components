import { FriendCard } from './friendCard/friendCard';
import css from 'components/friendList/friendList.module.css';

export function FriendList({ friends }) {
  return (
    <div className={css.friends}>
      <h2 className={css.title}>Friends</h2>
      <ul className={css.friendList}>
        {friends.map(friend => {
          return (
            <FriendCard
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              key={friend.id}
            />
          );
        })}
      </ul>
    </div>
  );
}
