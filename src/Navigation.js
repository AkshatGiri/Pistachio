import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";

import Dev from "./screens/dev/Dev";
import Skeletor from "./components/Skeletor";

// App's main navigation begins here
const DrawerNavigator = createDrawerNavigator({
  DevScree: {
    screen: Dev
  },
  HomeScreen: {
    screen: Skeletor
  }
});

// Deciding between login vs home
const MainRoutes = {
  Home: { screen: DrawerNavigator },
  Login: { screen: Skeletor }
};

const Navigator = createSwitchNavigator(MainRoutes, {
  headerMode: "screen"
});

const Navigation = createAppContainer(Navigator);

export default Navigation;
