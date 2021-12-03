import React, {useCallback, useState} from "react";
import propTypes from 'prop-types';
import plural from 'plural-ru';
import './styles.css';

function Item({item, onSelect, addToBasket,basketMode}){
  console.log('Item', item.title);
    console.log(basketMode, "basket mode");
  const [counter, setCounter] = useState(0);
  function renderQuantity(){
      if (basketMode){
          console.log("item quantity works")
          return (
              <div className="Item__quantity">{item.price} {item.currency} {item.quantity} {item.countWord}</div>
         )
      } else {
            return(<div className="Item__price">{item.price} {item.currency}</div>)

      }

  }
  function listForBasket(){
      if (item.quantity){
          return(<div className='Item__actions'></div>)

      } else {
         return( <div className='Item__actions'>
              <button onClick={() => addToBasket(item.code)}>
                  Добавить
              </button>
          </div>)
      }

  }

  const callbacks = {
    onClick: useCallback(() => {
      // onSelect(item.code);
      // if (!item.selected){
        setCounter(counter + 1);
      // }
    }, [item, onSelect, counter, setCounter])
  };

  return (
    <div className={'Item'  + (item.selected ? ' Item_selected' : '')} onClick={callbacks.onClick}>
      <div className='Item__number'>{item.code}</div>
      <div className='Item__title'>
        {item.title}
        {counter ? ` | Выделялся ${counter} ${plural(counter, 'раз', 'раза', 'раз')}` : null}
      </div>
        {renderQuantity()}
        {listForBasket()}

    </div>
  )
}

Item.propTypes = {
  item: propTypes.object.isRequired,
  onSelect: propTypes.func.isRequired,
  onDeleted: propTypes.func.isRequired
}

Item.defaultProps = {
  onSelect: () => {},
  onDeleted: () => {}
}

export default Item;