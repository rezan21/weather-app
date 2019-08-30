import React from 'react';

const Titles = () => {
  return (
    <div>
      <h1 className='title-container__title'>Weather App</h1>
      <h2 className='title-container__subtitle'>
        Find out temperature, conditions and more...
      </h2>
      <h3
        className='title-container__subtitle'
        style={{ textDecoration: 'underline' }}
      >
        An app made with react.js library
      </h3>
    </div>
  );
};

export default Titles;
