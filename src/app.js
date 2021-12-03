import React, {useCallback} from 'react';
import Controls from "./components/controls";
import List from "./components/list";
import Layout from "./components/layout";

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({store}) {
  console.log('App');
  console.log(store.sum);
  let isBasket=false;
  const callbacks = {
    onCreateItem: useCallback(() => store.createItem(), [store]),
    // onSelectItem: useCallback((code) => store.selectItem(code), [store]),
    // onDeleteItem: useCallback((code) => store.deleteItem(code), [store]),
    onAddToBasket:useCallback((code)=> store.addToBasket(code), [store])
  }

  return (
    <Layout head={<h1>Магазин</h1>} basket={isBasket} basketSum={store.sum}>
      <Controls onCreate={callbacks.onCreateItem} basketItems = {store.getState().itemsBasket} basketSum={store.sum}/>
      <List items={store.getState().items}
            onAddToBasket={callbacks.onAddToBasket}
            basketMode={isBasket}/>
    </Layout>
  );
}

export default App;