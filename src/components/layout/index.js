import React from "react";
import './styles.css';

function Layout({head,content,children,basket,basketLayout}){
  console.log('Layout');
   function basketButton(){
       if(basket){
          return (<div className='Layout__head-basket'><div className='Layout__head'>
              {head}
          </div>
                  <div className="Layout__close-btn"><button>Закрыть</button> </div>
                  <div className="Layout__empty"></div>

              </div>
       )
       } else {
         return(<div className='Layout__head'>
                 {head}
                 </div> )
       }
   }
   function basketSum(){
       if(basket){
         return  <div className="Layout__basket-sum">Итого {basketLayout.totalPrice} рублей {basketLayout.totalCount} шт  </div>
       }
   }
  return (
    <div className={ basket ? "Layout__basket" : "Layout"}>
        {basketButton()}
        <div className='Layout__center'>
        {content || children}
      </div>
        {basketSum()}
    </div>
  )
}

export default React.memo(Layout);