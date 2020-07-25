import React from "react";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { VideosMain } from "./videos/VideosMain";
import { OneVideoProvider } from "./videos/OneVideoContext";
import { ReactQueryDevtools } from "react-query-devtools";

export const App = () => {
  return (
    <>
      <ThemeProvider>
        <OneVideoProvider>
          <CSSReset />
          <Box height={"100vh"} mx="300px">
            <Header />
            <VideosMain />
            <Footer />
          </Box>
        </OneVideoProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen />
    </>
  );
};
