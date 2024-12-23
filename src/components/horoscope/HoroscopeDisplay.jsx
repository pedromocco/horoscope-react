import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchHoroscope } from "../../services/api";
import {
  Badge,
  Box,
  Button,
  Heading,
  Kbd,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";

const HoroscopeDisplay = () => {
  const { sign } = useParams();
  const [horoscope, setHoroscope] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHoroscope(sign);
      setHoroscope(data);
      console.log(data);
    };

    fetchData();
  }, [sign]);

  if(!horoscope){
    return <Spinner />
  }

  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "dd MMMM yyyy", { locale: enUS });
  };

  const getKeywords = (keywordsString) => {
    if (!keywordsString) {
      return [];
    }
    return keywordsString.split(",").map((keyword) => keyword.trim());
  };

  return (
    <>
      <Box padding={4} margin={2}  >
        {horoscope && (
          <Heading size="5xl" marginBottom={10} >
            {horoscope.sunsign}
          </Heading>
        )}
        {horoscope && (
          <Text fontWeight={"semibold"} marginBottom={2} >
            {" "}
            {formatDate(horoscope.date)}{" "}
          </Text>
        )}

        {horoscope && (
          <Text color="fg.muted" marginBottom={10}  fontWeight={"extralight"}  borderRadius={"2xl"} padding={0}>
            {horoscope.horoscope}
          </Text>
        )}

        <Text fontWeight={"semibold"}>Mood:</Text>
        {horoscope && (
          <Badge color="fg.muted" size={"lg"} colorPalette="blue" margin={3}>
            {" "}
            {horoscope.meta.mood}{" "}
          </Badge>
        )}

        <Text fontWeight={"semibold"}>Keywords:</Text>
        {horoscope &&
          getKeywords(horoscope.meta.keywords).map((keyword, index) => (
            <Kbd color="fg.muted" key={index} margin={3} colorPalette="purple">
              {keyword}
            </Kbd>
          ))}

        <Text fontWeight={"semibold"}>Intensity:</Text>
        {horoscope && (
          <Text color="fg.muted" margin={3} fontWeight="extralight">
            {" "}
            {horoscope.meta.intensity}{" "}
          </Text>
        )}

        <Button
          as={Link}
          to={"/"}
          size={"sm"}
          my={"50px"}
          colorScheme="teal"
          variant="ghost"
          fontWeight="bold"
        >
          Back
        </Button>
      </Box>
    </>
  );
};

export default HoroscopeDisplay;
