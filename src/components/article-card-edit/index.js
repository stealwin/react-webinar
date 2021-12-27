import React from 'react';
import propTypes from 'prop-types';
import {cn} from '@bem-react/classname'
import './styles.css';
import numberFormat from "../../utils/number-format";
import {Link} from "react-router-dom";
import SelectCategory from "../select-category";

function ArticleCardEdit({article, onAdd,cat,count, sendEdit}) {

    let isArticleEdit = true;

  // CSS классы по БЭМ
  const className = cn('ArticleCardEdit');

  return (
    <div className={className()}>

      <div>Название:</div>
      <input className={className('Name')} defaultValue={article.title}></input>
      <div>Описание</div>
      <input className={className('Description')} defaultValue={article.description}></input>
      <div className={className('Prop')}>
        <div>Страна производитель:</div>
        <div className={className('Label')}></div>
        <SelectCategory options={count} isEdit = {isArticleEdit}></SelectCategory>
       {/* <select className={className('Value')}>
          <option>{article.maidIn?.title} </option>
        </select>*/}
      </div>

      <div className={className('Prop')}>
        <div>Категория</div>
        <div className={className('Label')}></div>
        <SelectCategory options={cat} isEdit = {isArticleEdit}></SelectCategory>
        {/*<select className={className('Value')}>
          <option>{article.category?.title}</option>
        </select>*/}
      </div>

      <div className={className('Prop')}>
        <div>Год выпуска</div>
        <div className={className('Label')}></div>
        <input className={className('Value')}  defaultValue={article.edition}></input>
      </div>
      <div className={className('Prop', {/*{size: 'big'}*/})}>
        <div>Цена (₽)</div>
        <div className={className('Label')}></div>
        <input className={className('Value')}  defaultValue={numberFormat(article.price)}></input>

      </div>

      <button onClick={() => sendEdit(article)}>Сохранить</button>
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
