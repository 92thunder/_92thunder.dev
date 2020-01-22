import React from 'react'
import styled from 'styled-components'
import { Icons } from './icons/Icons'

const Container = styled.div`
  background-color: #363636;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-family: Post No Bills Jaffna ExtraBold Regular;
  color: white;
  font-size: calc(48px + 1vmin);
  line-height: 1;
  margin: 0;
  padding-bottom: calc((48px + 1vmin) * 1.5);
`

const App: React.FC = () => {
  return (
    <Container>
      <Title>92THUNDER.DEV</Title>
      <Icons/>
    </Container>
  )
}

export default App
