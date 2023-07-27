import React from "react";
import { Grid, Typography, styled, useTheme, Button } from '@mui/material';
import background from '../images/background3.jpg';
import { Link } from 'react-router-dom';

const Container = styled(Grid)(({ theme }) => ({
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(5),
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
}));

const PuntajeTiempoWrapper = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(2),
}));

const Puntaje = styled(Typography)(({ theme }) => ({
    fontSize: '36px',
    color: '#FFFFFF', // Color blanco para la fuente
}));

const Tiempo = styled(Typography)(({ theme }) => ({
    fontSize: '36px',
    color: '#FFFFFF', // Color blanco para la fuente
}));

const BotonVolver = styled(Button)(({ theme }) => ({
    width: '100%', // Ancho al 100% del contenedor
    marginTop: theme.spacing(2),
}));

const TestResults = () => {
    const theme = useTheme();

    // Obtener el puntaje y el tiempo almacenados en localStorage
    const puntaje = localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
    const segundos = localStorage.getItem("segundos") ? localStorage.getItem("segundos") : 0
    const minutos = localStorage.getItem("minutos") ? localStorage.getItem("minutos") : 0
    const horas = localStorage.getItem("horas") ? localStorage.getItem("horas") : 0

    return (
        <React.Fragment>
            <Container theme={theme} container justifyContent="center" alignItems="center">
                <Grid item xs={8}>
                    <Typography variant="h5" color="primary">¡FELICIDADES!, HAS FINALIZADO Y ESTOS SON TUS RESULTADOS:</Typography>
                </Grid>

                {/* Mostrar el puntaje y el tiempo */}
                <PuntajeTiempoWrapper item xs={8}>
                    <Puntaje variant="h6">Calificacion: {puntaje}</Puntaje>
                    <Tiempo variant="h6">Tiempo: {horas}:{minutos}:{segundos} </Tiempo>
                </PuntajeTiempoWrapper>

                {/* Botón para volver al menú principal */}
                <Grid item xs={8}>
                <Link to="/">
                    <BotonVolver variant="contained" color="primary">
                        VOLVER A COMENZAR...
                    </BotonVolver>
                </Link>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default TestResults;


