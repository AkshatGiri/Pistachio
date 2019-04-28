import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from "react-navigation";

import Dev from "./screens/dev/Dev";
import Home from "./screens/home/Home";
import Contributions from "./screens/contributions/Contributions";
import ContributionDetail from "./screens/contributionDetail/ContributionDetail";
import Initial from "./screens/initial/Initial";
import Skeletor from "./components/Skeletor";

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
  Contributions: {
    screen: Contributions,

    navigationOptions: {
      title: "Contributions",
    },
  },
  ContributionDetail: {
    screen: ContributionDetail,

    navigationOptions: {
      title: "Contributions",
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
