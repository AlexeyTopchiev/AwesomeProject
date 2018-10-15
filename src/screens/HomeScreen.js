import React from 'react';
import styled from 'styled-components/native';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Button title="Go back to login screen" onPress={() => this.props.navigation.goBack()}/>
        {/* <Button title="Go back to login screen" onPress={() => this.props.navigation.popToTop()}/> */}
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

const TextStyled = styled.Text`
  color: red;
  font-size: 15px;
`

const Button = styled.Button`

`