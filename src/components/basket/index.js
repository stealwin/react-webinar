import React from "react";
import propTypes from 'prop-types';
import './styles.css';
import Layout from "../layout";
import Controls from "../controls";
import List from "../list";


function Basket({active, setActive,items}){
  let isBasket= true;

  return  <div className={active ? "basket active" : "basket"} onClick={()=>setActive(false)}>
    <div className="basket__content" onClick={e=>e.stopPropagation()}>
      <Layout head={<h1>Корзина</h1>} basket={isBasket} >
        <List  items={items} />
          </Layout>
    </div>

  </div>
}



export default Basket;