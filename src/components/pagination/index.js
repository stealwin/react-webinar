import React from 'react';
import './styles.css';

function Pagination({pages}){
  let numbers = Array.from({length:pages},(v,k)=>k+1);
  console.log(numbers);
return <div className="Pagination__pages">
      <ul>
        {numbers.map(number=>
          <li key={number}>{number}</li>
        )}
      </ul>
      </div>
}

export default Pagination;
