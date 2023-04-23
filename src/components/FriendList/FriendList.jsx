import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from "prop-types";
import css from './FriendsList.module.css';

export const FriendList = ({friends}) => {
    
return (
<ul className={css.friendList}>
  {friends.map(({id,avatar,name,isOnline}) => (
    <FriendListItem
    key={id}
    avatar={avatar}
    name={name}
    isOnline={isOnline}
    />
  ))}
</ul>
)
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
    }))
};