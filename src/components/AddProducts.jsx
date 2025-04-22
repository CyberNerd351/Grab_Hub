import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaProductHunt, FaFileAlt, FaDollarSign, FaImage } from 'react-icons/fa';

const AddProducts = () => {
  const [product_name, setProductName] = useState("")
  const [product_description, setProductDescription] = useState("")
  const [product_cost, setProductCost] = useState("")
  const [product_photo, setProductPhoto] = useState("")

  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const submit = async (e) => {
    e.preventDefault()
    setLoading('Please wait...')

    try {
      const data = new FormData()

      data.append('product_name', product_name)
      data.append('product_description', product_description)
      data.append('product_cost', product_cost)
      data.append('product_photo', product_photo)

      const response = await axios.post("https://peter68.pythonanywhere.com/api/add_products", data)
      console.log(response);

      setLoading("")
      setSuccess(response.data.Message)

    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }

  return (
    <div className='row justify-content-center mt-4'>
      <div className='col-md-6 p-4 card shadow'>
        <h2>Upload Products</h2>

        <nav className='m-4'>
          <Link to='/' className='btn btn-dark'>GET ALL PRODUCTS</Link>
        </nav>

        <form onSubmit={submit}>
          <p className='text-warning'>{loading}</p>
          <p className='text-danger'>{error}</p>
          <p className='text-success'>{success}</p>

          {/* Product Name Input */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaProductHunt />
            </span>
            <input
              type="text"
              placeholder='Product name'
              required
              className='form-control'
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          {/* Product Description Textarea */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaFileAlt />
            </span>
            <textarea
              placeholder='Product description'
              required
              className='form-control'
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>

          {/* Product Cost Input */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaDollarSign />
            </span>
            <input
              type="number"
              required
              className='form-control'
              placeholder='Product cost'
              onChange={(e) => setProductCost(e.target.value)}
            />
          </div>

          {/* Product Photo Input */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaImage />
            </span>
            <input
              type="file"
              placeholder='Product photo'
              required
              className='form-control'
              accept='image/*'
              onChange={(e) => setProductPhoto(e.target.files[0])}
            />
          </div>

          <button type='submit' className='btn btn-primary w-100'>Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProducts
