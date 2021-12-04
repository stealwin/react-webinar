import React from "react";
import propTypes from 'prop-types';
import Item from "../item";
import './styles.css';

function List({items, onSelectItem, onAddToBasket, basketMode}) {
    console.log('List');

    function isAddToBasket() {
        if (basketMode) {
            return <div className='List'>{items.map(item =>
                <div className='List__item' key={item.code}>
                    <Item item={item} onSelect={onSelectItem} addToBasket={onAddToBasket} basketMode={basketMode}/>
                </div>
            )}
            </div>
        } else {
            return <div className='List'>{items.map(item =>
                <div className='List__item' key={item.code}>
                    <Item item={item} onSelect={onSelectItem} addToBasket={onAddToBasket}/>
                </div>
            )}
            </div>
        }
    }

    return (
        isAddToBasket()
    )
}

List.propTypes = {
    items: propTypes.arrayOf(propTypes.object).isRequired,
    onSelectItem: propTypes.func,
    onDeleteItem: propTypes.func
}

List.defaultProps = {
    items: [],
    onDeleteItem: () => {
    },
    onSelectItem: () => {
    }
}

export default List;