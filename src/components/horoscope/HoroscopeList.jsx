import React from 'react';

const HoroscopeList = ({ onSignChange }) => {
  const signs = [
    { label: 'Aries', value: 'aries' },
    { label: 'Taurus', value: 'taurus' },
    { label: 'Gemini', value: 'gemini' },
    { label: 'Cancer', value: 'cancer' },
    { label: 'Leo', value: 'leo' },
    { label: 'Virgo', value: 'virgo' },
    { label: 'Libra', value: 'libra' },
    { label: 'Scorpio', value: 'scorpio' },
    { label: 'Sagittarius', value: 'sagittarius' },
    { label: 'Capricorn', value: 'capricorn' },
    { label: 'Aquarius', value: 'aquarius' },
    { label: 'Pisces', value: 'pisces' },
  ];

  return (
    <div>
      <label htmlFor="sign">Select your sign: </label>
      <select id="sign" onChange={(event) => onSignChange(event.target.value)}>
        {signs.map((sign) => (
          <option key={sign.value} value={sign.value}>
            {sign.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HoroscopeList;
