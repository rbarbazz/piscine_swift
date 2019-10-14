import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './components/Home';
import DeathItemCreation from './components/DeathItemCreation';

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    DeathItemCreation: { screen: DeathItemCreation },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 30,
      },
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
