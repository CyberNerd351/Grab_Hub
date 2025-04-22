import axios from "axios";
import { useEffect, useState, useRef } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import CustomCarousel from "./Carousel";
import MyFooter from './MyFooter';
import Navbar from './Navbar';
import { FaSearch } from "react-icons/fa";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const GetProducts = () => {
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const resetTimer = useRef(null);

  const img_url = 'https://peter68.pythonanywhere.com/static/images/';
  const navigate = useNavigate();

  const get_products = async () => {
    setLoading('Please wait as we load the products...');
    try {
      const response = await axios.get('https://peter68.pythonanywhere.com/api/get_products_details');
      setProducts(response.data);
      setFilteredProducts(response.data);
      setLoading('');
    } catch (error) {
      setLoading('');
      setError(error.message);
    }
  };

  useEffect(() => {
    get_products();

    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      alert("Please enter a search term.");
      return;
    }

    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(query) ||
      product.product_description.toLowerCase().includes(query)
    );

    setFilteredProducts(filtered);

    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => {
      setFilteredProducts(products);
      setSearchQuery("");
    }, 10000);
  };

  const handlePurchase = (product) => {
    clearTimeout(resetTimer.current);
    navigate('/MakePayments', { state: { product } });
  };

  return (
    <div className="container-fluid px-4">
      <Navbar />
      <CustomCarousel />

      <div className="my-4">
        <InputGroup className="search-bar-container shadow-sm">
          <FormControl
            placeholder="Search products..."
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <Button variant="dark" onClick={handleSearch}>
            <FaSearch className="me-2" /> Search
          </Button>
        </InputGroup>
      </div>

      {loading && <p>{loading}</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="row">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card shadow h-100">
                <img
                  src={img_url + (product.product_photo || 'default.jpg')}
                  alt={product.product_name}
                  className="card-img-top product_img"
                  onError={(e) => e.target.src = '/fallback-image.png'}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="text-dark">{product.product_name}</h5>
                  <p className="text-muted">
                    {product.product_description?.length > 20
                      ? `${product.product_description.slice(0, 20)}...`
                      : product.product_description || "No description available"}
                  </p>
                  <b className="text-warning">{product.product_cost}</b>

                  <div className="mt-auto">
                    <button
                      className="btn btn-sm btn-dark text-light w-100 mt-2"
                      onClick={() => handlePurchase(product)}
                    >
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-light mt-4">No products found matching your search.</div>
        )}
      </div>

      <MyFooter />
    </div>
  );
};

export default GetProducts;
