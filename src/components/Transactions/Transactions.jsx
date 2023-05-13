import PropTypes from 'prop-types';

import { TransactionTable, TableHeader, TableRow, TableColumns, TableBody, TableData} from './Transactions.styled'

export const Transactions = ({ items }) => {
    return ( 
    <TransactionTable>
        <TableHeader>
            <TableRow>
                <TableColumns>Type</TableColumns>
                <TableColumns>Amount</TableColumns>
                <TableColumns>Currency</TableColumns>
            </TableRow>
        </TableHeader>

        <TableBody>
                {items.map(item => (
                    <TableRow key={item.id}>
                    <TableData>{item.type}</TableData>
                    <TableData>{item.amount}</TableData>
                    <TableData>{item.currency}</TableData>
                </TableRow>
            ))}
        </TableBody>
    </TransactionTable>
    )
}

Transactions.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.oneOf(["invoice", "payment", "withdrawal", "deposit"]).isRequired,
            amount: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
        })
    ).isRequired,
};