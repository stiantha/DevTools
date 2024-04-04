import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import ParticlesComponent from "../components/particles"; 
import { ReactComponent as DevIcon } from '../../static/devicons.svg';
/* import { TypeAnimation } from "react-type-animation";  */

interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setSelectedIndex }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME!;
  }, [pathname]);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: `calc(100vh - 20px - 33px)`, position: "relative" }}
    >
      <Box sx={{ zIndex: -1 }} className="particles-animation">
        <ParticlesComponent />
      </Box> 
  
      <Box display="flex" justifyContent="center" alignItems="center">
        <DevIcon style={{ width: '68%'}} />
      </Box>
    </Grid>
  );
}