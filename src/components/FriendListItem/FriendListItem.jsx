import PropTypes from "prop-types";
import css from './FriendsListItem.module.css';

export const FriendListItem = ({key,avatar,name,isOnline}) => {
    
return (
<li className={css.item} key={key}>
  {isOnline
  ? <span className={css.statusOn}></span>
  : <span className={css.statusOf}></span>}
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
)
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};