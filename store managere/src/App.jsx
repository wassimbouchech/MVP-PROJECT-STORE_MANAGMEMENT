import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/login";
import AllProducts from "./components/allProducts";
import Product from "./components/product";
import AddPost from "./components/addPost";
import Search from "./components/search";
import API from "./API";
import axios from "axios";

function App() {
  const [logIn, setLogIn] = useState(false);
  const [username, setUsername] = useState("");
  const [page, setPage] = useState("allProducts");
  const [products, setProducts] = useState([]);
  const [searchedProduct, setSearchedProducts] = useState([]);
  const [categorie, setCategorie] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const pages = () => {
    if (page === "allProducts") {
      return (
        <AllProducts
          products={searchedProduct}
          setPage={setPage}
          setProducts={setProducts}
          setSelectedProduct={setSelectedProduct}
        />
      );
    } else if (page === "product") {
      return (
        <Product
          product={selectedProduct}
          products={products}
          setPage={setPage}
          setProducts={setProducts}
        />
      );
    } else if (page === "addProduct") {
      return <AddPost />;
    }
  };
  if (!logIn) return <Login handleLogin={handLogin} />;
  return (
    <div className="app">
      <nav className="nav">
        <div className="logo"></div>
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
        <div onClick={() => setPage("addProduct")} className="nav-link">
          create Product
        </div>
        <div onClick={() => setPage("allProducts")} className="nav-link">
          Our product
        </div>
        <button type="button" onClick={handleLogout}>
          logout
        </button>
      </nav>
      {pages()}
    </div>
  );
}

export default App;
