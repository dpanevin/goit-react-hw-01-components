import css from 'components/statisticsList/statistics/statistics.module.css';

export function Statistics({ stat }) {
  return (
    <li className={css.item}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{`${stat.percentage}%`}</span>
    </li>
  );
}
