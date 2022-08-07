import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'




const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;
position: flex;
left: 3rem;
top: 2rem;
z-index:10vw;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          <div>
          Just Kundai
          </div>

        </Logo>
    )
}

export default LogoComponent
