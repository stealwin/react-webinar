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
  const item = useLocation().state.item;
  console.log(item);
  const select = useSelector(state => ({
    items: state.catalog.items,
    items_count:state.catalog.all_items_count,
    descr: state.description,
    amount: state.basket.amount,
    sum: state.basket.sum
  }));
  console.log(select.descr)

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
  return <Layout head={<h1>{select.descr.title}</h1>}>
    <BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum}/>
        <div className="ItemDescription__wrapper">
        <div className="ItemDescription__text">{select.descr.description}</div>
          <br/>
          <div className="ItemDescription__country">Страна производитель:{select.descr.maidIn?.title} </div>
          <div className="ItemDescription__category">Категория:{select.descr.category?.title} </div>
          <div className="ItemDescription__year">Год:{select.descr.edition} </div>
          <div className="ItemDescription__price">Цена:{select.descr.price} </div>

        </div>
        <button onClick={() => callbacks.addToBasket(item._id)}>Добавить</button>
        </Layout>

}


export default React.memo(ItemDescription);
