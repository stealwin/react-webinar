import React, {useCallback, useEffect} from 'react';
import './styles.css';
import BasketSimple from "../basket-simple";
import List from "../list";
import {useLocation} from "react-router-dom";
import Layout from "../layout";
import useSelector from "../../utils/use-selector";
import useStore from "../../utils/use-store";
import Item from "../item";

function ItemDescription(){
  const id = useLocation().state.item._id;
  let itemDetail = {};
  const select = useSelector(state => ({

    description:state.description.description,
    header:state.description.title,
    country:state.description.maidIn,
    amount: state.basket.amount,
    sum: state.basket.sum
  }));
  console.log(select.country)

  // Загрузка тестовых данных при первом рендере
  useEffect(async () => {
    await store.description.loadById(id);
  }, []);


  const store = useStore();


  const callbacks = {
    addToBasket: useCallback((_id) => store.basket.add(_id), [store]),
    openModal: useCallback(() => store.modals.open('basket'), [store]),
  }

  const renders = {
    item: useCallback(item => {
      return <Item item={item} onAdd={callbacks.addToBasket}/>
    }, [callbacks.addToBasket]),
  }
  return <Layout head={<h1>{select.header}</h1>}>
    <BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum}/>
        <div className="ItemDescription__wrapper">
        <div className="ItemDescription__text">{select.description}</div>
          <br/>
          <div className="ItemDescription__country">Страна производитель: </div>
        </div>
        </Layout>

}


export default React.memo(ItemDescription);
