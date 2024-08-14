import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { hover } from "../Home/Home";
const Login = () => {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "#f0f0f0",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
        direction={"column"}
      >
        <Typography
          component={"h1"}
          variant="h2"
          sx={{
            fontWeight: "50",
            marginBottom: "80px",
          }}
        >
          Login Now
        </Typography>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          alignSelf={"center"}
          style={{
            backgroundColor: "#f0f0f0",
            width: "500px",
          }}
          spacing={5}
        >
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            fullWidth={true}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            fullWidth={true}
          />
          <Button variant="contained" href="/" sx={{ ...hover }}>
            Login
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
