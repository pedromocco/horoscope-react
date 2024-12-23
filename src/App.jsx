import React from "react";
import SignSelection from "./components/horoscope/SignSelection";
import HoroscopeDisplay from "./components/horoscope/HoroscopeDisplay";
import { Route, Routes } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Box
        data-state="open"
        _open={{
          animation: "fade-in 300ms ease-out",
        }}
        _closed={{
          animationName: "fade-out, scale-out",
          animationDuration: "120ms",
        }}
      >
        <Box w="100%" p="8" />
        <Heading size="6xl" marginLeft={5} animation={"fade-in"}>
          Horoscope
        </Heading>
        <Routes>
          <Route path="/" element={<SignSelection />} />
          <Route path="/horoscope/:sign" element={<HoroscopeDisplay />} />
          <Route path="*" element={<SignSelection />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
