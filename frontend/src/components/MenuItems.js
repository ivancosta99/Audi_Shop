import React from "react";
import { Link } from "react-router-dom";

const MenuItems = (props) => {

    return (
        props.items.map((elem) => {
            const { _id, name, description, price, countInStock, imageUrl1, category } = elem;
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
    )
)}

export default MenuItems;