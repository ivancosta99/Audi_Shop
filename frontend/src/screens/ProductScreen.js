import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components
import products2 from "../components/Products2";
import ProductFiltered from "../components/Product";

//Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { getProducts as listProducts } from "../redux/actions/productActions";

const allAutoValues = [...new Set(products2.map((curElem) => curElem.auto )), "all"];
console.log(allAutoValues);

const ProductScreen = ({match, history}) => {

  const[qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if(product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
  };

  const getProducts = useSelector(state => state.getProducts);
  const { products } = getProducts;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);
  
  const [items] = useState(products);

  return (
    <div className = "productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
         <h2>{error}</h2> 
      ) : (
        <>
          <div className = "productscreen__left">
            <div className = "left__image">
              <img src = {product.imageUrl2} alt = {product.name}/>
            </div>
            <div className = "left__info">
              <p className = "left__name">{product.name}</p>
              <p>Price: ${product.price}</p> 
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className = "productscreen__right">
            <div className = "right__info">
              <p>
                Price: <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Quantity
                {product.countInStock > 0 ?(
                  <select value = {qty} onChange = {(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key = {x+1} value = {x+1}>{x+1}</option>
                ))}
                </select>
                ) : (
                  <div> </div>
                )}
                
              </p>
              <p>
                {product.countInStock > 0 ?(
                <button type = "button" onClick = {addToCartHandler}>Add To Cart</button>
                ) : (
                  <div> </div>
                )}
                
              </p>
            </div>
          </div>
          <div className = "text">
            <p>Check other variant of Audi {product.auto}:</p>
          </div>
          
          <div className="product__bottom">
            <ProductFiltered items = {items} filterAuto = {product.auto} autoName = {product.name}/>
          </div>
          
        </>
      )}
      
    </div>
  );
};

export default ProductScreen;