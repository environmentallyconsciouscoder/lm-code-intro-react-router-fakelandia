import React from 'react';
import { Misdemeanour } from '../../types/misdeameanour.types';

type CardProps = {
  data: Misdemeanour;
  index: number;
};

function Card({ data, index }: CardProps) {
  return (
    <div key={index}>
      <div>{data.misdemeanour}</div>
      <img src={`https://picsum.photos/100/100`} alt={`Image ${index}`} />
    </div>
  );
}

export default Card;
