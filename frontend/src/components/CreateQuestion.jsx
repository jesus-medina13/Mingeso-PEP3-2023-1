import React from 'react';
import { Grid, Button, Typography, styled, useTheme, IconButton, Autocomplete } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import background from '../images/background3.jpg';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import '../App.css';
import '../fonts/TitilliumWeb-Regular.ttf';
import '../fonts/TitilliumWeb-Bold.ttf';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { langs } from '@uiw/codemirror-extensions-langs';
import PublishRoundedIcon from '@mui/icons-material/PublishRounded';


const Container = styled(Grid)(({ theme }) => ({
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(5),
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
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

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: "#FFFFFF",
    justifyContent: 'center',
    width: '100%',
    padding: '16px',
    borderRadius: '8px',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
    '&:focus': {
      outline: 'none',
    },
  }));



const CreateQuestion = () => {
    const theme = useTheme();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica para enviar los datos del formulario
        // a un servidor o realizar alguna acción con ellos.
    };

    const [code, setCode] = React.useState('print("Hello World")');


    return (
        <React.Fragment>
            <Navbar position="static">
                <ToolbarWrapper>
                    <NavbarTitle variant="h4">
                        Easy Coding
                    </NavbarTitle>
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
            <form onSubmit={handleSubmit}>
                <Container theme={theme} container justifyContent="center" alignItems="center">
                    <Grid item xs={8}>
                        <Typography variant="h5" color="primary">Formulario de Subida de Pregunta</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <CustomTextField
                            label="Ingrese el contenido de la pregunta"
                            variant="outlined"
                            fullWidth
                            required
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h5" color="primary">Ingrese el código</Typography>
                        <CodeMirror
                            value={code}
                            height="200px"
                            theme={dracula}
                            extensions={langs.python()}
                            onChange={(value) => {
                                setCode(value);
                            }}                            
                            fontSize={25}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <CustomTextField
                            label="Ingrese la respuesta"
                            variant="outlined"
                            fullWidth
                            required
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h5" color="primary">Ingrese el nivel de dificultad</Typography>
                        <Autocomplete 
                            options={["Fácil", "Medio", "Difícil"]}
                            renderInput={(params) => <TextField {...params} label="Nivel de dificultad" variant="outlined" color='primary'/>}
                            labelStyle={{ color: '#ff0000' }}
                            sx={{ input: { 
                                color: '#FFFFFF',
                                '.MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white !important',
                                  }, 
                                  '.MuiSvgIcon-root ': {
                                    fill: "white !important",
                                  }
                            
                                } 
                            }}

                        />
                    </Grid>
                    <Grid item xs={8} style={{ justifyContent: 'center'}}>
                        <CustomButton component="div" endIcon={<PublishRoundedIcon/>}>
                            <Typography variant="h6" color="primary">Enviar</Typography>
                        </CustomButton>
                    </Grid>
                </Container>
            </form>
        </React.Fragment>
    );
};

export default CreateQuestion;
