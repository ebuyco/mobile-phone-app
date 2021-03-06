import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import RegisterScreenContainer from '../screens/RegisterScreen/RegisterScreenContainer';
import LogoutMenuContainer from '../../auth/components/LogoutMenu/LogoutMenuContainer';
import ColorPalette from '../../styles/ColorPalette';

const RegisterStack = createStackNavigator({
  Register: {
    screen: RegisterScreenContainer,
    navigationOptions: () => {
      return {
        headerTitleStyle: {
          color: 'white',
          flex: 3
        },
        title: `Select your number`,
        headerStyle: {
          backgroundColor: ColorPalette.primary
        },
        headerTintColor: 'white',
        headerRight: <LogoutMenuContainer />
      };
    }
  }
});

export default RegisterStack;
