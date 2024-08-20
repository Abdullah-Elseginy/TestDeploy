import {
  Box,
  Button,
  CssBaseline,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { hover } from "../Home/Home";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <CssBaseline />
      <Stack
        sx={{
          // backgroundColor: "#f0f0f0",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
        direction={"column"}
      >
        <Stack
          sx={{
            backgroundColor: "#fofofo",
            boxShadow: "2px 2px 10px #ccc",

            p: 2,
          }}
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
              // backgroundColor: "#f0f0f0",
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
              id="standard-password-input"
              label="Password"
              variant="standard"
              type={showPassword ? "text" : "password"}
              fullWidth={true}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            /> */}
            <Button
              variant="contained"
              href="/"
              sx={{ backgroundColor: "#7682CC", ...hover }}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
