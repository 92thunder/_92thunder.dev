import React from 'react'
import styled from 'styled-components'

const Border = styled.a`
  color: white;
  border: 4px solid white;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #444;
  }
`

const ReversedBorder = styled(Border)`
  color: #363636;
  background-color: white;
  &:hover {
    color: #444;
    background-color: white;
  }
`

type IconWrapperProps = {
  href: string
  reverse?: boolean
}

export const IconWrapper: React.FC<IconWrapperProps> = (props) => {
  return !props.reverse ? (
    <Border href={props.href}>
      {props.children}
    </Border>
  ) : (
    <ReversedBorder href={props.href}>
      {props.children}
    </ReversedBorder>
  )
}
