import user from 'json/user';
import data from 'json/data';
import friends from 'json/friends';
import transactions from 'json/transactions';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/Friends';
import { TransactionHistory } from './Transaction/TransactionHistory';
const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <div style={{ padding: '50px 0' }}>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
