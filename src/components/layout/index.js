import React from "react";
import './styles.css';

function Layout({head,content,children,basket}){
  console.log('Layout');
   function basketButton(){
       if(basket){
          return (<div className='Layout__head-basket'><div className='Layout__head'>
              {head}
          </div>
                  <div><button>Закрыть</button> </div>
              </div>
       )
       } else {
         return(<div className='Layout__head'>
                 {head}
                 </div> )
       }
   }
  return (
    <div className='Layout'>
        {basketButton()}
      <div className='Layout__center'>
        {content || children}
      </div>
    </div>
  )
}

export default React.memo(Layout);