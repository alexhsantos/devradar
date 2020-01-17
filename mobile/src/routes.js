 import { createAppContainer } from 'react-navigation';
 import { createStackNavigator } from 'react-navigation-stack';

 import Main from './pages/Main';
 import Profile from './pages/Profile';

 const Routes = createAppContainer(
   createStackNavigator({
     Main:{
       screen: Main,
       navigationOptions: {
         title:'DevRadar',
       }
     },
     Profile:{
        screen: Profile,
        navigationOptions: {
          title:'Github Profile',
        }
      },
    },{
      defaultNavigationOptions:{
        headerBackTitleVisible:false,
        headerStyle: {
          backgroundColor:'#3769f3',
        },
        headerTintColor: '#FFF'
      }
    })
 );

 export default Routes;