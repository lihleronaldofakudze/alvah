import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// services
import sanity, { urlFor } from "../services/sanity";

const HomePage = () => {
  // var
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  // state
  const [clothing, setClothing] = useState([]);

  // onload
  useEffect(() => {
    sanity
      .fetch(`*[_type == "clothing"][0...4]`)
      .then((data) => setClothing(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <Typography variant="h3" align="center" py={5}>
        Sustainable. Beautiful. Ethical.
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 3 }}
      >
        <Button variant="contained" sx={{ borderRadius: 0 }}>
          Shop Now
        </Button>
      </Stack>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Box
            width="100%"
            height={400}
            sx={{
              backgroundImage: `url('https://images.pexels.com/photos/6851552/pexels-photo-6851552.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
          <Typography
            p={2}
            variant="h6"
            align="center"
            sx={{
              textDecoration: "underline",
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
            onClick={() => navigate("/women")}
          >
            Shop Women &gt;
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            width="100%"
            height={400}
            sx={{
              backgroundImage: `url('https://images.pexels.com/photos/6311687/pexels-photo-6311687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
          <Typography
            p={2}
            variant="h6"
            align="center"
            sx={{
              textDecoration: "underline",
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
            onClick={() => navigate("/men")}
          >
            Shop Men &gt;
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h4" color="secondary" align="center" py={5}>
        New Arrivals
      </Typography>
      <Container disableGutters={isMobile ? false : true} sx={{ pb: 5 }}>
        <Grid container spacing={4}>
          {clothing?.map((cloth, index) => (
            <Grid item md={3} xs={12} key={index} sx={{ cursor: "pointer" }}>
              <Box
                width="100%"
                height={400}
                sx={{
                  backgroundImage: `url(${urlFor(cloth.images[0])})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Box>
              <Typography variant="body1" py={1}>
                {cloth.name}
              </Typography>
              <Typography color="primary">E{cloth.price}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
