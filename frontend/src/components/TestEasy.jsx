import React, { useState, useEffect } from 'react';
import { Grid, Typography, styled } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';

const Container = styled(Grid)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(5),
}));

const Navbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  fontFamily: 'Bold',
}));

const NavbarTitle = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
}));

const ToolbarWrapper = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: 'Bold',
}));

const TestEasy = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(0);

  // Obtener preguntas desde el backend (puedes modificar la URL según tu configuración)
  useEffect(() => {
    axios.get('/test-easy') // Por ejemplo, '/api/questions/easy' es la URL para obtener preguntas "easy"
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener las preguntas', error);
      });
  }, []);

  // Función para avanzar a la siguiente pregunta
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  // Función para registrar la respuesta del usuario y puntuarla
  const handleAnswer = (answer) => {
    // Puedes implementar la lógica para evaluar la respuesta y asignar la puntuación (7 o 1)
    // Aquí puedes enviar la respuesta al backend para almacenarla o procesarla
    console.log('Respuesta:', answer);
    handleNextQuestion(); // Avanzar a la siguiente pregunta
  };

  // Función para el cronómetro (actualiza el estado del timer cada segundo)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <React.Fragment>
      <Navbar position="static">
        <ToolbarWrapper>
          <NavbarTitle variant="h4">
            Easy Coding
          </NavbarTitle>
          <Typography variant="subtitle1">
            <TimerRoundedIcon fontSize="small" />
            Tiempo: {timer} segundos
          </Typography>
          <Link to="/">
            <Button
                color="primary"
                startIcon={<ArrowBackRoundedIcon />}
            >
                Volver
            </Button>
        </Link>
        </ToolbarWrapper>
      </Navbar>
      <Container container justifyContent="center" alignItems="center">
        {currentQuestion && (
          <Grid item xs={12}>
            <Typography variant="h5">Pregunta {currentQuestionIndex + 1}</Typography>
            <Typography variant="body1">{currentQuestion.content}</Typography>
            <button onClick={() => handleAnswer('Respuesta del usuario')}>Responder</button>
          </Grid>
        )}
      </Container>
    </React.Fragment>
  );
};

export default TestEasy;