import React from 'react';
import City from "./city";

function CityList ({ cities }) {
  return (
    <div className="cities">
      {cities.map(city => <City key={city.name} city={city} />)}
    </div>
  );
}

export default CityList;
