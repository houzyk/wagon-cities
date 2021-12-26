import React from 'react';

function City ({ city }) {
  return (
    <div className="list-group-item">
      <h3>{city.name}</h3>
    </div>
  );
}

export default City;
