import React, { useContext, useState } from "react";
import "./dog.css";
import CartContext from "../../Contexts/CartContext";

DogCard.propTypes = {};

function DogCard(props) {
  const { dog } = props;
  const [isAdded, setAdded] = useState(false);
  const { addToCart, setTotal } = useContext(CartContext);

  const handleClick = () => {
    setAdded(true);

    //Add to cart
    const newItem = {
      id: dog.id,
      name: dog.name,
      price: dog.price,
      imageUrl: dog.imageUrl,
    };

    addToCart((item) => [...item, newItem]);

    //Update total price
    setTotal((preTotal) => preTotal + Number(dog.price));
  };

  return (
    <div className="dog-card">
      <div className="dog-info">
        <p>{dog.name}</p>
        <p>{dog.breed}</p>
      </div>
      <div className="dog-img-container">
        <img className="dog-img" src={dog.imageUrl} alt={dog.name} />
      </div>
      <div className="dog-desc">{dog.description}</div>
      <div className="dog-price">{dog.price} $</div>

      {isAdded ? (
        <button disabled className="dog-btn-disable">
          ADDED
        </button>
      ) : (
        <button onClick={handleClick} className="dog-btn">
          ADD TO CART
        </button>
      )}
    </div>
  );
}

export default DogCard;
