import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./views/home";
import Writters from "./views/writters";
import Categories from "./views/categories";
import Signin from "./views/auth/signin";
import Signup from "./views/auth/signup";
import Header from "./components/header";
import Profil from "./views/profil";
import "./App.css";

function App() {
  return <div className="w-full h-screen	 dark:bg-slate-800 ">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up"element={<Signup />} />
      <Route path="/writers" element={<Writters />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/profil" element={<Profil />} />
    </Routes>
    </BrowserRouter>

  </div>;
}

export default App;
