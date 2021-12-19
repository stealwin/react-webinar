import React from 'react';
import Main from "./main";
import Basket from "./basket";
import useSelector from "../utils/use-selector";
import {Route, Routes} from "react-router-dom";
import ItemDescription from "../components/item-description";
import Card from "./card";


/**
 * Приложение
 */
function App() {

  const select = useSelector(state => ({
    name: state.modals.name
  }));
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path={"/articles/:id"} element={<Card/>}/>
      </Routes>
      {select.name === 'basket' && <Basket/>}
    </>
  );
}

export default React.memo(App);
