import React, { useState } from "react";
import { Link } from "react-router-dom";

const Edit = ({ change, editInputValue }) => {
  const [product, setProduct] = useState(change);
  function editNameValue(e) {
    let newObj = { ...product };
    newObj.name = e.target.value;
    setProduct(newObj);
  }
  function editPriceValue(e) {
    let newObj = { ...product };
    newObj.price = e.target.value;
    setProduct(newObj);
  }
  function editImageValue(e) {
    let newObj = { ...product };
    newObj.image = e.target.value;
    setProduct(newObj);
  }
  function handle() {
    editInputValue(product);
  }
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="block">
            <h1>Create</h1>
            <input
              value={product.name}
              onChange={editNameValue}
              type="text"
              placeholder="name"
            />
            <input
              value={product.price}
              onChange={editPriceValue}
              type="text"
              placeholder="price"
            />
            <input
              value={product.image}
              onChange={editImageValue}
              type="text"
              placeholder="image"
            />
            <Link to={"/"} style={{ width: "100px" }}>
              <button onClick={() => handle()}>edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
