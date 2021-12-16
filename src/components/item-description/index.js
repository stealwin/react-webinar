import React, {useCallback} from 'react';
import './styles.css';
import numberFormat from "../../utils/number-format";
import {useLocation} from "react-router-dom";
import useSelector from "../../utils/use-selector";
import useStore from "../../utils/use-store";

function ItemDescription() {
  const id = useLocation().state.item._id;
  const select = useSelector(state => ({
    descr: state.description
  }));
  const store = useStore();

  const callbacks = {
    addToBasket: useCallback((_id) => store.basket.add(_id), [store]),
  }
  return <>
    <div className="ItemDescription__wrapper">
      <div className="ItemDescription__text">{select.descr.description}</div>
      <br/>
      <div className="ItemDescription__country">Страна
        производитель: <b>{select.descr.maidIn?.title}</b></div>
      <br/>
      <div className="ItemDescription__category">Категория: <b>{select.descr.category?.title}</b>
      </div>
      <br/>
      <div className="ItemDescription__year">Год: <b>{select.descr.edition}</b></div>
      <div className="ItemDescription__price">
        <h2>Цена: {numberFormat(select.descr.price || 0)} ₽</h2></div>
      <button onClick={() => callbacks.addToBasket(id)}>Добавить</button>
    </div>
  </>
}


export default React.memo(ItemDescription);
