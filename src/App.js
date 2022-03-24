import React, { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';
import GlobalStyle from './globalStyles';
import { AnimatePresence } from 'framer-motion';
import SoundBar from './subComponents/SoundBar';
import Loading from './components/Loading';

const Main = lazy(() => import('./components/Main')) 
const AboutPage = lazy(() => import('./components/AboutPage')) 
const ProjectsPage = lazy(() => import('./components/ProjectsPage')) 
const Services = lazy(() => import('./components/Services'))
const Work = lazy(() => import('./components/Work'))
const ContactPage = lazy(() => import('./components/ContactPage'));

function App() {
  
  const location = useLocation();
  
  return (
    <>
    
    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

    <AnimatePresence exitBeforeEnter>

    <SoundBar />

      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Suspense fallback={<Loading />}><Main /></Suspense>}></Route>
        <Route exact path='/about' element={<Suspense fallback={<Loading />}><AboutPage /></Suspense>}></Route>
        <Route exact path='/projects' element={<Suspense  fallback={<Loading />}><ProjectsPage /></Suspense>}></Route>
        <Route exact path='/services' element={<Suspense fallback={<Loading />}><Services /> </Suspense>}></Route>
        <Route exact path='/work' element={<Suspense fallback={<Loading />}><Work /></Suspense>}></Route>
        <Route exact path='/contact' element={<Suspense fallback={<Loading />}><ContactPage /></Suspense>}></Route>
      </Routes>

      </AnimatePresence>

    </ThemeProvider>

    </>
  );
}

export default App;
