import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { care, company, connect } from "../constants";

const FooterWidget = () => {
  // var
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "#FCF6F2",
        }}
        py={8}
      >
        <Container disableGutters={isMobile ? false : true}>
          <Grid container spacing={4}>
            <Grid item md={3} xs={12}>
              <Typography variant="h5" gutterBottom>
                Customer Care
              </Typography>
              {care.map((item, index) => (
                <Typography
                  variant="body2"
                  key={index}
                  py={1}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Grid>
            <Grid item md={2} xs={12}>
              <Typography variant="h5" gutterBottom>
                Connect
              </Typography>
              {connect.map((item, index) => (
                <Typography
                  variant="body2"
                  key={index}
                  py={1}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {item.platform}
                </Typography>
              ))}
            </Grid>
            <Grid item md={3} xs={12}>
              <Typography variant="h5" gutterBottom>
                The Company
              </Typography>
              {company.map((item, index) => (
                <Typography
                  variant="body2"
                  key={index}
                  py={1}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Grid>
            <Grid item md={4} xs={12}>
              <Typography variant="h5" gutterBottom>
                Sign up for special offers
              </Typography>
              <Typography variant="body2" color="textSecondary" pt={1}>
                Enter your email here*
              </Typography>
              <TextField
                size="small"
                fullWidth
                color="primary"
                margin="normal"
              />
              <Button variant="contained" fullWidth sx={{ borderRadius: 0 }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          // bgcolor: "#5D6956",
          bgcolor: theme.palette.secondary.main,
        }}
      >
        <Typography color="white" p={2} align="center">
          @2023 by Alvah. Proudly Created By Clout Developers
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterWidget;
