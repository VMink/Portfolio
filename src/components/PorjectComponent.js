import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Box = styled(motion(NavLink))`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color:  ${props => props.theme.text};
  border: 2px solid ${props => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }

  @media all and (max-width: 1158px) {
    width: calc(15rem + 15vw);
  }

  @media all and (max-width: 600px) {
    width: calc(10rem + 15vw);
  }
`

const Image = styled.div`
  background-image: ${props => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover &{
    border: 1px solid ${props => props.theme.body};
  }
`

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: 'Karla',sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${props => props.theme.text};

  ${Box}:hover &{
    border-bottom: 1px solid ${props => props.theme.body};
  }
`

const Description = styled.div`
  padding: 0.5rem 0;
`

const Tags = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.span`
  margin-right: 0.5rem;
  padding: 0.2rem 1rem;
  border-radius: 25px;
  background-color: ${props => `rgba(${props.theme.textRgba},0.6)`};
  color: ${props => props.theme.body};
  margin-top: 5px;

  ${Box}:hover &{
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
    color: ${props => props.theme.text};
  }
`

const Item = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

const PorjectComponent = (props) => {
  const {title, description, tags, img, link} = props.project;

  return (
      <Box target="_blank" to={link} variants={Item}>
        <Image img={img} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Tags > 
          {
            tags.map((t,id) => {
              return <Tag key={id}>#{t}</Tag>
            })
          }
        </Tags>
      </Box>
  )
}

export default PorjectComponent