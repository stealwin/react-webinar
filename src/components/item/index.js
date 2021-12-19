import React, {useCallback, useEffect} from 'react';
import propTypes from 'prop-types';
import './styles.css';
import numberFormat from "../../utils/number-format";
import {Link, Route, Routes, useParams} from "react-router-dom";
import ItemDescription from "../item-description";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";

function Item({item, onAdd}) {
  const select = useSelector(state => ({
    itemActive: item
  }));
  let {id} = useParams();
  id = item._id;
  console.log(id)
  return (

      <div className='Item'>
        <Link key={item._id} to={"/articles/"+item._id} state={{item}} className="Item__left">
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
