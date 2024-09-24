import React, {useEffect, useState } from "react";
import "./productform.css";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export const Productform = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [product, setProduct] = useState({
    Id: "",
    Name: "",
    Price: "",
    Description: "",
  });


useEffect(() => {
  if(id && location.state?.product){
    setProduct(location.state.product);
  }
}, [id,location.state])

const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const productData = {
      Id: product.Id,
      Name: product.Name,
      Price: product.Price,
      Description: product.Description,
    };

    try {
      if (id) {
        productData._id = id
        // Update existing product
        await axios.put(
         `http://localhost:6001/product/update/`,
          productData
        );
      } else {
        // Create new product
        await axios.post("http://localhost:6001/product/create", productData);
      }
      navigate("/layout", {state: {refresh: true} }); // Redirect to layout page
    } catch (error) {
      console.log(
        "Error saving product:",
        error.response ? error.response.data : error
      );
    }
  };

  return (
    <>
      <div className="page-background">
        <div className="container col-md-5  formpage">
          <h1 className="text-center mb-4">Product Form</h1>

          <form className="productform  bg-white  p-5 " onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="id" className="form-label">
                Product ID
              </label>
              <input
                type="text"
                className="form-control  border-secondary"
                id="id"
                value={product.Id}
                onChange={handleChange}
                name="Id"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control border-secondary"
                id="name"
                value={product.Name}
                onChange={handleChange}
                name="Name"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="price" className="form-label">
                Product Price
              </label>
              <input
                type="text"
                className="form-control border-secondary"
                id="price"
                value={product.Price}
                onChange={handleChange}
                name="Price"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="description" className="form-label">
                Product Description
              </label>
              <textarea
                className="form-control  border-secondary"
                typeof="text"
                id="description"
                value={product.Description}
                onChange={handleChange}
                name="Description"
                rows={5}
              ></textarea>
            </div>

            <div className="buttons d-flex gap-3">
              <button
                type="submit"
                className="text-white rounded border-0   savebtn"
              >
                {id ? "Update" : "Save"}
              </button>
              <button
                className="text-white bg-secondary rounded border-0  cancelbtn"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};