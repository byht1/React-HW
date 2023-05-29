import PropTypes from 'prop-types';
import { FriendsElements, Online, Offline, Name, Img } from './Friend.styled';

export const FriendsListElements = ({ avatar, isOnline, name }) => {
  return (
    <FriendsElements>
      {isOnline ? <Online /> : <Offline />}
      <Img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendsElements>
  );
};

FriendsListElements.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
