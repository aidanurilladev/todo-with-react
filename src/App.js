import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Admin from "./components/Admin";
import { useState } from "react";
import Content from "./components/Content";
import Edit from "./components/Edit";
function App() {
  const [data, setData] = useState([]);
  const [change, setChange] = useState({});
  function postProduct(obj) {
    let data = JSON.parse(localStorage.getItem("food")) || [];
    data.push(obj);
    localStorage.setItem("food", JSON.stringify(data));
  }
  function readProduct() {
    let data = JSON.parse(localStorage.getItem("food")) || [];
    setData(data);
  }
  function deleteProduct(idx) {
    let data = JSON.parse(localStorage.getItem("food")) || [];
    let filterProduct = data.filter((el, index) => index !== idx);
    localStorage.setItem("food", JSON.stringify(filterProduct));
    readProduct();
  }
  function editProduct(index) {
    setChange(data[index]);
  }
  function editInputValue(newProduct) {
    let data = JSON.parse(localStorage.getItem("food")) || [];
    let newData = data.map((el) => {
      if (newProduct.id === el.id) {
        return newProduct;
      }
      return el;
    });
    localStorage.setItem("food", JSON.stringify(newData));
  }
  return (
    <div className="App">
      <Header />
      <Content />
      <Routes>
        <Route
          path="/"
          element={
            <Menu
              readProduct={readProduct}
              data={data}
              deleteProduct={deleteProduct}
              editProduct={editProduct}
            />
          }
        />
        <Route path="/order" element={<Order />} />
        <Route path="/admin" element={<Admin postProduct={postProduct} />} />
        <Route
          path="/edit/:id"
          element={<Edit change={change} editInputValue={editInputValue} />}
        />
      </Routes>
    </div>
  );
}

export default App;
