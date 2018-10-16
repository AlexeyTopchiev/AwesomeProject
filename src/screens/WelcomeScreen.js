import React from 'react';
import styled from 'styled-components/native';


class WelcomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Button title="Sign In" onPress={() => {this.props.navigation.navigate('SignIn')}}/>
        </Wrapper>
        <Wrapper>
          <Button title="Sign Up" onPress={() => {this.props.navigation.navigate('SignUp')}}/>
        </Wrapper>
      </Container>
    );
  }
}

export default WelcomeScreen

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.View`
  width: 200px;
  margin-bottom: 15px;
  }
`

const Button = styled.Button`
  
`
