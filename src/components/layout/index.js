import React from "react";
import './styles.css';

function Layout({head,content,children,basket,basketLayout,setActive}){
  console.log('Layout');
   function basketButton(){
       if(basket){
          return (<div className='Layout__head-basket'><div className='Layout__head'>
              {head}
          </div>
                  <div className="Layout__close-btn" onClick={()=>setActive(false)}><button>Закрыть</button> </div>
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
         return  <div className="Layout__basket-sum"><div className="Layout__basket-sum-empty"></div>
                                <div className="Layout__basket-sum-total">
                                <div>Итого </div>
                                <div>{basketLayout.totalPrice} ₽</div>
                                <div>{basketLayout.totalCount} шт</div>
                                </div>
                </div>
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