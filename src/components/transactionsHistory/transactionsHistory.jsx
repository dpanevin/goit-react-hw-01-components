import { Transaction } from './transaction/transaction';
import css from 'components/transactionsHistory/transactionsHistory.module.css';

export function TransactionsHistory({ transactions }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr className={css.tableRow}>
          <th className={css.tableColumn}>Type</th>
          <th className={css.tableColumn}>Amount</th>
          <th className={css.tableColumn}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {transactions.map(transaction => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        })}
      </tbody>
    </table>
  );
}
