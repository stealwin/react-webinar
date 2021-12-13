import React from 'react';
import propTypes from 'prop-types';
import plural from "plural-ru";
import numberFormat from "../../utils/number-format";
import './styles.css';
import {Link} from "react-router-dom";

function BasketSimple({sum, amount, onOpen}) {
  return (
    <div className='BasketSimple'>
      <div className="BasketSimple__left">
      <Link to="/">Главная</Link>
      </div>
      <div className="BasketSimple__right">
      <span className="BasketSimple__label">В корзине:</span>
      <span className="BasketSimple__total">
      {amount
        ? `${amount} ${plural(amount, 'товар', 'товара', 'товаров')} / ${numberFormat(sum)} ₽`
        : `пусто`
      }
      </span>
      <button className='BasketSimple__button' onClick={onOpen}>Перейти</button>
      </div>
    </div>
  )
}

BasketSimple.propTypes = {
  onOpen: propTypes.func.isRequired,
  sum: propTypes.number,
  amount: propTypes.number
}

BasketSimple.defaultProps = {
  onOpen: () => {},
  sum: 0,
  amount: 0
}

export default React.memo(BasketSimple);
