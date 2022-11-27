import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";

// services
import sanity, { urlFor } from "../services/sanity";
const ShopAllPage = () => {
  // var
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // state
  const [clothing, setClothing] = useState([]);
  const [limit, setLimit] = useState(20);

  // onload
  useEffect(() => {
    sanity
      .fetch(`*[_type == "clothing"][0...${limit}]`)
      .then((data) => setClothing(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <Typography variant="h3" align="center" py={5}>
        Shop All
      </Typography>
      {console.log(clothing)}
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
          <Grid
            item
            container
            xs={12}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              variant="contained"
              sx={{ borderRadius: 0 }}
              onClick={() => setLimit(limit + 4)}
            >
              See More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ShopAllPage;
