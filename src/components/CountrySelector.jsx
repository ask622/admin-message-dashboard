import React from 'react';

const CountrySelector = ({ selectedCountry, onChange }) => (
  <select className="dropdown" value={selectedCountry} onChange={onChange}>
    <option value="in">🇮🇳 India</option>
    <option value="us">🇺🇸 USA</option>
    <option value="uk">🇬🇧 UK</option>
  </select>
);

export default CountrySelector;
