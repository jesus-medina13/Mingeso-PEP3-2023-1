import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { CodeBlock, dracula } from "react-code-blocks";
import { FormLabel, TextField, Button, Typography, useTheme } from '@mui/material';
import add_to_puntaje from "./Puntaje"; // Importar la función add_to_puntaje
import Form from "react-bootstrap/Form";


export default function Question({ id, enunciado, code, resp }) {
  const initialState = {
    answer: "",
  };

  const [puntaje, setPuntaje] = useState(
    localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
  );

  const [trueAnswer, setTrueAnswer] = useState(-1);

  const [input, setInput] = useState(initialState);

  const changeAnswerHandler = (event) => {
    setInput({ ...input, answer: event.target.value });
  };

  const compararRespuestas = (e) => {
    e.preventDefault();
    if (input.answer == resp) {
      setPuntaje(add_to_puntaje(7));
      setTrueAnswer(1);
    } else {
      setPuntaje(add_to_puntaje(1));
      setTrueAnswer(0);
    }

    if (localStorage.getItem("restantes") == 0) {
      window.location.href = "/test-results";
    }
  };

  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomeStyle>
        <h3 className="text-enunciado">
          <b>
            Pregunta {id}: {enunciado}
          </b>
        </h3>
        <div className="code-box">
          <CodeBlock
            text={code}
            language="python"
            theme={dracula}
            codeBlock={{ lineNumbers: true }}
            align="left"
          />
        </div>
        <div className="respuesta">
          <Form onSubmit={compararRespuestas}>
            <Form.Group controlId="respuesta" style={{ marginBottom: "40px" }}>
              <Form.Label>
                <h3 style={{ color: "white" }}>Ingrese su respuesta aquí:</h3>
              </Form.Label>
              <br />
              <Form.Control
                type="respuesta"
                placeholder=""
                value={input.answer}
                onChange={changeAnswerHandler}
                className="form-control" // Agregar la clase form-control
                style={{
                  border: "2px solid white", // Contorno blanco
                  borderRadius: "5px", // Bordes redondeados
                  background: "transparent", // Fondo transparente
                  color: "white", // Color del texto
                  width: "100%", // Ajustar al ancho del code-box
                  height: "40px",
                }}
              />
            </Form.Group>
            {trueAnswer === 1 ? (
              <h3>¡Respuesta Correcta. Obtienes 7 puntos!</h3>
            ) : trueAnswer === 0 ? (
              <h3>Respuesta Incorrecta. Obtienes 1 punto.</h3>
            ) : (
              <button type="submit" variant="primary">
                Verificar Respuesta
              </button>
            )}
          </Form>
        </div>
        <hr></hr>
      </HomeStyle>
    </ThemeProvider>
  );
}

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& label': {
    color: theme.palette.primary.main,
  },
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& input': {
    color: '#FFFFFF', // Color blanco para el texto
  },
}));

const GlobalStyle = createGlobalStyle`
body { 
    background-color: #154360;
}
`;

const HomeStyle = styled.nav`
.text-enunciado {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.code-box {
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-bottom: 20px;
}
.respuesta {
  justify-content: center;
  padding-bottom: 50px;
}

button {
  font-weight: 700;
  color: #1b3039;
  padding: 9px 25px;
  background: #7dcea0;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
button:hover {
  background-color: #e2f1f8;
  color: #ffbc0e;
  transform: scale(1.1);
}
`;
