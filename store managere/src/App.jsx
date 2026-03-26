import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/login";
import AllProducts from "./components/allProducts";
import Product from "./components/product";
import AddPost from "./components/addPost";
import Search from "./components/search";
import API from "./API";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

function App() {
  const [logIn, setLogIn] = useState(false);
  const [username, setUsername] = useState("");
  const [products, setProducts] = useState([]);
  const [searchedProduct, setSearchedProducts] = useState([]);
  const [categorie, setCategorie] = useState("all");

  const handLogin = (user) => {
    setUsername(user);
    setLogIn(true);
    localStorage.setItem("user", user);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    setLogIn(false);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUsername(savedUser);
      setLogIn(true);
    }
  }, []);

  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setProducts(res.data);
        setSearchedProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = (searchProduct) => {
    const filtred = products.filter((product) => {
      const searched = product.productName
        .toLowerCase()
        .includes(searchProduct.toLowerCase());
      const matchCategorie =
        categorie === "all" || product.categorie === categorie;
      return searched && matchCategorie;
    });
    setSearchedProducts(filtred);
  };
  return (
    <Router>
      {!logIn ? (
        <Login handleLogin={handLogin} />
      ) : (
        <div className="app">
          <nav className="nav">
            <Search handleSearch={handleSearch} handleLogout={handleLogout} />
            <select
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
            >
              <option value="all">all products</option>
              <option value="pc">PC</option>
              <option value="monitor">Monitor</option>
              <option value="accessories">accessories</option>
              <option value="digital">Digital items / keys</option>
            </select>
            <Link to="/addPost" className="nav-link">
              create Product
            </Link>
            <Link to="/allProducts" className="nav-link">
              Our product
            </Link>
            <button type="button" onClick={handleLogout}>
              logout
            </button>
          </nav>
          <Routes>
            <Route
              path="/allProducts"
              element={
                <AllProducts
                  products={searchedProduct}
                />
              }
            />
            <Route path="/addPost" element={<AddPost />} />
            <Route
              path="/product/:id"
              element={
                <Product
                  products={products}
                  setProducts={setProducts}
                />
              }
            />
            <Route path="*" element={<Navigate to="/allProducts" />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
