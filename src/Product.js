import React from 'react';
import './product.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import ProdDetails from './ProdDetails';

function Product({ id, title, image, price, rating }) {

  function ProductDetails({ id, title, image, price, rating }){
    return <ProdDetails 
      id={id}
      image={image}
      title={title}
      price={price}
      rating={rating}
      />
  }


  console.log("this is product.js");
  const [{ basket,total }, dispatch] = useStateValue();

  // console.log("This ia the basket ",basket);
  // console.log("This ia the total ",total);
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,  
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    // <Link to='/prodDetails'>
      <div onClick={ProductDetails({ id, title, image, price, rating })} className='product'>
          <div className="product__info">
              <p>{title}</p>
              <p className='product__price'>
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
              <div className="product__rating">
                  {Array(rating).fill().map((_, i)=>(
                      <p>⭐</p>
                  ))}
              </div>
              </div>
              <img src={image} alt="" />
              <button onClick={addToBasket}>Add to Basket</button>
      </div>
    // </Link>
  )
}

export default Product
