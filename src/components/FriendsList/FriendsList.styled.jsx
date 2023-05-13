import styled from 'styled-components';

export const FriendsListComponent = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    gap: 10px;
    
`
export const FriendsItem = styled.li`
    position: relative;
    display: flex;
    padding: 10px;
    align-items: center;
    flex-direction: row;
    background-color: ${p => p.theme.colors.bg_light };
    border-radius: 3px;
    width: 340px;
    height: 130px;
    border: 3px solid ${p => p.theme.colors.border_dark_gray };

`

export const FriendsIsOnline = styled.span`
    &::before{
        content: '';
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 10px;
        width: 25px;
        height: 25px;
        background-color: ${p => {
            return p.online ? p.theme.friendlist.isOline : p.theme.friendlist.isNotOnline
        }};
        border-radius: 50%;
    }
`

export const FriendsAvatar = styled.img`
    width: 100px;
    height: 100px;
    margin-left: 30px
`

export const FriendsName = styled.p`
    display: flex;
    font-size: 30px;
    font-weight: bold;
    margin-left: 10px;
`