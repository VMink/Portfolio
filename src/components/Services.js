import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes'
import { Mobile, Desktop, Security, Web }from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import { NavLink } from 'react-router-dom';
import BigTitle from '../subComponents/BigTitle';


const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: auto;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;

  @media all and (max-width: 954px) {
    flex-direction: column;
  }

  @media all and (max-width: 798px) {
    margin-top: 50px;
  }
`

const Main = styled(NavLink)`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: 'Ubuntu Mono',monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10%;
  margin-top: 10%;
  cursor: pointer;
  text-decoration: none;

  &:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }

  @media all and (max-width: 954px) {
    width: 60vw;
  }

  @media all and (max-width: 798px) {
    width: 40vw;
  }
`
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  &>:first-child{
    margin-right: 1rem;
  }

  ${Main}:hover &{
    &>*{
      fill: ${props => props.theme.body};
    }
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover &{
    color: ${props => props.theme.body};
  }

  strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,p{
    margin-left: 2rem;
  }
`

const Skills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='lightTheme'/>
        <SocialIcons theme='lightTheme'/>
        <PowerButton />
        <ParticleComponent theme='light'/>
        <Main to="/contact">
          <Title>
            <Web width={40} height={40}/> Web Development
          </Title>
          <Description>
            I can create a full stack web service for you or your enterprise.
          </Description>
          <Description>
            <strong>Services</strong>
            <ul>
              <li>Landingpages</li>
              <li>E-commerce</li>
              <li>REST API's</li>
              <li>Databases</li>
            </ul>
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>HTML, CSS, Javascript, React, Node JS, Angular, Mongo DB, Firebase, SQL</p>
          </Description>
        </Main>
        <Main to="/contact">
          <Title>
            <Mobile width={40} height={40}/> Mobile Development
          </Title>
          <Description>
            The best way to complement your enterprise, store or service is with a Mobile App.
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Ionic 6</li>
              <li>React Native</li>
              <li>Android Studio</li>
              <li>XCode</li>
            </ul>
          </Description>
          <Description>
            <strong>Services</strong>
            <p>Hibrid Mobile Apps deployable in both Android and IOS</p>
          </Description>
        </Main>
      </Box>
      <Box>
        <Main to="/contact">
            <Title>
              <Desktop width={40} height={40}/> Desktop Development
            </Title>
            <Description>
              If you need to connect all your branch offices or a full enterprise system I can create that for you.
              </Description>
              <Description>
                <strong>Services</strong>
                <ul>
                  <li>System Management</li>
                  <li>Multi-branch</li>
                  <li>Servers</li>
                  <li>IT Solutions</li>
                  <li>Desktop development</li>
                </ul>
              </Description>
              <Description>
                <strong>Characteristics</strong>
                <p>Scalable, Self-managed, Strong, Secure</p>
              </Description>
        </Main>
        <Main to="/contact">
            <Title>
              <Security width={40} height={40}/> Hacking and Pentesting
            </Title>
            <Description>
              Make sure your system is safe and strong.
              Keep your data safe!
            </Description>
            <Description>
                <strong>Services</strong>
                <ul>
                  <li>Audits</li>
                  <li>Threats analysis</li>
                  <li>Pentesting</li>
                  <li>Consulting</li>
                  <li>Hardening</li>
                </ul>
            </Description>
            <Description>
                <strong>Tests</strong>
                <p>White Box, Gray Box and Black Box</p>
            </Description>
        </Main>
        <BigTitle text="SERVICES" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
