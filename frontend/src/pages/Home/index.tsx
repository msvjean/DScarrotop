import './style.css';
import { ReactComponent as ImageCar } from 'assets/images/car.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container home-container">
      <div className="home-card-container">
        <div className="img-container">
          <ImageCar />
        </div>
        <div className="img-content-conatiner">
          <h3>O carro perfeito para você</h3>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
      <div className="content-card-container">
        <Link to="products">
          <button className="btn" name="btn-view-catalog" id="btn-view-catalog">
            ver catálogo
          </button>
        </Link>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
