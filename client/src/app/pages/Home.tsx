import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import ParticlesComponent from "../components/particles";
import { TypeAnimation } from "react-type-animation";

interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setSelectedIndex }: Props) {
  const { pathname } = useLocation();
  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

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
      <Box sx={{ zIndex: -1 }}>
        <ParticlesComponent />
      </Box>

      
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Box textAlign="center">
          <Typography variant="h3">{process.env.REACT_APP_NAME}</Typography>
        </Box>
{/*         <Box textAlign="left" width="30rem" marginLeft="30%">
          <TypeAnimation
            sequence={[
              "Empower development!",
              5000,
              "With the right tools",
              5000,
              "For the task at hand!",
              5000,
            ]}
            speed={30}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
        </Box> */}
      </Grid>
    </Grid>
  );
}