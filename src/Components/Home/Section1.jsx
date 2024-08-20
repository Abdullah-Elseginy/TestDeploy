import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { MyThemeContext } from "../../Context/ThemeContext";
const Section1 = () => {
  const { mode } = useContext(MyThemeContext);
  return (
    <>
      <Box sx={{ height: "100vh" }} flexWrap={"wrap"}>
        <Stack
          direction={"column"}
          alignItems={"center"}
          flexWrap={"wrap"}
          sx={{
            height: "100vh",
            // color: "#fff",
            // marginTop: -10,
            // paddingRight: 10,
            justifyContent: "center",
            alignItems: "end",
          }}
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/19488937/pexels-photo-19488937/free-photo-of-crowd-of-protesters-with-palestinian-flags.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
            backgroundSize: "cover",
          }}
        >
          <Stack
            sx={{
              backgroundColor: "#000",
              borderRadius: "10px",
              padding: 2,
              "&:hover": {
                backgroundColor: "#fff",
                borderRadius: "10px",
                color: "#000",
                transform: "scale(1.01)",
                transition: "0.8s",
              },
            }}
            flexWrap={"wrap"}
            mr={2}
          >
            <Typography
              component={"h2"}
              variant="h3"
              color={mode === "dark" ? "#0f0" : "#f0f"}
            >
              Hello I'm Palastine
            </Typography>
            <Typography
              component={"p"}
              variant="p"
              textAlign={"center"}
              color={mode === "dark" ? "#0f0" : "#f0f"}
            >
              officially the State of Palestine, is a country in the southern
              Levant region of West Asia.
              <br /> Quisque vel nunc eget arcu maximus{" "}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Section1;
