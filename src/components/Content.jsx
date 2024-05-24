import React from "react";

const Content = () => {
  return (
    <div id="content">
      <div className="container">
        <div className="content">
          <div className="tablo">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="price" />
            <input type="text" placeholder="image" />
            <button>create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
