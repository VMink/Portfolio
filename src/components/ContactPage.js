import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import img from '../assets/Images/20201008-199WaterSt-2_v1-scaled.jpg'
import BigTitle from '../subComponents/BigTitle';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import { IoMdMailOpen } from 'react-icons/io'
import { AiFillClockCircle, AiFillFlag } from 'react-icons/ai'
import Btn from '../subComponents/Button';
import emailjs from '@emailjs/browser';

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;

  @media all and (max-width: 886px) {
    height: 150vh;
  }
`

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: 100%;
  position: relative;
`

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

const Form = styled.div`
  border-radius: 50px;
  background: ${props => props.theme.body};
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
  width: 50vw;
  height: auto;
  min-height: 60vh;
  padding-bottom: 2rem;
  position: absolute;
  left: 25%;
  top: 20%;
  font-family: 'Ubuntu Mono',monospace;
  font-style: italic;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  form{
    width: 100%;
    max-width: 600px;
    padding: 20px;
  }

  @media all and (max-width: 886px) {
    left: 20%;
    width: 55vw;
    top: 13%;
  }

  @media all and (max-width: 620px) {
    left: 10%;
    width: 80vw;
    top: 13%;
  }

  @media all and (max-width: 450px) {
    left: 0%;
    width: 100vw;
    top: 13%;
  }
`

const LeftBox = styled.div`
  width: 15vw;
  height: 45vh;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  border-radius: 25px;
  z-index: 3;
  right: -2%;
  top: -2%;
  position: absolute;
  font-family: 'Ubuntu Mono',monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 1rem;
  padding: 40px;

  p{
    margin-top: 30px;
  }
  &>:first-child{
    margin-top: 0;
  }

  @media all and (max-width: 886px) {
    display: none;
  }
`

const InputSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 0 0;

  @media all and (max-width: 886px) {
    flex-direction: column ;
  }
`

const Input = styled.div`
  display: flex;
  flex-direction: column; 
  margin: 20px 20px 0 20px;
  width: 100%;

  @media all and (max-width: 886px) {
    margin: 20px 0;
  }

  input, select{
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    font-size: 16px;
    outline: none;
    resize: none;
    padding: 0 0 5px 0;
    width: 100%;
  }

  p{
    color: red;
  }


  textarea{
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    font-size: 16px;
    outline: none;
    resize: none;
    padding: 0 0 5px 0;
    width: 100%;
    min-height: 100px;
  }

  label{
    font-size: 16px;
    color: #666;
    margin-bottom: 5px;
  }

  span{
    position: absolute; 
    font-size: 16px;
    pointer-events: none;
    transition: 0.5s;
    color: #666;
    transform: translateY(-16px);

  }
`

const ProjectsPage = () => {

  const form = useRef();

  const initialValues = {servicio: "",demo: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value})
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmit(true)
    emailjs.sendForm('service_66egqw9', 'template_zspcr68', form.current, 'user_DmV7hf6932z2Yq7Aqrjy7')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
    console.log(isSubmit)
  }

  return (

    <MainContainer variants={container} initial='hidden' animate='show'>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <Form>
          {!isSubmit ?<form ref={form} onSubmit={sendEmail}>
            <InputSection className='nombre'>
              <Input >
              <span>Name</span>
              <input type="text" name="nombre" required />
              </Input>
              <Input >
                <input type="text" name="apellido" required />
                <span>Lastname</span>
              </Input>
            </InputSection>
            <InputSection className='mail'>
              <Input>
                <input type='email' name='email' required  />
                <span>E-mail</span> 
              </Input>
              <Input>
                <input type='tel' name='telefono' required  />
                <span>Telephone</span>
              </Input>
            </InputSection>
            <InputSection>
              <Input>
                <label>Service</label>
                  <select name="servicio" value={formValues.servicio} onChange={handleChange} required >
                    <option value=""></option>
                    <option value="Desarrollo_Web">Web Development</option>
                    <option value="ciberseguridad">Cibersecurity</option>
                    <option value="Desarrollo_de_Aplicaciones">Mobile App Development</option>
                    <option value="Desarrollo_de_Software">Desktop Development</option>
                    <option value="Demo">Request a Demo</option>
                  </select>
              </Input>
            </InputSection>
            {formValues.servicio === 'Demo' ? (
              <InputSection>
                <Input>
                  <label>Demo</label>
                  <select name="demo" >
                    <option value=""></option>
                    <option value="Mercado-App">Mercado App</option>
                  </select>
                </Input>
            </InputSection>
            ) : ''}
            <InputSection>
              <Input>
                <textarea name="mensaje" required ></textarea>
                <span>Pls tell me your idea</span>
              </Input>
            </InputSection>
            <InputSection>
             <Btn />
            </InputSection> 
          </form> : 'Message submited!'}
        </Form>
        <LeftBox>
          <p> <BsFillTelephoneOutboundFill style={{marginRight: '20px'}}/>+52 55 4337 2079</p>
          <p> <IoMdMailOpen style={{marginRight: '20px'}}/>eduluquidev@gmail.com</p>
          <p> <AiFillClockCircle style={{marginRight: '20px'}}/>Lunes - Viernes de 9:00am - 6:00</p>
          <p> <AiFillFlag style={{marginRight: '20px'}}/>Naucalpan, Estado de México, México</p>
        </LeftBox>
        <BigTitle text="CONTACT" top='5rem' left={window.innerWidth > 798 ? "5rem" : "0.5rem"} />
      </Container>
    </MainContainer>
  );
};

export default ProjectsPage;
