import React, { useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Menu = ({ readProduct, data, deleteProduct, editProduct}) => {
  useEffect(() => {
    readProduct();
  }, []);
  console.log(data);

  return (
    <div id="menu">
      <div className="container">
        <div className="menu">
          {data.map((el, idx) => (
            <div className="box">
              <img src={el.image} alt="img" />
              <div className="box_text">
                <h5>{el.name}</h5>
                <h5>{`${el.price} $`}</h5>
              </div>
              <div className="box_btn">
              <Link to ={`/edit/${el.id}`}>
                <button onClick={()=>editProduct(idx)}>
                  <CiEdit />
                </button>
              </Link  >
                <button>
                  <SlBasket />
                </button>
                <button onClick={() => deleteProduct(idx)}>
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>

  );
};

export default Menu;
