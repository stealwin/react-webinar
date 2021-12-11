import React from "react";
import {Route, Routes} from "react-router-dom";
import ItemDescription from "../item-description";
import Main from "../../app/main";

function PagePaths(){
  return(
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/descr" element={<ItemDescription />} />
    </Routes>
  )
}

export default PagePaths;
