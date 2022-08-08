import React from 'react'
import styled, {ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle';




const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: auto;
`


const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 80vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.3rem + 1vw);
 backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`


const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />


        <Main>
        In one of his infamous speeches, Steve Jobs said “Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.”
<br /> <br/>
I used to spend many hours pondering these words, in between my Torts classes in first year, till my elective class in Law and Technology in my final year at law school. Jobs had been talking about finding your passion and I was in lecture halls not feeling anything for a subject I had dedicated 6 years to. It took me that long to finally decide to explore careers in tech. First self-teaching and later through a Software Engineering Bootcamp at General Assembly.
<br/> <br/>
I quickly learned that just because it is your passion does not mean it will be easy, but that because it is your passion fighting for it will be easier. Learning code, I discovered, is very similar to law, both have rules that need to be applied with great attention to detail, with the lack thereof being fatal.
<br/> <br/>
I am inspired by environments that challenge me and inspire me to do more out of my comfort zone and my goal is to join a collaborative team that values intellectual openness. Please feel free to connect on any of the social links  or by clicking the 'Say Hi👋🏾' button.
<br/> <br/>
Looking forward to hearing from you 😃.

        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>

    )
}

export default AboutPage
