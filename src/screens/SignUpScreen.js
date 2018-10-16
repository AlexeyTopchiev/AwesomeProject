import React from 'react';
import styled from 'styled-components/native';


export default class SignUpScreen extends React.Component {
  render() {
    return (
      <Container>
        <TextStyled>SignUpScreen</TextStyled>
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
  color: #000;
  font-size: 15px;
`