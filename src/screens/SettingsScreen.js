import React from 'react';
import styled from 'styled-components/native';
import { AsyncStorage } from "react-native";


class SettingsScreen extends React.Component {

  signOut = async () => {
    AsyncStorage.clear() 
    this.props.navigation.navigate('AuthLoading')
  }

  render() {
    return (
      <Container>
        <Wrapper style={{width: 200}}>
          <Button title="Sign Out" onPress={this.signOut} />
        </Wrapper>
      </Container>
    );
  }
}

export default SettingsScreen

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`
const Button = styled.Button`
  
`
const Wrapper = styled.View`
  width: 100px;
`