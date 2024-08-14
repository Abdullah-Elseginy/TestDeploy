import React from "react";
import Section2 from "./Section2";
import Section1 from "./Section1";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <>
      <Section1 />
      {/* <Stack direction={"column"} mr={15} ml={15}> */}
      {/* section 2*/}
      <Section2 />
      <Section3 />
      <Section4 />
      {/* </Stack> */}
    </>
  );
};

export const hover = {
  "&:hover": {
    backgroundColor: "#000",
    borderRadius: "10px",
    color: "#fff",
    transform: "scale(1.1)",
    transition: "1s",
    cursor: "pointer",
  },
};
export default Home;
