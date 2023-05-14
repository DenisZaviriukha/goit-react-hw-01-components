import user_data from "../components/user.json";
import stat_data from "../components/data.json";
import friends_data from "../components/friends.json";
import transaction_data from "../components/transactions.json";
import title_data from "../components/title.json";

import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendsList/FriendsList";
import { Transactions } from "./Transactions/Transactions";

import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <Layout>
      <Profile item={user_data} />
      <Statistics title={title_data} stats={stat_data} />
      <FriendsList items={friends_data} />
      <Transactions items={transaction_data} />
      <GlobalStyle />
    </Layout>
  );
};
