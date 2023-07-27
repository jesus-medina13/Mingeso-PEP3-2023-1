import React from 'react';
import { Grid, Button, Typography, styled, useTheme, IconButton } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import background from '../images/background3.jpg';
import '../App.css';
import '../fonts/TitilliumWeb-Regular.ttf';
import '../fonts/TitilliumWeb-Bold.ttf';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Link } from 'react-router-dom';


const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "#FFFFFF",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '500px',
  padding: '16px',
  borderRadius: '8px',
  '& .MuiTypography-root': {
    marginBottom: '8px',
  },
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
  '&:focus': {
    outline: 'none',
  },
}));

const Container = styled(Grid)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(5),
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
}));

const ButtonWrapper = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

const ButtonContentWrapper = styled('div')(({ theme }) => ({
  textAlign: 'center',
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

const HomeComponent = () => {
  const theme = useTheme();
  localStorage.setItem("puntaje", 0);
  localStorage.setItem("restantes", 4);
  return (
    <React.Fragment>
      <Navbar position="static">
        <ToolbarWrapper>
          <NavbarTitle variant="h4">
            Easy Coding
          </NavbarTitle>
          <Link to="create-question">
            <Button
              color="primary"
              endIcon={<AddCircleRoundedIcon />}
            >
              Agregar Pregunta
            </Button>
          </Link>
        </ToolbarWrapper>
      </Navbar>
      <Container theme={theme} container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
        <Link to="test-easy">
          <ButtonWrapper theme={theme}>
            <CustomButton component="div">
              <ButtonContentWrapper>
                <Typography variant="h5" component="h2">
                  Prueba Nivel Básico
                </Typography>
                <Typography color="lightgrey">
                  Lo mejor para empezar...
                </Typography>
              </ButtonContentWrapper>
            </CustomButton>
          </ButtonWrapper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Link to="test-medium">
          <ButtonWrapper theme={theme}>
            <CustomButton component="div">
              <ButtonContentWrapper>
                <Typography variant="h5" component="h2">
                  Prueba Nivel Intermedio
                </Typography>
                <Typography color="lightgrey">
                    ¿Ya tienes experiencia?
                </Typography>
              </ButtonContentWrapper>
            </CustomButton>
          </ButtonWrapper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Link to="test-hard">
          <ButtonWrapper theme={theme}>
            <CustomButton component="div">
              <ButtonContentWrapper>
                <Typography variant="h5" component="h2">
                  Prueba Nivel Avanzado
                </Typography>
                <Typography color="lightgrey">
                    ¿Estás listo para un desafío?
                </Typography>
              </ButtonContentWrapper>
            </CustomButton>
          </ButtonWrapper>
          </Link>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default HomeComponent;
