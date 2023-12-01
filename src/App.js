import "./App.css";
import Login from "./components/login";
import Body from "./components/body";
import Cart from "./components/cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import appStore from "./components/redux";
import { Provider } from "react-redux";
import Card from "./components/card";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Body />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
