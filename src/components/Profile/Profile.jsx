import PropTypes from 'prop-types';
import { ProfileCard, ProfilePicture, ProfileName, ProfileTag, ProfileLocation, StatsList, StatsItem, StatsLable, StatsQuantity } from './Profile.styled';

export const Profile = ({ item: { username, tag, location, avatar, stats: { followers, views, likes} } }) => {
    return (
    <ProfileCard>
        <ProfilePicture
            src={avatar}
            alt="User avatar"
        />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
        <StatsList>
            <StatsItem>
                <StatsLable>Followers</StatsLable>
                <StatsQuantity>{followers}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLable>Views</StatsLable>
                <StatsQuantity>{views}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLable>Likes</StatsLable>
                <StatsQuantity>{likes}</StatsQuantity>
            </StatsItem>       
        </StatsList>
    </ProfileCard>
    )
}

Profile.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
    })
}