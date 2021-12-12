import React, {useEffect} from 'react';
import propTypes from 'prop-types';
import './styles.css';
import numberFormat from "../../utils/number-format";
import {Link, Route, Routes} from "react-router-dom";
import ItemDescription from "../item-description";
import useStore from "../../utils/use-store";

function Item({item, onAdd}) {
  console.log(item._id)
  /*useEffect(async () => {
    await store.modules.itemDescription.loadById(item._id);
  }, []);*/
  async () => {await store.modules.itemDescription.loadById(item._id)}
  const store = useStore();


  return (

      <div className='Item'>
        <Link to="/descr" state={{item}} className="Item__left" >
      <div className='Item__number'>{item.order}</div>
      <div className='Item__title'>{item.title}</div>
        </Link>
        <div className='Item__right'>
        <div className='Item__price'>{numberFormat(item.price)} ₽</div>

      <button onClick={() => onAdd(item._id)}>Добавить</button>
      </div>
    </div>




  )
}

Item.propTypes = {
  item: propTypes.object.isRequired,
  onAdd: propTypes.func,
}

Item.defaultProps = {
  onAdd: () => {}
}

export default React.memo(Item);
