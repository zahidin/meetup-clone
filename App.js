import React, {Component} from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './views/Login'
import Register from './views/Register'
import Home from './views/Home'
import Searchgroup from './views/Searchgroup'
import Find from './views/Find'
import Going from './views/Going'
import Upcoming from './views/Upcoming'
import Update from './views/Update'
import Profile from './views/Profile'
import Searchcities from './views/Searchcities'
import Addmeetup from './views/Addmeetup'

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    Home: Home,
    Searchgroup: Searchgroup,
    Searchcities: Searchcities,
    Find: Find,
    Going: Going,
    Upcoming: Upcoming,
    Update: Update,
    Profile: Profile,
    Addmeetup: Addmeetup,
  },
  {
    initialRouteName: 'Login',
    headerMode:'none'
  }
);

export default createAppContainer(AppNavigator);