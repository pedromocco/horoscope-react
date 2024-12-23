import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const HoroscopeList = ({ onSignChange }) => {
  const signs = [
    { label: "Aries", value: "aries" },
    { label: "Taurus", value: "taurus" },
    { label: "Gemini", value: "gemini" },
    { label: "Cancer", value: "cancer" },
    { label: "Leo", value: "leo" },
    { label: "Virgo", value: "virgo" },
    { label: "Libra", value: "libra" },
    { label: "Scorpio", value: "scorpio" },
    { label: "Sagittarius", value: "sagittarius" },
    { label: "Capricorn", value: "capricorn" },
    { label: "Aquarius", value: "aquarius" },
    { label: "Pisces", value: "pisces" },
  ];

  return (
    <Box my={100} bg={"blackAlpha.300"} borderRadius={"2xl"}>
      <Heading size="2xl" textAlign="center" margin={7}>
        Select your sign:{" "}
      </Heading>
      <SimpleGrid columns={[1, 3]}>
        {signs.map((sign) => (
          <Button
            key={sign.value}
            onClick={() => onSignChange(sign.value)}
            fontWeight="extralight"
            variant="ghost"
            size="xl"
            margin={2}
          >
            {sign.label}
          </Button>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HoroscopeList;
