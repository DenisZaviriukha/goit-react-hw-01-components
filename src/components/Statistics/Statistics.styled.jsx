import styled from 'styled-components';

export const StatisticSection = styled.section`
    display: flex;
    border-radius: 3px;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-color: ${p => p.theme.colors.bg_light };
    width: 340px;
    border: 3px solid ${p => p.theme.colors.border_dark_gray };
` 

export const StatisticHeader = styled.h2`
    margin: 10px 0;
    height: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StatisticList = styled.ul`
    height: 60px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    background-color:${p => p.theme.colors.bg_dark_light };

`

export const ListItem = styled.li `
    display: flex;
    flex-direction: column;
    width: calc(100%/5);
    gap: 7px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${p => p.theme.colors.border_dark_gray };

`

export const ListLable = styled.span`
    font-size: 18px;
`

export const ListPercentage = styled.span`
    font-size: 19px; 
`