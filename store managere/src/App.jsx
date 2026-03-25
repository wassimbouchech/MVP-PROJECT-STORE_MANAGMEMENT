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

  const handLogin = (user) => {
    setUsername(user);
    setLogIn(true);
    localStorage.setItem("user", user);
  };

  const handleSearch = (searchProduct) => {
    const searched = products.filter((product) =>
      product.name.toLowerCase().includes(searchProduct.toLowerCase()),
    );
    setSearchedPosts(searched);
  };

  useEffect(() => {
    axios
      .get(API)
      .then(function (res) {
        setProducts(res.data);
        setSearchedProducts(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  console.log(products);

  const pages = () => {
    if (page === "allProducts") {
      return <AllProducts />;
    } else if (page === "product") {
      return <Product />;
    } else if (page === "addPost") {
      return <AddPost />;
    }
  };
  if (!logIn) return <Login handleLogin={handLogin} />;
  return (
    <div className="app">
      <nav className="nav">
        <div className="logo"></div>
        <Search handleSearch={handleSearch} />
      </nav>
      {pages()}
    </div>
  );
}

export default App;
