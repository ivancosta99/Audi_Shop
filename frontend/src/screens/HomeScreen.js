import './HomeScreen.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import MenuItems from '../components/MenuItems';
import CatMenu from "../components/CatMenu";
import AutoMenu from '../components/AutoMenu';

//Components
import products2 from "../components/Products2";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const allCatValues = [...new Set(products2.map((curElem) => curElem.category )), "All Audi"];
console.log(allCatValues);

const allAutoValues = [...new Set(products2.map((curElem) => curElem.auto ))];
console.log(allAutoValues);

const HomeScreen = () => {

  const dispatch = useDispatch();

  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);
  
  const [items, setItems] = useState(products);
  const [catItems] = useState(allCatValues);
  const [autoItems] = useState(allAutoValues);

  const filterMenu = (category) => {

    if(category === "All Audi") {
      setItems(products);
      return;
    }

    const updateItems = products.filter((curElem) => {
      return curElem.category === category;
    });
    
    setItems(updateItems);
  }

  const filterAuto = (auto) => {

    const updateItems = products.filter((curElem) => {
      return curElem.auto === auto;
    });
    
    setItems(updateItems);
  }

  return (
    <>
      <div className = "homescreen">
        <div className = "btn__homescreen">
          <CatMenu filterMenu = {filterMenu} catItems = {catItems}/>
          <AutoMenu filterAuto = {filterAuto} autoItems = {autoItems}/>
        </div>
        
        <div className = "homescreen__products">
          
          {loading ? (
          <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            <MenuItems items = {items}/>)}            
        </div>
      </div>
    </>
  )
}; 

export default HomeScreen; 