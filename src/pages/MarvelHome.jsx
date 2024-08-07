import Navbar from '@/components/Navbar';
import theheroesMarvelLogo from '../assets/the-heroes-marvel.svg';
import '../App.css';
import Search from '../components/Search';

function MarvelHome() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <div className= "logo-theheroes-container logo-marvel " >
          <img src={theheroesMarvelLogo} className="logo-marvel" alt="The Heroes Marvel" />
        </div>
        <div className = "text-white">
          <h1>Welcome to Marvel Universe</h1>
        </div>
        <div>
          <Search />
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

export default MarvelHome;