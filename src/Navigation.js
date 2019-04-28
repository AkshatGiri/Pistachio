import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from "react-navigation";

import ContributionDetail from "./screens/contributionDetail/ContributionDetail";
import Contributions from "./screens/contributions/Contributions";
import Dev from "./screens/dev/Dev";
import Home from "./screens/home/Home";
import Initial from "./screens/initial/Initial";
import PText from "./components/PText";
import Plaid from "./screens/plaid/Plaid";
import React from "react";
import Skeletor from "./components/Skeletor";
import TransactionDetail from "./screens/transactionDetail/TransactionDetail";
import Transactions from "./screens/transactions/Transactions";

const HomeNavigator = createStackNavigator({
  Initial: {
    screen: Initial,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: Home,
    // we don't need a header for this page.
    navigationOptions: {
      header: null,
    },
  },
  Plaid: {
    screen: Plaid,
    navigationOptions: {
      header: null,
    },
  },
  Contributions: {
    screen: Contributions,
    navigationOptions: {
      header: null,
    },
  },
  Transactions: {
    screen: Transactions,
    navigationOptions: {
      header: null,
    },
  },
  TransactionDetail: {
    screen: TransactionDetail,
    navigationOptions: {
      header: null,
    },
  },
  ContributionDetail: {
    screen: ContributionDetail,
    navigationOptions: {
      header: null,
    },
  },
});

// App's main navigation begins here
const DrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: HomeNavigator,
  },
  DevScreen: {
    screen: Dev,
  },
});

// Deciding between login vs home
const MainRoutes = {
  Home: { screen: DrawerNavigator },
  Login: { screen: Skeletor },
};

const Navigator = createSwitchNavigator(MainRoutes, {
  headerMode: "screen",
});

const Navigation = createAppContainer(Navigator);

export default Navigation;
