import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ProfilesBlueprintNavigator from '../features/ProfilesBlueprint/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';
import AddItemBlueprintNavigator from '../features/AddItemBlueprint/navigator';
import BlankScreen59044Navigator from '../features/BlankScreen59044/navigator';
import BlankScreen49012Navigator from '../features/BlankScreen49012/navigator';
import BlankScreen39011Navigator from '../features/BlankScreen39011/navigator';
import BlankScreen29010Navigator from '../features/BlankScreen29010/navigator';
import BlankScreen19009Navigator from '../features/BlankScreen19009/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ProfilesBlueprint: { screen: ProfilesBlueprintNavigator },
Messenger: { screen: MessengerNavigator },
EmailAuth: { screen: EmailAuthNavigator },
AddItemBlueprint: { screen: AddItemBlueprintNavigator },
BlankScreen59044: { screen: BlankScreen59044Navigator },
BlankScreen49012: { screen: BlankScreen49012Navigator },
BlankScreen39011: { screen: BlankScreen39011Navigator },
BlankScreen29010: { screen: BlankScreen29010Navigator },
BlankScreen19009: { screen: BlankScreen19009Navigator },

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
