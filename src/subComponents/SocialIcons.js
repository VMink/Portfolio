import React from 'react';
import { NavLink } from 'react-router-dom';
import {Github, Instagram, LinkedIn, YouTube } from '../components/AllSvgs';
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'
import { motion } from 'framer-motion';

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  &>*:not(:last-child){
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    left: 1rem;
  }
`
const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.color === "dark" ? darkTheme.text : darkTheme.body};

  @media (max-width: 768px) {
    height: 4rem;
    background-color: ${props => props.color === "dark" ? darkTheme.text : darkTheme.body}
  }
`

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div 
      initial={{transform: "scale(0)"}}
      animate={{scale: [0,1,1.5,1]}}
      transition={{type: 'spring', duration: 1, delay: 1}}
      >
        <NavLink style={{color:'inherit'}} target="_blank" to={"//github.com/VMink"}>
          <Github width={25} height={25} fill={window.innerWidth < 798 ? props.theme === "dark" ? darkTheme.text : darkTheme.body :props.theme === "dark" ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </motion.div>
      <motion.div 
      initial={{transform: "scale(0)"}}
      animate={{scale: [0,1,1.5,1]}}
      transition={{type: 'spring', duration: 1, delay: 1.2}}
      >
        <NavLink style={{color:'inherit'}} target="_blank" to={"//www.instagram.com/lalo_lugo341/"}>
          <Instagram width={30} height={30} fill={window.innerWidth < 798 ? props.theme === "dark" ? darkTheme.text : darkTheme.body :props.theme === "dark" ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </motion.div>
      <motion.div 
      initial={{transform: "scale(0)"}}
      animate={{scale: [0,1,1.5,1]}}
      transition={{type: 'spring', duration: 1, delay: 1.4}}
      >
        <NavLink style={{color:'inherit'}} target="_blank" to={"//www.youtube.com/channel/UCM9TVf7jvyoib5KlauEXksw"}>
          <YouTube width={25} height={25} fill={window.innerWidth < 798 ? props.theme === "dark" ? darkTheme.text : darkTheme.body :props.theme === "dark" ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </motion.div>
      <motion.div 
      initial={{transform: "scale(0)"}}
      animate={{scale: [0,1,1.5,1]}}
      transition={{type: 'spring', duration: 1, delay: 1.6}}
      >
        <NavLink style={{color:'inherit'}} target="_blank" to={"//www.facebook.com/eduardo.lugo.180/"}>
          <LinkedIn width={25} height={25} fill={window.innerWidth < 798 ? props.theme === "dark" ? darkTheme.text : darkTheme.body :props.theme === "dark" ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </motion.div>

      <Line color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: '8rem',
        }}
        transition={{
          type:'spring', duration: 1, delay: 0.8
        }}
      />
    </Icons>
  )
};

export default SocialIcons;
