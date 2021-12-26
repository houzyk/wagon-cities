import React from 'react';

function ActiveCity ({ activeCity }) {
  return (
    <div className="active-city">
      <h3>{activeCity.name}</h3>
      <p>{activeCity.address}</p>
      <img src={`https://kitt.lewagon.com/placeholder/cities/${activeCity.slug}`} alt={activeCity.slug} />
    </div>
  );
}

export default ActiveCity;
