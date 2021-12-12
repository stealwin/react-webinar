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
  console.log(id);
  const select = useSelector(state => ({
    items: state.catalog.items,
    items_count:state.catalog.all_items_count,
    amount: state.basket.amount,
    sum: state.basket.sum
  }));


  // Загрузка тестовых данных при первом рендере
  useEffect(async () => {
    /*await store.catalog.load(store.catalog.limit,0);
    store.catalog.pagination();*/
    await store.catalog.loadById(id);
  }, []);

  const store = useStore();
  async () => {await store.catalog.loadById(id)}
  console.log(store.state);

  console.log()
  const callbacks = {
    addToBasket: useCallback((_id) => store.basket.add(_id), [store]),
    openModal: useCallback(() => store.modals.open('basket'), [store]),
  }

  const renders = {
    item: useCallback(item => {
      return <Item item={item} onAdd={callbacks.addToBasket}/>
    }, [callbacks.addToBasket]),
  }
  return <Layout head={<h1>{useLocation().state.item.title}</h1>}>
    <BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum}/>
      {/* <List items={select.items} renderItem={renders.item}/>*/}
        <div className="ItemDescription__wrapper">
        <div className="ItemDescription__text">{useLocation().state.item.description}</div>
          <br/>
          <div className="ItemDescription__country">{useLocation().state.item.title}</div>
        </div>
        </Layout>

}


export default React.memo(ItemDescription);
