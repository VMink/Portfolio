import React from 'react'
import styled from 'styled-components'

const SendBtn = styled.input`
    padding: 15px 50px;
    text-transform: uppercase;
    text-decoration: none;
    color: ${props => props.theme.text};
    letter-spacing: 2px;
    font-size: 20px;
    border: 1px solid ${props => props.theme.text};
    border-radius: 50px 0;
    cursor: pointer;
    background-color: transparent;
    transition: .5s ease-in-out;

    &:hover{
      border-radius: 0 50px;
      color: ${props => props.theme.body};
      background-color: ${props => props.theme.text};
    }
`

const Btn = () => {
  return (
    <SendBtn type="submit" value="Send" />
  )
}

export default Btn