import "./App.css";
import { FaHome } from "react-icons/fa";
import { AiFillShopping, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

function App() {
  const [showIcon, setShowIcon] = useState(false);
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <span>Wei Site</span>
        </div>
        <div className="info">
          <div className="item">
            <FaHome />
            <span>Home</span>
          </div>
          <div className="item">
            <AiFillShopping color="#fff" />
            <span>Shop</span>
          </div>
          <div className="item">
            <span>About</span>
          </div>
        </div>
      </div>
      {/* <AiFillEye /> */}

      {showIcon ? (
        <AiFillEye
          onClick={() => setShowIcon(!showIcon)}
          style={{ userSelect: "none", cursor: "pointer" }}
        />
      ) : (
        <AiFillEyeInvisible
          onClick={() => setShowIcon(!showIcon)}
          style={{ userSelect: "none", cursor: "pointer" }}
        />
      )}
    </div>
  );
}

export default App;
