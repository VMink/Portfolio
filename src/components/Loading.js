import React from 'react'
import styled from 'styled-components'

const LoadingTitle = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loading = () => {
  return (
    <LoadingTitle>
      <h1>
        Loading...
      </h1>
    </LoadingTitle>
  )
}

export default Loading