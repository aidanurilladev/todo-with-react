import React, { useState } from "react";

const Admin = ({ postProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function click() {
    let obj = {
      id: Date.now(),
      name: name,
      price: price,
      image: image,
    };
    postProduct(obj);
  }
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="block">
            <h1>Create</h1>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="name"
            />
            <input
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              placeholder="price"
            />
            <input
              onChange={(e) => setImage(e.target.value)}
              type="text"
              placeholder="image"
            />
            <button onClick={() => click()}>create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
