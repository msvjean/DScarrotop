import ProductCard from 'components/ProductCard';
import './style.css';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <div className="search-catalog-container">
        <div className="search-container">
          <label htmlFor="inputSearchProduct"></label>
          <input
            type="text"
            name="inputSearchProduct"
            id="inputSearchProduct"
            placeholder="Digite sua busca"
          />
          <button className="btn">buscar</button>
        </div>
      </div>
        <div className="my-4">
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <ProductCard />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Catalog;
