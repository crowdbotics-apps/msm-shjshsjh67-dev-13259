import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfCopyOfBlankScreen212195Navigator from '../features/CopyOfCopyOfBlankScreen212195/navigator';
import CopyOfBlankScreen212194Navigator from '../features/CopyOfBlankScreen212194/navigator';
import BlankScreen212193Navigator from '../features/BlankScreen212193/navigator';
import CopyOfBlankScreen012192Navigator from '../features/CopyOfBlankScreen012192/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfCopyOfBlankScreen212195: { screen: CopyOfCopyOfBlankScreen212195Navigator },
CopyOfBlankScreen212194: { screen: CopyOfBlankScreen212194Navigator },
BlankScreen212193: { screen: BlankScreen212193Navigator },
CopyOfBlankScreen012192: { screen: CopyOfBlankScreen012192Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
