import styled from "styled-components"

export const TransactionTable = styled.table`
    margin: 0 auto;    
    width: 340px;
    border: 3px solid ${p => p.theme.colors.border_dark_gray };
    border-radius: 3px;

`

export const TableHeader = styled.thead`
    height: 40px;
`

export const TableRow = styled.tr`
    width: 100%;
    height: 40px;
`

export const TableColumns = styled.th`
    width: calc(100%/3);
    background-color: ${p => p.theme.colors.bg_dark_light };
`

export const TableBody = styled.tbody`
    background-color: ${p => p.theme.colors.bg_light}
`

export const TableData = styled.td`
    width: calc(100%/3);
    text-align: center;
`     