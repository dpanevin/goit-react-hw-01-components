import css from 'components/transactionsHistory/transactionsHistory.module.css';

export function Transaction({ transaction }) {
  return (
    <tr className={css.tableRow}>
      <td className={css.tableColumn}>{transaction.type}</td>
      <td className={css.tableColumn}>{transaction.amount}</td>
      <td className={css.tableColumn}>{transaction.currency}</td>
    </tr>
  );
}
