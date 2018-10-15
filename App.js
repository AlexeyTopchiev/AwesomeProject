import React from 'react';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from 'react-navigation';
import  Icon  from 'react-native-vector-icons/Ionicons';

// import LoginScreen from './src/screens/LoginScreen'
// import HomeScreen from './src/screens/HomeScreen'

export class HomeScreen extends React.Component {

  state = {
    task: null
  }

  render() {
    return (
      <Container>
        <TextStyled>
          Hello!
        </TextStyled>
      </Container>
    )
  }
}
export class SettingsScreen extends React.Component {
  render() {
    return (
      <Container>
        <TextStyled>
          Settings
        </TextStyled>
      </Container>
    )
  }
}
export class TasksScreen extends React.Component {


  render() {
    return (
      <Container>
        {/* <TextStyled>
          Tasks
        </TextStyled> */}
        <Input />
        <Button title="Сохранить" onPress={() => {}}/>
      </Container>
    )
  }
}

export default createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" color={tintColor} size={24}/>
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  },
  // Profile: {
  //   screen: SettingsScreen,
  //   navigationOptions: {
  //     tabBarLabel: 'Profile',
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name="ios-settings" color={tintColor} size={24} />
  //     )
  //   }
  // },
  Tasks: {
    screen: TasksScreen,
    navigationOptions: {
      tabBarLabel: 'Tasks',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  },
}, { //router confing
    initialRouteName: 'Tasks',
    // order: ['Home', 'Settings, Tasks'],
  //navigation for complete tab navigator
  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    activeTintColor: 'orange',
    inactiveTintColor: 'grey'
  }
})

// const AppStackNavigator = createStackNavigator({
//   Login: LoginScreen,
//   Home: HomeScreen
// })

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
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

// AppRegistry.registerComponent('App', () => mainNavigator);