import React from 'react';
import propTypes from 'prop-types';
import {cn} from '@bem-react/classname'
import './styles.css';
import numberFormat from "../../utils/number-format";
import {Link} from "react-router-dom";
import SelectCategory from "../select-category";

function ArticleCardEdit({article, onAdd,cat}) {


  // CSS классы по БЭМ
  const className = cn('ArticleCardEdit');

  return (
    <div className={className()}>

      <div>Название:</div>
      <input className={className('Name')} value={article.title}></input>
      <div>Описание</div>
      <input className={className('Description')} value={article.description}></input>
      <div className={className('Prop')}>
        <div>Страна производитель:</div>
        <div className={className('Label')}></div>
        <select className={className('Value')}>
          <option>{article.maidIn?.title} </option>
        </select>
      </div>

      <div className={className('Prop')}>
        <div>Категория</div>
        <div className={className('Label')}></div>
        <SelectCategory options={cat}></SelectCategory>
        {/*<select className={className('Value')}>
          <option>{article.category?.title}</option>
        </select>*/}
      </div>

      <div className={className('Prop')}>
        <div>Год выпуска</div>
        <div className={className('Label')}></div>
        <input className={className('Value')} value={article.edition}></input>
      </div>
      <div className={className('Prop', {/*{size: 'big'}*/})}>
        <div>Цена (₽)</div>
        <div className={className('Label')}></div>
        <input className={className('Value')} value={numberFormat(article.price)}></input>

      </div>

      <button onClick={() => onAdd(article._id)}>Сохранить</button>
    </div>
  )
}

ArticleCardEdit.propTypes = {
  article: propTypes.object.isRequired,
  onAdd: propTypes.func
}

ArticleCardEdit.defaultProps = {
  article: {},
  onAdd: () => {}
}

export default React.memo(ArticleCardEdit);
