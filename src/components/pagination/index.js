import React from 'react';
import './styles.css';
import useSelector from "../../utils/use-selector";
import useStore from "../../utils/use-store";

function Pagination({pages,catalog}){
  let numbers = Array.from({length:pages},(v,k)=>k+1);
  const limit = 10;



function pageRender(number){
  for (let i=1; i<=pages;i++){
    if (document.getElementById(i).classList.contains("Pagination__item-active")){
      document.getElementById(i).classList.remove("Pagination__item-active");
    }
    if (number==i){
        document.getElementById(number).classList.add("Pagination__item-active");

      let startNumber = number-1;
      catalog.load(limit,number);
    }
  }
}




  return <div className="Pagination__pages">
      <ul>
        {numbers.map(number=>
        <li id={number} key={number} className={number==1 ? "Pagination__item-active" :""} onClick={() => pageRender(number)}>{number}</li>
        )}
      </ul>
      </div>
}

export default Pagination;
