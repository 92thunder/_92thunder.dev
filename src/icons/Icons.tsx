import React from 'react'
import { IconWrapper } from './IconWrapper'
import styled from 'styled-components'
import { Twitter, GitHub, Create } from '@material-ui/icons'

const IconsBar = styled.div`
  width: calc(380px + 1vmin);
  max-width: calc(100% - 32px);
  display: flex;
  justify-content: space-between;
`

export const Icons: React.FC = () => {
  return (
    <IconsBar>
      <IconWrapper href="https://github.com/92thunder" reverse={true}>
        <GitHub style={{ fontSize: 40 }} />
      </IconWrapper>

      <IconWrapper href="https://twitter.com/92thunder">
        <Twitter style={{ fontSize: 28 }}/>
      </IconWrapper>

      <IconWrapper href="https://92thunder.hatenablog.com">
        <Create style={{ fontSize: 28 }}/>
      </IconWrapper>
    </IconsBar>
  )
}
