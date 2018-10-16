import React from 'react';
import styled from 'styled-components/native';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation'
import { TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import AuthLoadingScreen from './src/screens/AuthLoadingScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import HomeScreen from './src/screens/HomeScreen'
import SettingsScreen from './src/screens/SettingsScreen'




const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
})

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  SettingsScreen: {
    screen: SettingsScreen
  },
})

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({navigation}) => ({
      title: 'Your App',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Container>
            <Icon name="md-menu" size={24} />
          </Container>
        </TouchableOpacity>
      )
    })
  }
})

const AppDrawNavigator = createDrawerNavigator({
  Home: AppStackNavigator
})

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawNavigator
})


const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`

const TextStyled = styled.Text`
  color: red;
  font-size: 15px;
`

const Input = styled.TextInput`
  border-color: gray;
  width: 100px;
  height: 40px;
`

const Button = styled.Button`
  
`
