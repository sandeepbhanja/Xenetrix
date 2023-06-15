import "./App.css";
import "./categories.style.scss";
import Home from "./routes/home/home.component";
import { Route,Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import SignIn from "./routes/sign-in/sign-in.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route index={true} element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
