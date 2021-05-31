import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import PersonalProjects from './components/PersonalProjects';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#86b25f',
      main: '#689f38',
      dark: '#486f27',
      contrastText: '#fff'
    },
    secondary: {
      light: '#df6843',
      main: '#d84315',
      dark: '#972e0e',
      contrastText: '#fff'
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Header />
        <Skills />
        <Experience />
        <PersonalProjects />
        <Education />
        <AboutMe />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
