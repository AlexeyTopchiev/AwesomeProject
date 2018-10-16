import React from 'react';
import styled from 'styled-components/native';
import { AsyncStorage } from "react-native";

class SignInScreen extends React.Component {

  signIn = async () => { 
    try {
      await AsyncStorage.setItem('userToken', 'alex')
      const { navigate } = this.props.navigation;
      navigate("App")
    } catch (error) {
      console.log('!!!!!!!!!!!!!!!', error)
    }
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Button title="Complete Sign In" onPress={this.signIn} />
        </Wrapper>
      </Container>
    );
  }
}

export default SignInScreen

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.View`
  width: 200px;
`

const Button = styled.Button`
  
`