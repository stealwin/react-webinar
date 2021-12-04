import React, {useCallback, useState} from "react";
import propTypes from 'prop-types';
import plural from 'plural-ru';
import './styles.css';

function Item({item, onSelect, addToBasket, basketMode}) {
    const [counter, setCounter] = useState(0);

    function listForBasket() {
        if (item.quantity) {
            return (<div></div>)

        } else {
            return (<div className='Item__actions'>
                <button onClick={() => addToBasket(item.code)}>
                    Добавить
                </button>
            </div>)
        }

    }

    function renderQuantity() {
        if (basketMode) {
            return (
                <div className="Item__price-container">
                    <div className="Item__price">{item.price} {item.currency}</div>
                    <div>{item.quantity} {item.countWord}</div>
                    {listForBasket()}
                </div>
            )
        } else {
            return (<div className="Item__price-container">
                    <div className="Item__price">{item.price} {item.currency}</div>
                    {listForBasket()}
                </div>
            )

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
        <div className={'Item' + (item.selected ? ' Item_selected' : '')} /*onClick={callbacks.onClick}*/>
            <div className='Item__number'>{basketMode ? item.number : item.code}</div>
            <div className='Item__title'>
                {item.title}
                {counter ? ` | Выделялся ${counter} ${plural(counter, 'раз', 'раза', 'раз')}` : null}
            </div>
            {renderQuantity()}
        </div>
    )
}

Item.propTypes = {
    item: propTypes.object.isRequired,
    onSelect: propTypes.func.isRequired,
    onDeleted: propTypes.func.isRequired
}

Item.defaultProps = {
    onSelect: () => {
    },
    onDeleted: () => {
    }
}

export default Item;