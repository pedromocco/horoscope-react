export const fetchHoroscope = async (sign) => {
  return await fetch(
    `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/today/`
  ).then((response) => response.json());
};
