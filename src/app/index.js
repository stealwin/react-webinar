import React from 'react';
import Main from "./main";
import Basket from "./basket";
import useSelector from "../utils/use-selector";
import {Route} from "react-router-dom";
import Routes from "../components/page-paths"
import ItemDescription from "../components/item-description";
import PagePaths from "../components/page-paths";


/**
 * Приложение
 */
function App() {

  const select = useSelector(state => ({
    name: state.modals.name
  }));

  return (
    <>
      <PagePaths/>
      {select.name === 'basket' && <Basket/>}
    </>
  );
}

export default React.memo(App);
