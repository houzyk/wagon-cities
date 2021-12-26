import React from 'react';
import City from "./city";

function CityList ({ cities, handleClick }) {
  return (
    <div className="cities">
      {cities.map(city =>
        <City key={city.name} city={city} handleClick={handleClick} />
      )}
    </div>
  );
}

export default CityList;
