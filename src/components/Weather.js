import React from 'react';

const Weather = props => (
  <div className='weather__info'>
    {/* 'logical and', used when there is no 'else' case. eg: if x then y ---> x && y */}
    {props.city && props.country && (
      <p className='weather__key'>
        Location:{' '}
        <span className='weather__value'>
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {
      <p className='weather__key'>
        {/* 'ternary operator' is the one with 'elsel case. eg: if x then y else z ----> x ? y : z  */}
        {props.temperature ? 'Temperature: {props.temperature}' : undefined}
      </p>
    }
    {props.humidity && (
      <p className='weather__key'>
        Humidity: <span className='weather__value'>{props.humidity}</span>
      </p>
    )}
    {props.description && (
      <p className='weather__key'>
        Description: <span className='weather__value'>{props.description}</span>
      </p>
    )}
    {props.error && (
      <p className='weather__key'>
        <span className='weather__value'>{props.error}</span>
      </p>
    )}
  </div>
);

export default Weather;
