import PropTypes from 'prop-types';
import {
  ProfileWraper,
  Img,
  Name,
  Text,
  Description,
  Stats,
  StatsElements,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWraper key={tag}>
      <Description>
        <Img src={avatar} alt={username} />
        <Name>{username}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <Stats>
        <StatsElements>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsElements>
        <StatsElements>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsElements>
        <StatsElements>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsElements>
      </Stats>
    </ProfileWraper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
