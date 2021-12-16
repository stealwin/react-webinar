import React, {useCallback, useEffect} from 'react';
import BasketSimple from "../../components/basket-simple";
import {useLocation, useNavigate} from "react-router-dom";
import Layout from "../../components/layout";
import useSelector from "../../utils/use-selector";
import useStore from "../../utils/use-store";
import Item from "../../components/item";
import ItemDescription from "../../components/item-description";

function Card() {
  const id = useLocation().state.item._id;
  const select = useSelector(state => ({
    items: state.catalog.items,
    items_count: state.catalog.all_items_count,
    descr: state.description,
    amount: state.basket.amount,
    sum: state.basket.sum
  }));
  const navigate = useNavigate();
  // Загрузка тестовых данных при первом рендере
  useEffect(async () => {
    await store.description.loadById(id);
  }, []);


  const store = useStore();


  const callbacks = {
    addToBasket: useCallback((_id) => store.basket.add(_id), [store]),
    openModal: useCallback(() => {
      store.modals.open('basket');
      return navigate('/', {replace: true})
    }, [store]),
  }

  const renders = {
    item: useCallback(item => {
      return <Item item={item} onAdd={callbacks.addToBasket}/>
    }, [callbacks.addToBasket]),
  }
  return <Layout head={<h1>{select.descr.title}</h1>}>
    <BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum}/>
    <ItemDescription/>
  </Layout>

}


export default React.memo(Card);
