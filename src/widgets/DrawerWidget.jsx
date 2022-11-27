import React, { useState } from "react";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { CgMenuRightAlt } from "react-icons/cg";
import { menu } from "../constants";
import { useNavigate } from "react-router-dom";

const DrawerWidget = () => {
  //var
  const navigate = useNavigate();
  const theme = useTheme();
  // state
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <CgMenuRightAlt
        style={{ fontSize: 35, cursor: "pointer" }}
        onClick={() => setDrawer(true)}
      />
      <Drawer
        variant="temporary"
        anchor="right"
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        <Box sx={{ width: 250, minHeight: "100vh", bgcolor: "#FCF6F2" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="secondary"
            onClick={() => {
              navigate("/");
              setDrawer(false);
            }}
            align="center"
            py={5}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            ALVAH
          </Typography>
          <List>
            {menu.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                    setDrawer(false);
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    align="center"
                    sx={{
                      fontSize: 40,
                      color: theme.palette.secondary.main,
                      fontWeight: "bold",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerWidget;
