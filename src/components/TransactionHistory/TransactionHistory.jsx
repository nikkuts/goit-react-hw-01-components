import PropTypes from "prop-types";

export const TransactionHistory = ({items}) => {
    
return (
    <table class="transaction-history">
    <thead>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
    </thead>
    <tbody>
    {items.map(({id,type,amount,currency}) => (
        <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
        </tr>
    ))}
    </tbody>
    </table>
)
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
  })),
};