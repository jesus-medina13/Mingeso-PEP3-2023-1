import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import './fonts/TitilliumWeb-Regular.ttf';
import './fonts/TitilliumWeb-Bold.ttf';
import CreateQuestion from './components/CreateQuestion';
import TestEasy from './components/TestEasy';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#003A5A',
    },
    tertiary: {
      main: '#3E5C76',
    },
  },
  typography: {
    fontFamily: ['Bold'],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/create-question" element={<CreateQuestion />} />
          <Route path="/test-easy" element={<TestEasy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
