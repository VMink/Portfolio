import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { YinYang } from './AllSvgs';
import Intro from './Intro';
import { motion } from 'framer-motion';

const MainContainer = styled(motion.div)`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,h3,h4,h5,h6{
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1; 

  @media all and (max-width: 798px) {
    font-size: 14px;
    color: ${props => props.theme.body};
    text-shadow: 0 0 10px black; 
  }
`

const Projects = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1; 

  @media all and (max-width: 798px) {
    right: -0.5rem;
    text-align: center;
    top: 51%;
    font-size: 14px;
    color: ${props => props.theme.body};
    text-shadow: 0 0 5px black;
  }
`
 
const Work = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  position: absolute;
  top: 50%;
  left: 1rem;
  transform:  rotate(-90deg) translate(50%, 50%);
  text-decoration: none;
  z-index: 1; 

  @media all and (max-width: 798px) {
    left: -0.5rem;
    text-align: center;
    font-size: 14px;
    color: ${props => props.theme.body};
    text-shadow: 0 0 5px black;
  }
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

const About = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  text-decoration: none;
  z-index: 1;

  @media all and (max-width: 798px) {
    font-size: 14px;
    color: ${props => props.theme.body};
    text-shadow: 0 0 5px black;
  }
`

const Services = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1; 

  @media all and (max-width: 798px) {
    font-size: 14px;
    color: ${props => props.theme.body};
    text-shadow: 0 0 5px black;
  }
`

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`

const Center = styled.button`
  position: absolute;
  top: ${window.innerWidth < 768 ? props => props.click ? '90%' : '50%' : props => props.click ? '85%' : '50%'};
  left:${window.innerWidth < 768 ? props => props.click ? '90%' : '50%' : props => props.click ? '92%' : '50%'};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  &>:first-child{
    animation: ${rotate} infinite 1.5s linear;
  }

  &>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem; 
  }
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: ${window.innerWidth < 768 ? '0' : '50%'};
  width: ${window.innerWidth < 768 ? props => props.click ? '100%' : '0%' : props => props.click ? '50%' : '0%'};
  height: ${window.innerWidth < 768 ? props => props.click ? '50%' : '0%' : props => props.click ? '100%' : '0%'};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {

  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
    },
    exit: i => ({
      transform:  i,
    }),
    transition: {
      duration: 1
    }
  }  
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [transition, setTransition] = useState();

  const handleTransition = (transitionValue) => setTransition(transitionValue)

  return (
    <MainContainer variants={container} custom={transition} initial='hidden' animate='show' exit='exit' transition='transition'>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'}/>
        <SocialIcons theme={window.innerWidth < 876 ? 'light' : click ? 'dark' : 'light'} />
        <Center click={click}>
          <YinYang onClick={() => handleClick()} width={window.innerWidth<876 ? click ? 60 : 120 : click ? 120 : 200} height={window.innerWidth<876 ? click ? 60 : 120 : click ? 120 : 200} fill='currentColor' />
          <span>click here</span>
        </Center>
        <Contact to="/contact">
          <motion.h2
            initial={{
              y:-200,
              transition: { type:'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            onClick={() => handleTransition('translate(-100%, 100%)')}
          >
            Contact Me
          </motion.h2>
        </Contact>
        <Projects to="/projects">
          <motion.h2
            initial={{
              y: -200,
              transition: { type:'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            onClick={() => handleTransition('translate(-100%)')}
          >
            Projects
          </motion.h2>
        </Projects>
        <Work to="/work" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type:'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            onClick={() => handleTransition('translate(100%)')}
          >
            Work
          </motion.h2>
        </Work>
        <BottomBar>
          <About to="/about" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type:'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y:0,
                transition: { type:'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              onClick={() => handleTransition('translate(0,-100%)')}
            >
              About Me
            </motion.h2>
          </About>
          <Services to="/services">
            <motion.h2
              initial={{
                y: 200,
                transition: { type:'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y:0,
                transition: { type:'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              onClick={() => handleTransition('translate(0,-100%)')}
            >
              Services
            </motion.h2>
          </Services>      
        </BottomBar>
      </Container>
      {click ? <Intro click={click}/> : null}
    </MainContainer>
  );
};

export default Main;
