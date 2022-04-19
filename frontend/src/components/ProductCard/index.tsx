import ImageProductCard from 'assets/images/car-card.png';
import './style.css';

const ProductCard = () => {
  return (
    <div className="card-container">
      <div className="img-card-container">
        <img src={ImageProductCard} alt="Nome do produto" />
      </div>
      <div className="catalog-card-container">
        <h3>Audi Supra TT</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <div className="btn-card-container">
        <button className="btn">comprar</button>
      </div>
    </div>
  );
};

export default ProductCard;
