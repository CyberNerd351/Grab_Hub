import React, { useState } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { FaStar, FaHeart } from 'react-icons/fa'; // Star and Like icons

const MakePayments = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [rating, setRating] = useState(0); // Star rating
  const [hover, setHover] = useState(null); // For hover effect on stars
  const [liked, setLiked] = useState(false); // Like toggle

  const { product } = useLocation().state || {};
  const img_url = 'https://peter68.pythonanywhere.com/static/images/';

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait...");

    try {
      const data = new FormData();
      data.append("phone", phone);
      data.append("amount", product.product_cost);
      data.append("rating", rating); // Send rating to backend (optional support)

      const response = await axios.post("https://peter68.pythonanywhere.com/api/mpesa_payment", data);

      setLoading("");
      setMessage(response.data.message);
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className='row justify-content-center mt-5'>
      <h2 className='mt-4 text-white text-center'>Make Payment - Lipa na M-Pesa</h2>

      <div className='col-md-6 card shadow p-4 bg-white'>

        {/* Product Image */}
        <div className="text-center mb-3 position-relative">
          <img
            src={img_url + product.product_photo}
            alt={product.product_name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "250px", objectFit: "cover" }}
          />
          {/* ❤️ Like Button */}
          <button
            className="btn btn-sm position-absolute top-0 end-0 m-2 p-1 rounded-circle"
            onClick={() => setLiked(!liked)}
            style={{ backgroundColor: liked ? '#dc3545' : '#ffffff', border: '1px solid #ccc' }}
            title={liked ? "Unlike" : "Like"}
          >
            <FaHeart color={liked ? "#fff" : "#dc3545"} size={16} />
          </button>
        </div>

        {/* Product Info */}
        <p className='text-info'><strong>Product Name:</strong> {product.product_name}</p>
        <p className='text-muted'><strong>Description:</strong> {product.product_description}</p>
        <p className='text-warning'><strong>Product Cost:</strong> {product.product_cost}</p>

        {/* ⭐ Star Rating Section */}
        <div className='mb-3'>
          <label className='form-label'><strong>Rate this product:</strong></label>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={24}
                style={{ cursor: "pointer", marginRight: 5 }}
                color={(hover || rating) >= star ? "#FFD700" : "#e4e5e9"}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(null)}
              />
            ))}
          </div>
        </div>

        {/* Payment Form */}
        <form onSubmit={submit}>
          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{message}</p>
          <p className='text-danger'>{error}</p>

          <input
            type="tel"
            placeholder='254XXXXXXXXX'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='form-control'
            required
          />
          <br />
          <button className='btn btn-dark w-100' type='submit'>Make Payment</button>
        </form>
      </div>
    </div>
  );
};

export default MakePayments;
