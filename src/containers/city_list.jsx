import React from 'react';
import City from "./city";

function CityList ({ cities, updateCity }) {
  return (
    <div className="cities">
      {cities.map(city =>
        <City key={city.name} city={city} updateCity={updateCity} />
      )}
    </div>
  );
}

export default CityList;
