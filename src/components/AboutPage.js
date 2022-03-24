import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import astronaut from '../assets/Images/spaceman.png'
import { keyframes } from 'styled-components';
import BigTitle from '../subComponents/BigTitle';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px)}
  100% { transform: translateY(-10px) }
`

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img{
    width: 100%;
    height: auto;
  }
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono',monospace;
  font-style: italic;

  @media all and (max-width: 1400px) {
    font-size: calc(0.4rem + 1vw);
  }

  @media all and (max-width: 798px) {
    padding: 1rem;
    left: 4rem;
    width: 60vw;
    font-size: calc(0.6rem + 1vw);
  }
`

const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        <PowerButton />
        <ParticleComponent style={{position:"absolute",top:0}} theme='dark'/>
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          I'm a Software Engineer from Mexico. I studied 'Ingenieria en Tecnologías Computacionales' in Tecnológico de Monterrey. I love programming and learning. If you dream it I can program it.
          <br></br>
          <br></br>
          I'm specialized in Cibersecurity and Full Stack Web Development. I'm an independent freelancer.
          <br></br>
          <br></br>
          I believe that computers and software are the future; that we will live in a technological civilization. 
          <br></br>
          <br></br>
          Feel free to contact me by my Contact Form or through my social media  
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default About;
