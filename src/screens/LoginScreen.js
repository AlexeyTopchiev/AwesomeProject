import React from 'react';
import styled from 'styled-components/native';


export default class LoginScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Container>
        <Button title="Go to the Home Screen" onPress={() => this.props.navigation.navigate('Home')} />
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const Button = styled.Button`
  margin-bottom: 10px;
`