import React from 'react';
import './styles.css';
import useSelector from "../../utils/use-selector";
import useStore from "../../utils/use-store";

function Pagination({pages,createPages}){
  let numbers = Array.from({length:pages},(v,k)=>k+1);


  return <div className="Pagination__pages">
      <ul>
        {numbers.map(number=>
        <li id={number} key={number} className={number==1 ? "Pagination__item-active" :""} onClick={() => createPages(number,pages)}>{number}</li>
        )}
      </ul>
      </div>
}

export default Pagination;
