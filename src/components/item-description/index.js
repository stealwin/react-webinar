import React from 'react';
import './styles.css';
import BasketSimple from "../basket-simple";
import List from "../list";
import {Link, Route, Routes} from "react-router-dom";
import Pagination from "../pagination";
import Layout from "../layout";

function ItemDescription(){
  return <Layout head={<h1>Товар</h1>}>
    {/*<BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum}/>*/}
   {/* <List items={select.items} renderItem={renders.item}/>*/}
        </Layout>

}


export default ItemDescription;
