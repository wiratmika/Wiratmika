import React from "react"
import styled from "styled-components"

const Container = styled.section`
  background: url("../images/fuji.jpg") no-repeat fixed 50% 0%;
  background-size: cover;
  height: 100vh;
`

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-top: 30vh;
`

const Subtitle = styled.p`
  color: white;
  text-align: center;
`

export default () => (
  <Container>
    <div class="row">
      <div class="small-12 small-centered columns">
        <Title>Hello, there.</Title>
        <Subtitle>Thank you for your curiosity of me.</Subtitle>
      </div>
    </div>
  </Container>
)
