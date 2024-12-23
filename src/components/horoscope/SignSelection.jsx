import React from "react";
import { useNavigate } from "react-router-dom";
import HoroscopeList from "./HoroscopeList";
import { Container } from "@chakra-ui/react";

const SignSelection = () => {
  const navigate = useNavigate();

  const handleSignChange = (sign) => {
    navigate(`/horoscope/${sign}`);
  };

  return (
    <>
      <Container as="section" centerContent >
        <HoroscopeList onSignChange={handleSignChange} />
      </Container>
    </>
  );
};

export default SignSelection;
