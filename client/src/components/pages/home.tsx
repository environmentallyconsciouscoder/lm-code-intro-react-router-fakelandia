import React, { useContext, useEffect, useState } from 'react';
import { MisdeameanourContext } from '../context/data_provider';
import { Misdemeanour } from '../types/misdeameanour.types';
import Card from '../features/card/card';

function Home() {
  const userContext = useContext(MisdeameanourContext);
  const [selectedFilter, setSelectedFilter] = useState('All'); // Step 1
  const [misdeameanours, setMisdeameanours] = useState< never[] | [Misdemeanour]>([]);

  // const misdeameanours = userContext.data === null ? [] : userContext.data.misdemeanours;

  useEffect(() => {
    const results = userContext.data === null ? [] : userContext.data.misdemeanours;
    console.log("results", results)
    setMisdeameanours(results)
  },[userContext.data])

  const handleFilterChange = (event: { target: { value: string; }; }) => {
    setSelectedFilter(event.target.value);
  };

  const filteredMisdeameanours = selectedFilter === "All" ? misdeameanours: misdeameanours?.filter((data: { misdemeanour: string; }) => data.misdemeanour === selectedFilter);

  return (
    <div style={{height: '100%', overflow: 'auto'}}>
      <label>
        Filter by:
        <select value={selectedFilter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="rudeness">rudeness</option>
          <option value="vegetables">vegetables</option>
          <option value="united">united</option>
        </select>
      </label>
      {filteredMisdeameanours.length > 0 ? (
        filteredMisdeameanours.map((data: Misdemeanour, index: number) => (
          <div key={index}>
            <Card data={data} index={index} />
          </div>
        ))
      ) : (
        <p>No misdemeanours available</p>
      )}
    </div>
  );
}

export default Home;
