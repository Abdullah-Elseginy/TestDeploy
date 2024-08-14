import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import LayersIcon from "@mui/icons-material/Layers";
import { hover } from "./Home";
const Section2 = () => {
  const [data] = useState([
    <SentimentSatisfiedAltIcon sx={{ fontSize: 70, color: "#636FB1" }} />,
    <AddAPhotoIcon sx={{ fontSize: 70, color: "#636FB1" }} />,
    <EmojiObjectsIcon sx={{ fontSize: 70, color: "#636FB1" }} />,
    <LayersIcon sx={{ fontSize: 70, color: "#636FB1" }} />,
  ]);
  return (
    <Stack
      pt={4}
      pb={4}
      direction={"column"}
      alignItems={"center"}
      sx={{
        // backgroundColor: "#EEEAEC",
        ml: { xs: 2, sm: 3, md: 6, lg: 8, xl: 15 },
        mr: { xs: 2, sm: 3, md: 6, lg: 8, xl: 15 },
      }}
    >
      <Typography component={"h2"} variant="h3" mb={2}>
        What things i'm doning...
      </Typography>
      <Typography variant="p" textAlign={"center"} mb={5}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
        Debitis, deleniti.
      </Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        sx={{ width: "100%" }}
        gap={2}
      >
        {data.map((item, index) => (
          <>
            <Stack
              sx={{
                padding: 5,
                backgroundColor: "#ccc",
                //   paddingTop:12,
                //   paddingBottom:12,
                borderRadius: 2,
                width: 280,
                height: 350,
                "&hover": {
                  color: "#fff",
                },
                ...hover,
              }}
              direction={"column"}
              justifyContent={"center"}
              gap={3}
              alignItems={"center"}
            >
              {item}
              <Typography
                sx={{ fontWeight: 500 }}
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                Graphic designer
              </Typography>

              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. sit
                amet, consectetur adipisicing elit
              </Typography>
            </Stack>
          </>
        ))}
      </Stack>
    </Stack>
  );
};

export default Section2;
