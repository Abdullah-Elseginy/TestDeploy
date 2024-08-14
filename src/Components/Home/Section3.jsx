import { Card, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import { hover } from "./Home";

const Section3 = () => {
  return (
    <Stack
      direction={"row"}
      pt={4}
      pb={4}
      sx={{
        // backgroundColor: "#E5E5E5",
        ml: { xs: 2, sm: 3, md: 6, lg: 8, xl: 15 },
        mr: { xs: 2, sm: 3, md: 6, lg: 8, xl: 15 },
        // width:"100%"
      }}
      flexWrap={"wrap"}
      alignItems={"center"}
      rowGap={2}
    >
      <Stack direction={"column"} flexWrap={"wrap"} sx={{ maxWidth: 500 }}>
        <Card>
          <CardMedia
            sx={{
              ...hover,
            }}
            component="img"
            height="330"
            width="800"
            image="https://images.pexels.com/photos/19488937/pexels-photo-19488937/free-photo-of-crowd-of-protesters-with-palestinian-flags.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Paella dish"
          />
        </Card>

        <Stack
          direction={"row"}
          mt={2}
          justifyContent={"space-evenly"}
          sx={{ width: "100%" }}
          flexWrap={"wrap"}
        >
          <FacebookOutlinedIcon sx={{ fontSize: 40, ...hover }} />
          <InstagramIcon sx={{ fontSize: 40, ...hover }} />
          <GoogleIcon sx={{ fontSize: 40, ...hover }} />
          <InstagramIcon sx={{ fontSize: 40, ...hover }} />
        </Stack>
      </Stack>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        sx={{
          width: { xs: 400, sm: 450, md: 550, lg: 650, xl: 700 },
          //   backgroundColor: "#0ff",
          padding: 5,
        }}
      >
        <Typography component={"h1"} variant="h4" sx={{ fontWeight: "500" }}>
          a little more about Kalay
        </Typography>
        <Typography variant="p">
          <br></br>
          Graphic Designer, Creative Photographer & Front-end Developer
          <br />
          <br />
          <br />
        </Typography>
        <Typography variant="p">
          Praesent eleifend tristique nisl, nec finibus urna posuere nec.
          Quisque vel nunc eget arcu maximus facilisis non eu nisi. Aliquam
          ullamcorper est a nisl imperdiet luctus.
          <br />
          <br />
        </Typography>
        <Typography variant="p">
          Sed sed convallis odio. Nulla scelerisque libero efficitur diam
          fermentum, quis tincidunt urna placerat. Maecenas sed tortor sed nisi
          semper ultricies. Nulla ornare metus in massa mollis scelerisque.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Section3;
