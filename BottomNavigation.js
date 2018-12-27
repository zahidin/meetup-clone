import React from 'react';
import { Text,Image,Icon } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './views/Home'
import Going from './views/Going'
import Update from './views/Update'
import Profile from './views/Profile'
import Find from './views/Find'

const BootomTabNavigator = createBottomTabNavigator(
    {
       Home:{
           screen:Home,
           navigationOptions:{
               taBarLabel:'Home',
               tabBarIcon:({ tintColor }) =>(
                   <Icon name='Home' style={{color:{tintColor},height:27}} />
               )
           }
       },
       Find:{
           screen:Find,
           navigationOptions:{
                taBarLabel:'Find',
                tabBarIcon:({ tintColor }) =>(
                    <Icon name='search' style={{color:{tintColor},height:27}} />
                )
            }
       },
       Going:{
           screen:Going,
           navigationOptions:{
                taBarLabel:'Going',
                tabBarIcon:({ tintColor }) =>(
                    <Icon name='md-checkmark-circle' style={{color:{tintColor},height:27}} />
                )
            }
       },
       Update:{
           screen:Update,
           navigationOptions:{
                taBarLabel:'Update',
                tabBarIcon:({ tintColor }) =>(
                    <Icon name='md-notifications' style={{color:{tintColor},height:27}} />
                )
            }
       },
       Profile:{
           screen:Profile,
           navigationOptions:{
                taBarLabel:'Profile',
                tabBarIcon:({ tintColor }) =>(
                    <Icon name='md-person' style={{color:{tintColor},height:27}} />
                )
            }
       }
    }, {
        initialRouteName:'Home',
        order:[Home,Find,Going,Update,Profile],
        tabBarOptions:{
            activeTintColor:'#c30f42',
            inactiveTintColor:'grey'
        }    
    }
)

export default BootomTabNavigator