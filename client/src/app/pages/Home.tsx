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

      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Box textAlign="center">
          <Typography variant="h3"></Typography>
        </Box>
        <Box
          textAlign="left"
          style={{ whiteSpace: "pre-wrap" }}
        >
                <DevIcon style={{ width: '100%', height: '100%' }} />
{/*           <TypeAnimation
            sequence={[
              "Shift + Alt + A\n  Comment out code",
              10000,
              "Ctrl + B\n  Toggle sidebar visibility.",
              10000,
              "Ctrl + Shift + E\n  Toggle Explorer view.",
              10000,
              "Ctrl + Alt + F\n  Format document.",
              100000,
            ]}
            speed={30}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          /> */}
        </Box>
      </Grid>
    </Grid>
  );
}
