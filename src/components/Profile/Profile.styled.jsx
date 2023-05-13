import styled from 'styled-components';

export const ProfileCard = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: ${p => p.theme.colors.bg_light };
    margin: 0 auto;
    width: 340px;
    border-radius: 3px;
    border: 3px solid ${p => p.theme.colors.border_dark_gray };
`
export const ProfilePicture = styled.img`
    border-radius: 100%;
    border: 3px solid ${p => p.theme.colors.border_gray };
    width: 100px;
`
export const ProfileName = styled.p`  
    font-size: 30px;
    font-weight: bold;
`
export const ProfileTag = styled.p`
    font-size: 21px;
    color: ${p => p.theme.colors.text_gray };
`
export const ProfileLocation = styled.p`
    font-size: 23px;
    color: ${p => p.theme.colors.text_gray };
`
export const StatsList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color:${p => p.theme.colors.bg_dark_light };
    width: 100%;
    height: 60px;
`
export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    width: calc(100%/3);
    border: 1px solid ${p => p.theme.colors.border_dark_gray };
    gap: 7px;
    justify-content: center;
    align-items: center;
}
`
export const StatsLable = styled.span`
    font-size: 18px;
`
export const StatsQuantity = styled.span` 
    font-size: 19px;    
` 