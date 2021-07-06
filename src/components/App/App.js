import { Profile } from 'components/profile/profile';
import { StatisticsList } from 'components/statisticsList/statisticsList';
import { FriendList } from 'components/friendList/friendList';
import { TransactionsHistory } from 'components/transactionsHistory/transactionsHistory';
import user from 'data/user.json';
import stats from 'data/statistical-data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export function App() {
  return (
    <>
      <section className="appPage">
        <div className="sideBar">
          <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
          <StatisticsList title="Upload stats" stats={stats} />
          <FriendList friends={friends} />
        </div>
        <TransactionsHistory transactions={transactions} />
      </section>
    </>
  );
}
