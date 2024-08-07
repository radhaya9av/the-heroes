import Navbar from '@/components/Navbar'
import theheroesMarvelLogo from '../assets/the-heroes-marvel.svg'

function MarvelHome() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <img src={theheroesMarvelLogo} className="logo-marvel" alt="The Heroes Marvel" />
      </div>
      <div >
        <h1>Welcome to Marvel Universe</h1>
      </div>
      {/* <div>
        <Search />
      </div> */}
    </>
  )
}

export default MarvelHome