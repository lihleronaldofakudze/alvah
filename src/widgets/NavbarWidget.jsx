import React from "react";

// material
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// icons
import { VscPackage } from "react-icons/vsc";
import { menu } from "../constants";
import { useNavigate } from "react-router-dom";
import DrawerWidget from "./DrawerWidget";

const NavbarWidget = () => {
  // var
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  return (
    <AppBar color="inherit" elevation={0} position="sticky">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={isMobile ? 9 : 6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="secondary"
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              ALVAH
            </Typography>
          </Grid>

          {isMobile ? (
            <Grid
              item
              container
              xs={3}
              alignItems="center"
              justifyContent="flex-end"
            >
              <DrawerWidget />
            </Grid>
          ) : (
            <Grid item container md={6} alignItems="center">
              <Grid item md={9}>
                {menu.map((item, index) => (
                  <Button
                    key={index}
                    color="secondary"
                    size="large"
                    onClick={() => navigate(item.path)}
                    sx={{
                      mr: 1.5,
                      textTransform: "none",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Grid>
              <Grid item md={3}>
                <Button
                  color="secondary"
                  sx={{
                    mr: 1.5,
                    textTransform: "none",
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                  onClick={() => navigate("/contact")}
                >
                  Contact
                </Button>
                <IconButton>
                  <VscPackage />
                </IconButton>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarWidget;
