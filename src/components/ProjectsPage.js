import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import { Projects } from '../data/Proyects';
import AnchorComponent from '../subComponents/Anchor';
import BigTitle from '../subComponents/BigTitle';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import PorjectComponent from './PorjectComponent';

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  min-height: 100vh;
`

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding-bottom: 5rem;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);

  @media all and (max-width: 1158px) {
    grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
  }
`

const style = {
  left: '51%'
}

const container = {
  hidden: {opacity:0},
  show: {
    opacity: 1,
    transition:{
      staggerChildren:0.5,
      duration: 0.5,
    }
  }
}

const ProjectsPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70)/30;
    setNumbers(parseInt(num));
  }, [])

  return (
    <MainContainer variants={container} initial='hidden' animate='show'>
      <Container>
        <LogoComponent />
        <PowerButton style={style} />
        <SocialIcons />
        <AnchorComponent numbers={numbers}/>
        <Center>
          <Grid >
            {
              Projects.map(project => {
                return (<PorjectComponent key={project.id} project={project} />)
              })
            }
          </Grid>
        </Center>
        <BigTitle text="PROYECTS" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default ProjectsPage;
