import css from 'components/friendList/friendCard/friendCard.module.css';

export function FriendCard({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
