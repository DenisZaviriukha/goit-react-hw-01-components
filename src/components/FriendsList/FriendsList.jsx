import PropTypes from 'prop-types';
import { FriendsListComponent, FriendsItem, FriendsIsOnline, FriendsAvatar, FriendsName } from './FriendsList.styled';

export const FriendsList = ({ items }) => {
    return (
        <FriendsListComponent>
            {items.map(item => (
                <FriendsItem key={item.id}>
                    <FriendsIsOnline online={item.isOnline}></FriendsIsOnline>
                    <FriendsAvatar src={item.avatar} alt={"User avatar"} />
                    <FriendsName>{item.name}</FriendsName>
                </FriendsItem>
            ))} 
        </FriendsListComponent>
    )
}

FriendsList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};