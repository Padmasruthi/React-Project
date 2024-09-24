import React, { useState, useEffect } from "react";
import "./layout.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { FaPen, FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


export function Products() {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if(refresh) {
      axios.get("http://localhost:6001/product/get")
      .then((response) => {
        setProducts(response.data.data);
        setRefresh(false)
      });
     
    }
  }, [refresh]);


  useEffect(() => {
    if (location.state?.refresh) {
      setRefresh(true);
    }
  }, [location.state]);


 
  const deleted = (id) => {
    axios.delete(`http://localhost:6001/product/deleted/${id}`)
      .then(() => {
        setRefresh(true);
        toast.success('Product deleted successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        console.log("Something went wrong!!!", err);
      });
  };



  const updateproduct = (product) => {
    console.log("Navigating to edit product with ID:", product); // Log the ID
    navigate(`/productform/${product._id}`, {state: {product} });
    setRefresh(true)
  };




  return (
    <>
      <div className="container-fluid   p-0  h-100  ">
        {/* 1st row */}
        <div className="row ">
          <div className="col-md-2">
            <div id="sidebar">
              <h3 className="brand  mx-4 ">Windmill</h3>
              <ul className="mynav  d-flex flex-column gap-2  mb-auto fw-5 fs-5">
                <li className="nav-item  mb-3 mt-3">
                  <i class="bi bi-house-door-fill"></i>Dashboard
                </li>

                <li className="nav-item mb-3">
                  <i class="bi bi-tablet"></i>Forms
                </li>

                <li className="nav-item mb-3">
                  <i class="bi bi-credit-card"></i>Cards
                </li>

                <li className="nav-item mb-3">
                  <i class="bi bi-bar-chart-fill"></i>Charts
                </li>

                <li className="nav-item mb-3">
                  <i class="bi bi-fast-forward"></i>Buttons
                </li>

                <li className="nav-item mb-3">
                  <i class="bi bi-file"></i>Modals
                </li>

                <li className="nav-item mb-3">
                  <i class="bi bi-table"></i>Table
                </li>
                <li className="nav-item mb-3">
                  <i class="bi bi-gear"></i>Pages
                </li>
                <button className="btncreate rounded  d-flex column-gap-3 border-0 text-white mt-3">
                  <i class="bi bi-person-plus-fill"></i>Create
                </button>
              </ul>
            </div>
          </div>

          <div className="col-md-10 ">
            <div className="d-flex justify-content-evenly ">
              <div class="input-group  mx-5">
                <span class="input-group-text  ">
                  <i class="bi bi-search"></i>
                </span>
                <input type="text" class="form-control" placeholder="Search" />
              </div>

              <div className="icons">
                <i class="bi bi-moon-fill me-3 m-2 fs-4"></i>
                <i class="bi bi-bell-fill me-3 m-2 fs-4"></i>
                 <i class="bi bi-person-circle me-3 m-2 fs-3"></i>
                <button className=" btnlogout rounded border-0  text-white">
                  Logout
                </button>
              </div>
            </div>

            {/* 2nd row */}
            <div className="row mt-3">
              <div className="col-md">
                <p className="fs-2 mt-3 "> Dashboard</p>
                <div className="container mt-3">
                  <div className=" ratingcontainer p-3  text-white d-flex justify-content-between align-items-center  rounded">
                    <div>
                      <i class="bi bi-star-fill  fs-5"></i>
                      <span className="fs-4">Star this project on GitHub</span>
                    </div>
                    <div>
                      <p className="fs-4 ">View More</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------ */}

            <div className="row mt-4">
              <div className="col-md-3">
                <div className="card mt-4  p-2 ">
                  <div className="cardbody d-flex gap-1">
                    <div className="mt-3  card-icon-1">
                      <i class="bi bi-people-fill  fs-3 "></i>
                    </div>
                    <div className="p-3">
                      <p className="fs-4">Total clients</p>
                      <p className="fs-4">6389</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card mt-4  p-2">
                  <div className="cardbody d-flex gap-1">
                    <div className="mt-3  card-icon-2  ">
                      <i class="bi bi-card-heading  fs-3 "></i>
                    </div>
                    <div className="p-3">
                      <p className="fs-4">Account balance</p>
                      <p className="fs-4">$ 46,760.89</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card mt-4  p-2">
                  <div className="cardbody d-flex gap-1">
                    <div className="mt-3  card-icon-3">
                      <i class="bi bi-cart-fill  fs-3 "></i>
                    </div>
                    <div className="p-3">
                      <p className="fs-4">New sales</p>
                      <p className="fs-4">376</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card mt-4 p-2">
                  <div className="cardbody d-flex gap-1">
                    <div className="mt-3 card-icon-4">
                      <i class="bi bi-person-lines-fill  fs-3 "></i>
                    </div>
                    <div className="p-3">
                      <p className="fs-4">Pending contracts</p>
                      <p className="fs-4">35</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* --------------------------------- */}

            <div className="row">
              <div className="col-md">
                <span className="fs-4 ">List of Products</span>
                <button
                  onClick={() => navigate("/productform")}
                  className="rounded border-0  mt-4 mx-3 p-2 text-white "
                  style={{ width: "75px ", backgroundColor: "blueviolet" }}>
                  Add+
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <table className="table table-hover mt-5">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {products.map((product) => (
                      <tr key={product._id}>
                        <td>{product.Id}</td>
                        <td>{product.Name}</td>
                        <td>{product.Price}</td>
                        <td>{product.Description}</td>
                        <td>
                          <FaPen
                            onClick={() => updateproduct(product)}
                            className="me-3 p-2  text-white"
                            style={{ cursor: "pointer", width: "40px", height: "30px", backgroundColor: "blueviolet", borderRadius: "3px" }}
                          />
                          <FaTrash
                            onClick={() => deleted(product._id)}
                            className="p-2 text-white"
                            style={{ cursor: "pointer", width: "40px", height: "30px", backgroundColor: "red", borderRadius: "3px" }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <ToastContainer /> 
              </div>
            </div>
          </div>

          {/* ----------------------------------------- */}
        </div>
      </div>
    </>
  );
}