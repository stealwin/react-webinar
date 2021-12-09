import React, {useCallback, useEffect} from "react";
import Item from "../../components/item";
import Layout from "../../components/layout";
import BasketSimple from "../../components/basket-simple";
import List from "../../components/list";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";

// Action creators
import basketActions from '../../store-redux/basket/actions';
import catalogActions from '../../store-redux/catalog/actions';

function Main() {

  const select = useSelector(state => ({
    items: state.catalog.items,
    amount: state.basket.amount,
    sum: state.basket.sum
  }));

  // redux store
  const store = useStore();

  // Загрузка тестовых данных при первом рендере
  useEffect(async () => {
    //await store.catalog.load();

    // Отправляем дейстиве, которое создаёт .load()
    // на самом деле .load создаст функцию, её вызвит middleware redux-thunk и в самой функции будет отправлено действие
    store.dispatch(catalogActions.load());
  }, []);

  const callbacks = {
    //addToBasket: useCallback((_id) => store.basket.add(_id), [store]),
    //openModal: useCallback(() => store.modals.open('basket'), [store]),

    // Добавление товара в корзину с использвоанием
    addToBasket: useCallback((_id) => store.dispatch(basketActions.add(_id)), [store]),
    // Вручную созадём действие открытия модалки.
    openModal: useCallback(() => store.dispatch({type: 'modals/open', payload: {name: 'basket'}}), [store]),
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
    </Layout>
  );
}

export default React.memo(Main);
