import { Card, CardMedia, Stack } from "@mui/material";
import React from "react";
import { hover } from "./Home";
const Section4 = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2020/06/14/03/09/women-5296386_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/06/18/21/37/bali-8838762_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/24/19/06/bird-8785666_1280.jpg",
  ];
  return (
    <Stack
      pt={4}
      pb={4}
      direction={"column"}
      alignItems={"center"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      gap={2}
      flexWrap={"wrap"}
      sx={{
        // backgroundColor: "#F8ECF1",
        height: 500,
        ml: { xs: 2, sm: 3, md: 6, lg: 8, xl: 15 },
        mr: { xs: 2, sm: 3, md: 6, lg: 8, xl: 15 },
      }}
    >
      {images.map((item, index) => (
        <>
          <Card className="scrollAnimated">
            <CardMedia
              sx={{ height: "25rem", width: 350, ...hover }}
              image={item}
              title="green iguana"
            />
          </Card>
        </>
      ))}
    </Stack>
  );
};

export default Section4;
