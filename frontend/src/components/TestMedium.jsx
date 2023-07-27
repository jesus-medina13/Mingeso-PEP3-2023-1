import React, { Component } from "react";
import styled from "styled-components";
import Question from "./Question";
import Navbar from "./Navbar";
import background from '../images/background3.jpg';
import { Link } from 'react-router-dom';
import { Grid, Button, Typography, useTheme, IconButton, Autocomplete } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

class TestMedium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8090/medium")
      .then((response) => response.json())
      .then((data) => this.setState({ datas: data }));
  }


  render() {
    return (
      <HomeStyle>
        <Navbar />
        <div className="text-center">
          <h1 className="asd">
            <b>
              <u>Prueba: Modo Básico </u>
            </b>
          </h1>
          {this.state.datas.map((datas) => (
            <Question
              id={datas.id}
              enunciado={datas.question}
              code={datas.code}
              resp={datas.answer}
            ></Question>
          ))}
        </div>
      </HomeStyle>
    );
  }
}

export default TestMedium;


const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-image: url(${background});
    background-size: cover; // Ajusta el tamaño de la imagen para que cubra todo el fondo.
    background-repeat: no-repeat; // Evita que la imagen se repita.
  }
}
.asd{
    padding-top: 10px;
    padding-bottom: 30px;

}

`