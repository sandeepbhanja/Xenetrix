import "./App.css";
import "./categories.style.scss";
import Home from "./routes/home/home.component";
import { Route,Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path='/auth' element={<Authentication/>}></Route>
        <Route index={true} element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
