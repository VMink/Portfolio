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
  font-size: calc(0.3rem + 1vw);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono',monospace;
  font-style: italic;

  a {
    color: White;
  }

  @media all and (max-width: 1400px) {
    font-size: calc(0.4rem + 1vw);
  }

  @media all and (max-width: 798px) {
    padding: 1rem;
    left: 4rem;
    width: 60vw;
    font-size: calc(0.6rem + 1vw);
  }

  @media all and (max-width: 450px) { 
    height: 75vh;
    top: 6rem;
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
          Hi! My name is Eduardo Francisco Lugo Quintana I am currently studying Computer Science and Technology B.S. in Tecnologico de Monterrey.
          Currently I am focused on Web Development more specifically in Front-End with React and Angular. 
          <br></br>
          <br></br>
          When I graduate I want to specialize in Cibersecurity Red Team, mostly pentesting and auditoring.
          <br></br>
          <br></br>
          I can work perfectly under pressure, puntuality is really important to me, I consider myself a responsible person and love the teamwork. 
          I love learning new things and I am always looking for new courses and certifications to keep improving my coding skills .
          <br></br>
          <br></br>
          You can check all my certificates by <a href='https://drive.google.com/drive/folders/1iHS5A6NZNkvBHMFpHPYM9wkXiJGOqCXG?usp=sharing' target='_blanck' >CLICKING HERE</a>
          <br></br>
          <br></br>
          Download my CV by <a href='https://drive.google.com/file/d/1llc5qbWcgphZSt_Um7kJqH9efS7Ppb8i/view?usp=sharing' target='_blanck'>CLICKING HERE</a>
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default About;
