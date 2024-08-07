import Navbar from '@/components/Navbar';
import theheroesStarWarsLogo from '../assets/the-heroes-starwars.svg';
import '../App.css';

function StarWarsHome() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <div className = "logo-theheroes-container" >
          <img src={theheroesStarWarsLogo} className="logo-starwars" alt="The Heroes StarWars" />
        </div>
        <div className = "text-white">
          <h1>Welcome to StarWars Universe</h1>
        </div>
      </div>
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
    </div>
  );
}

export default StarWarsHome;