import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from "react-navigation";

import Dev from "./screens/dev/Dev";
import Home from "./screens/home/Home";
import Skeletor from "./components/Skeletor";

const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    // we don't need a header for this page.
    navigationOptions: {
      header: null,
    },
  },
  Contributions: {
    screen: Skeletor,

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
