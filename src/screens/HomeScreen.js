import React from 'react';
import styled from 'styled-components/native';


class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <TextStyled>
          HomeScreen
        </TextStyled>
      </Container>
    );
  }
}

export default HomeScreen

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const TextStyled = styled.Text`
  
`