import React from 'react';
import './styles.css';

function Pagination({pages,catalog}){
  let numbers = Array.from({length:pages},(v,k)=>k+1);
  //1 страница - 1-10 запись
  //2 страница - 10-20 запись
  // 100 записей = 1 страница 10 записей = 1*10
  // 100 записей = 2 страница 20 записей = 2*10
function pageRender(number){

  for (let i=1; i<=pages;i++){
    if (number==i){
      let startNumber = number-1;
      catalog.load(catalog.limit,catalog.limit*(number-1));
    }
  }


}
  console.log(catalog)
return <div className="Pagination__pages">
      <ul>
        {numbers.map(number=>
          <li key={number} onClick={()=>pageRender(number)} >{number}</li>
        )}
      </ul>
      </div>
}

export default Pagination;
