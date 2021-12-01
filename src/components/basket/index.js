import React from "react";
import propTypes from 'prop-types';
import './styles.css';
import Layout from "../layout";
import Controls from "../controls";
import List from "../list";


function Basket({active, setActive,items}){

  //console.log(items);
  return  <div className={active ? "basket active" : "basket"} onClick={()=>setActive(false)}>
    <div className="basket__content" onClick={e=>e.stopPropagation()}>
      <Layout head={<h1>Карта</h1>}>
        <List  items={items}/>
          </Layout>
    </div>

  </div>
}



export default React.memo(Basket);