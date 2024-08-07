import Navbar from '@/components/Navbar'
import theheroesStarWarsLogo from '../assets/the-heroes-starwars.svg'

function StarWarsHome() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <img src={theheroesStarWarsLogo} className="logo-starwars" alt="The Heroes StarWars" />
      </div>
      <div >
        <h1>Welcome to StarWars Universe</h1>
      </div>
    </>
  )
}

export default StarWarsHome