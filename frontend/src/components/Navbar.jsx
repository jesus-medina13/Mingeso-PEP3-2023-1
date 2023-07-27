import React, { useState } from "react";
import Cronometro from "./Cronometro";
import { Grid, Button, Typography, styled, useTheme, IconButton, Autocomplete } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import '../App.css';
import '../fonts/TitilliumWeb-Regular.ttf';
import '../fonts/TitilliumWeb-Bold.ttf';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <NavStyle position="static">
            <ToolbarWrapper>
                <NavbarTitle variant="h4">
                    Easy Coding
                </NavbarTitle>
                <div class="clock">
                    <TimerRoundedIcon fontSize="medium" color="primary"/>
                    <Cronometro />
                    <h1></h1>
                    
                </div>
                <Link to="/">
                    <Button
                        color="primary"
                        startIcon={<ArrowBackRoundedIcon />}
                    >
                        Volver
                    </Button>
                </Link>
            </ToolbarWrapper>
        </NavStyle>
    </>
  );
}

export default Navbar;


const NavStyle = styled(AppBar)(({ theme }) => ({
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