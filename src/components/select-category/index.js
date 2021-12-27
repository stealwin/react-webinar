import React, {useCallback} from 'react';
import propTypes from "prop-types";
import {cn} from '@bem-react/classname'
import './styles.css';

function SelectCategory(props){
  console.log(props)
  // CSS классы по БЭМ
  const className = cn('SelectCategory');
  const onSelect = useCallback((e) => {
    props.onChange(e.target.value,props.isFiltered);
  }, [props.onChange])


  return (
    <select className={className()+(props.class ? props.class : "")} onChange={onSelect} value={props.value}>
      {!props.isEdit && <option value="all">Все</option>}
      {props.options.map(item => (
        <option key={item._id} value={item._id}>{item.title}</option>
      ))}
    </select>
  )
}

SelectCategory.propTypes = {
  options: propTypes.arrayOf(propTypes.object).isRequired,
  value: propTypes.any,
  onChange: propTypes.func
}

SelectCategory.defaultProps = {
  onChange: () => {
  }
}

export default React.memo(SelectCategory);
