import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DogsPage from "./components/Dogs/DogsPage";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import CartContext from "./Contexts/CartContext";

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [cart, addToCart] = useState([{}]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/v1/dogs");

      return res;
    };

    getData().then((res) => {
      // console.log(res.data);
      setAllDogs(res.data);
    });
    getData().catch((err) => console.log(err));
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, total, setTotal }}>
      <div className="App">
        <Router>
          <NavBar />
          <div className="page-container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/dogs"
                element={<DogsPage allDogs={allDogs} />}
              ></Route>
              <Route path="/checkout" element={<Cart />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </CartContext.Provider>
  );
}

export default App;
