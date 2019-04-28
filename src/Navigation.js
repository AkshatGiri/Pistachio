import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
} from "react-navigation";

import Dev from "./screens/dev/Dev";
import Home from "./screens/home/Home";
import Skeletor from "./components/Skeletor";

// App's main navigation begins here
const DrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: Home,
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
