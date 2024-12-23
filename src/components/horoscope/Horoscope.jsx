import React, { useState } from "react";
import HoroscopeList from "./HoroscopeList";
import { fetchHoroscope } from "../../services/api";

const Horoscope = () => {
  const [sign, setSign] = useState("");
  const [horoscope, setHoroscope] = useState("");

  const handleSignChange = async (selectedSign) => {
    setSign(selectedSign);
    const data = await fetchHoroscope(selectedSign);
    setHoroscope(data);
  };

  return (
    <div>
      <h1>Consult your horoscope</h1>
      <br></br>
      <HoroscopeList onSignChange={handleSignChange} />
      <br></br>
      {sign}
      <br></br>
      {horoscope && <p>{horoscope.date}</p>}
      <br></br>
      {horoscope && <p>{horoscope.horoscope}</p>}
      <br></br>
      {horoscope && <p>Mood: {horoscope.meta.mood}</p>}
      <br></br>
      {horoscope && <p>Keywords: {horoscope.meta.keywords}</p>}
      <br></br>
      {horoscope && <p>Intensity: {horoscope.meta.intensity}</p>}
    </div>
  );
};

export default Horoscope;
