import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => { 
    return (
    <ul className={css.friend__list}>
    {friends.map(friend => (
     <li className={css.item}
     key={friend.id}>
     <span className={friend.isOnline ? css.status__on : css.status__off}></span>
     <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
     <p className={css.name}>{friend.name}</p>
     </li>
    ))}
    </ul>
)}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };