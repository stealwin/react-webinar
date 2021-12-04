import React from "react";
import propTypes from 'prop-types';
import './styles.css';
import Layout from "../layout";
import Controls from "../controls";
import List from "../list";


function Basket({active, setActive, items, basketSum}) {
    let isBasket = true;


    return <div className={active ? "basket active" : "basket"}>
        <div className="basket__content">
            <Layout style={{backgroundColor: "black"}} head={<h1>Корзина</h1>} basket={isBasket}
                    basketLayout={basketSum}
                    setActive={setActive}>

                <List items={items} basketMode={isBasket}/>

            </Layout>
        </div>

    </div>
}


export default React.memo(Basket);