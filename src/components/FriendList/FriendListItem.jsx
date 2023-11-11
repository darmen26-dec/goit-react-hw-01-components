import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusColor = isOnline ? 'green' : 'red';
  const itemStyle = {
    '--status-color': statusColor,
  };
  return (
    <li className={css.item} style={itemStyle}>
      <div className={css.content}>
        <span className={css.status}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </div>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
