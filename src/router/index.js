import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import screens from '../screens';

const stack = createStackNavigator(screens);

export default createAppContainer(stack);