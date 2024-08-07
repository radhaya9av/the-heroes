import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import MarvelHome from './pages/MarvelHome';
import StarWarsHome from './pages/StarWarsHome';
import theheroesLogo from '/the-heroes.svg'
import theheroesMarvelLogo from './assets/the-heroes-marvel.svg'
import theheroesStarWarsLogo from './assets/the-heroes-starwars.svg'

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
    <div className="page-container">
      <div className="content-wrap mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
        {isHomePage && <Navbar />}
        {isHomePage && (
          <div className="logo-theheroes-container logo">
            <img src={theheroesLogo} className="logo" alt="The Heroes" />
          </div>
        )}
        {isHomePage && (
          <div className="logo-container">
            <Link to="/starwars-home">
              <img src={theheroesStarWarsLogo} className="logo-starwars" alt="The Heroes StarWars" />
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
      {isHomePage && (
        <footer className="footer py-4 flex justify-center pb-8">
          <p className="footer-text text-white text-sm flex items-center gap-1">
            Made with ❤️ by
            <a
              href="https://github.com/radhaya9av"
              target="_blank"
              className="text-white font-bold"
            >
              RADHA
            </a>
          </p>
        </footer>
      )}
    </div>
  );
}

function Home() {
  return null;
}

export default App;