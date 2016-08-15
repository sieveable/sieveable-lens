import React from 'react';
import { Link } from 'react-router';

const DevComponent = function devComponent() {
  const param = 'retrofit';
  return (
    <div>
      <h1>Dev Page</h1>
      <Link to={`/ui/${param}`}>Retrofit</Link>
    </div>
  );
};

export default DevComponent;
