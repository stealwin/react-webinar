import React, {useCallback, useEffect, useMemo} from "react";
import useSelector from "../../utils/use-selector";
import useStore from "../../utils/use-store";
import Select from "../../components/select";
import LayoutTools from "../../components/layout-tools";
import Input from "../../components/input";
import SelectCategory from "../../components/select-category";
import useInit from "../../utils/use-init";

function CatalogFilter() {

  const store = useStore();

  const select = useSelector(state => ({
    sort: state.catalog.params.sort,
    query: state.catalog.params.query,
    categories:state.categories.items,
    modifiedCategories:state.categories.modifiedItems,
  }));
  useInit(async () => {
    await store.categories.loadCategories();
  } );
  useInit( () => {
     store.categories.getFullTree(select.categories);
  },[select.categories] );


  // Опции для полей
  const options = {
    sort: useMemo(() => ([
      {value:'key', title: 'По коду'},
      {value:'title.ru', title: 'По именованию'},
      {value:'-price', title: 'Сначала дорогие'},
      {value:'edition', title: 'Древние'},
    ]), [])
  }

  const callbacks = {
    onSort: useCallback((sort) => store.catalog.setParams({sort}), [store]),
    onSearch: useCallback(query => store.catalog.setParams({query, page: 1}), [store]),
    categorySort: useCallback(category => store.catalog.setParams({category, page: 1}), [store]),
    onReset: useCallback(() => store.catalog.resetParams(), [store])
  }

  return (
    <LayoutTools>
      <Select onChange={callbacks.categorySort}  options={select.modifiedCategories}
              main={<option key={Symbol} value={''}>Все</option>}/>
      {/*<SelectCategory onChange={callbacks.categorySort} value={select.sort} options={select.modifiedCategories}></SelectCategory>*/}
      <Input onChange={callbacks.onSearch} value={select.query} placeholder={'Поиск'} theme="big"/>
      <label>Сортировка:</label>
      <Select onChange={callbacks.onSort} value={select.sort} options={options.sort}/>
      <button onClick={callbacks.onReset}>Сбросить</button>
    </LayoutTools>
  );
}

export default React.memo(CatalogFilter);
