import './Product.css';
import { Link } from "react-router-dom";

const ProductFiltered = (props) => {

  return (    
    props.items.map((elem) => {
      const { _id, name, description, price, auto, imageUrl1} = elem;
      if(props.filterAuto === auto && props.autoName !== name)
      {
        return (
          <div className = "product">
              <img src = {imageUrl1} alt = {name} />
          
              <div className = "product__info">
                  <p className = "info_name">{name}</p>
                  <p className = "info__description">{description.substring(0, 100)}...</p>
          
                  <p className = "info__price">${price}</p>
          
                  <Link to = {`/product/${_id}`} className = "info__button">
                      View
                  </Link>
              </div>
          </div>
        )
      }
      
    })
  )
};

export default ProductFiltered;