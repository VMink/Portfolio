import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/profile-img.png'
import { init } from "ityped"
import { motion } from 'framer-motion'

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  background: linear-gradient(
    to right, 
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right, 
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};  
  z-index: 1;

  @media all and (max-width: 798px) {
    flex-direction: column;
    background: linear-gradient(
    to top, 
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) left,
    linear-gradient(
    to top, 
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) right;
    border-top: 2px solid ${props => props.theme.body};
    border-bottom: 2px solid ${props => props.theme.text};  
  }
`

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  
  .pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
  }

  @media all and (max-width: 798px) {
    width: 100%;
    height: 50%;

    .pic{
      width: 80%;
    }
  }
`

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${props => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5 vw);
    font-weight: 300;
  }

  @media all and (max-width: 798px){
    padding: 1rem;
  }
`

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Fullstack Developer", "Mobile Developer", "White Hat Hacker", "Desktop Developer"]
    })
  })

  return (
    <Box
      initial={{height: 0}}
      animate={{height: '55vh'}}
      transition={{type: 'spring', duration: 2, delay: 1}}
    >
      <SubBox>
        <Text>
          <h1>Hi There,</h1>
          <h3>I'm Eduardo Lugo</h3>
          <h6>Freelance <span ref={textRef}></span></h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 2}}
        >
          <img className='pic' src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  )
}

export default Intro 