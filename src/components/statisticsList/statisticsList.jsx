import { Statistics } from './statistics/statistics';
import css from 'components/statisticsList/statisticsList.module.css';

export function StatisticsList({ title, stats }) {
  return (
    <div className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.stat_list}>
        {stats.map(stat => {
          return <Statistics stat={stat} key={stat.id} />;
        })}
      </ul>
    </div>
  );
}
