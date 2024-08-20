import React, { useState } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Stack, Typography } from "@mui/material";
import { hover } from "../Home/Home";
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          // backgroundColor: "#7682CC",
          height: "200px",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
          direction={"column"}
          spacing={3}
          flexWrap={"wrap"}
        >
          <Typography
            component={"h5"}
            variant="subtitle1"
            //  color={"#fff"}
          >
            hola our user you can viste us on social media
          </Typography>
          <Stack direction={"row"} spacing={2} flexWrap={"wrap"}>
            <FacebookOutlinedIcon
              sx={{
                fontSize: 45,
                // color: "#fff",
                ...hover,
              }}
            />
            <InstagramIcon
              sx={{
                fontSize: 45,
                // color: "#fff",
                ...hover,
              }}
            />
            <GoogleIcon
              sx={{
                fontSize: 45,
                // color: "#fff",
                ...hover,
              }}
            />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
