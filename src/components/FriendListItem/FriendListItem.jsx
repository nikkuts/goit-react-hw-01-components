import PropTypes from "prop-types";

export const FriendListItem = ({key,avatar,name,isOnline}) => {
    
return (
<li class="item" key={key}>
  {isOnline
  ? <span class="status"></span>
  : <span class="instatus"></span>}
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
  <p class="name">{name}</p>
</li>
)
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};