import React from 'react';

function City ({ city, updateCity }) {
  const handleClick = () => updateCity(city);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="list-group-item"
      onClick={handleClick}
    >
      <h3>{city.name}</h3>
    </div>
  );
}

export default City;
