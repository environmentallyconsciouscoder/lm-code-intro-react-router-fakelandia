import React, { useContext } from 'react';
import { MisdeameanourContext } from '../context/data_provider';
import { Misdemeanour } from '../types/misdeameanour.types';

function Home() {
  const userContext = useContext(MisdeameanourContext);
  console.log("userContext", userContext);

  // Check if misdeameanours is null or undefined before mapping
  const misdeameanours = userContext.data === null ? [] : userContext.data.misdemeanours;

  return (
    <>
      {misdeameanours.length > 0 ? (
        misdeameanours.map((data: Misdemeanour, index: number) => (
          <div key={index}>
            <div>{data.misdemeanour}</div>
            <img src={`https://picsum.photos/100/100`} alt={`Image ${index}`} />
          </div>
        ))
      ) : (
        <p>No misdemeanours available</p>
      )}
    </>
  );
}

export default Home;
