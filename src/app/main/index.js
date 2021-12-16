import React, {useCallback, useEffect} from "react";
import Item from "../../components/item";
import Layout from "../../components/layout";
import BasketSimple from "../../components/basket-simple";
import List from "../../components/list";
import Pagination from "../../components/pagination";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";

function Main() {

  const select = useSelector(state => ({
    items: state.catalog.items,
    items_count:state.catalog.all_items_count,
    pages:state.catalog.pages,
    amount: state.basket.amount,
    sum: state.basket.sum
  }));

  // Загрузка тестовых данных при первом рендере
  useEffect(async () => {
    await store.catalog.load(10,1);
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

  return (

      <Layout head={<h1>Магазин</h1>}>
      <BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum}/>
      <List items={select.items} renderItem={renders.item}/>
      <Pagination pages={select.pages} catalog={store.catalog}></Pagination>
      </Layout>

  );
}

export default React.memo(Main);
