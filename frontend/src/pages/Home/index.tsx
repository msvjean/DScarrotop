import './style.css';
import { ReactComponent as ImageCar } from 'assets/images/car.svg';

const Home = () => {
  return (
    <div className="container home-container">
      <div className="home-card-container">
        <div className="img-container">
            <ImageCar />
        </div>
        <div className="img-content-conatiner">
            <h3>O carro perfeito para você</h3>
            <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
        </div>
      </div>
      <div className="content-card-container">
          <button className="btn">ver catálogo</button>
          <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
