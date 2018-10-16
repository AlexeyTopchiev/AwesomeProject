import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator, AsyncStorage } from "react-native"


class AuthLoadingScreen extends React.Component {

  constructor() {
    super()
    this.loadApp()
  }

  loadApp = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    
    this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  }
  
  render() {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    )
  }
}

export default AuthLoadingScreen


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
