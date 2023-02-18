import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return ( 
    <table className={css.transactionHistory}>    
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      {items.map(item => (
        <tbody key={item.id}>
          <tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        </tbody> 
    ))}
    </table> 
    )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired, 
    }).isRequired
  ).isRequired,
};