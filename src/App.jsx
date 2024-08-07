import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import MarvelHome from './pages/MarvelHome';
import StarWarsHome from './pages/StarWarsHome';
import theheroesLogo from '/the-heroes.svg'
import theheroesMarvelLogo from './assets/the-heroes-marvel.svg'

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      {isHomePage && <Navbar />}
      {isHomePage && (
        <div className="logo-container logo">
          <img src={theheroesLogo} className="logo" alt="The Heroes" />
        </div>
      )}
      {isHomePage && (
        <div>
          <Link to="/starwars-home">
            <h1>StarWars Home</h1>
          </Link>
          <Link to="/marvel-home">
            <img src={theheroesMarvelLogo} className="logo-marvel" alt="The Heroes Marvel" />
          </Link>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marvel-home" element={<MarvelHome />} />
        <Route path="/starwars-home" element={<StarWarsHome />} />
      </Routes>
    </div>
  );
}

function Home() {
  return null;
}

export default App;