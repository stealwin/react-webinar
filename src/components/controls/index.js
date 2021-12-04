import React, {useState} from "react";
import propTypes from 'prop-types';
import Basket from "../basket";
import './styles.css';

function Controls(props){
  const [modalActive, setModalActive] = useState(false);
  let arr = props.basketItems.map(item => item.price_quant);
  let reducer  = arr.reduce(function (prev,curr) {
    return  prev + curr;
  },0);
  function isEmptyBasket(){
    if (props.basketItems.length==0){
      return <div>В корзине: <b style={{margin:"0 5px"}}>пусто</b></div>
    } else {
      return <div>В корзине:{props.basketItems.length} товара / {reducer} рубля</div>
    }
  }
  console.log('Controls');
  return <div className='Controls'>
    <Basket active={modalActive} setActive={setModalActive} items={props.basketItems} basketSum={props.basketSum}/>
    <div className="Controls__count-container">
    {isEmptyBasket()}
      <div>
      <button onClick={()=> setModalActive(true)}> Перейти</button>
      </div>
    </div>
  </div>
}

Controls.propTypes = {
  onCreate: propTypes.func.isRequired
}

Controls.defaultProps = {
  onCreate: () => {}
}

export default Controls;