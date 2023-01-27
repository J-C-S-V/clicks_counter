import React from 'react';
import '../css/counter.css';

export function Counter({ numClicks }) {
  return <div className='counter'>{numClicks}</div>;
}
