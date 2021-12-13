import React, {useCallback} from 'react';
import propTypes from 'prop-types';
import numberFormat from "../../utils/number-format";
import './styles.css';
import {Link} from "react-router-dom";
import useStore from "../../utils/use-store";

function ItemBasket({item}) {
  const store = useStore();
  const callbacks = {
    closeModal: useCallback(() => store.modals.close(), [store]),
    openModal: useCallback(() => store.modals.open('basket'), [store])
  }
  return (
    <div className='ItemBasket'>
      <Link to="/descr" state={{item}} className="ItemBasket__left" onClick={callbacks.closeModal}>
      <div className='ItemBasket__number'>{item._key}</div>
      <div className='ItemBasket__title'>{item.title}</div>
      </Link>
      <div className='ItemBasket__right'>
        <span className="ItemBasket__cell">{numberFormat(item.price || 0)} ₽</span>
        <span className="ItemBasket__cell">{numberFormat(item.amount || 0)} шт</span>
      </div>
    </div>
  )
}

ItemBasket.propTypes = {
  item: propTypes.object.isRequired,
}

ItemBasket.defaultProps = {

}

export default React.memo(ItemBasket);
