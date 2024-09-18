/* eslint-disable react/prop-types */
import "./Card.css";

function Card({ image, title, description, price }) {
  return (
    <div className="card">
      <img src={image} alt="imagen iphone 16 " className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-price">{price}</p>
    </div>
  );
}

export default Card;
