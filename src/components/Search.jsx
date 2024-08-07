import { useState } from "react";
import Characters from "./Characters";
import Comics from "./Comics";

function Search() {
  const [characterName, setCharacterName] = useState("");
  const [characterData, setCharacterData] = useState(null);
  const [comicData, setComicData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    getCharacterData();
  };

  const handleChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleReset = () => {
    setCharacterName("");
    setCharacterData(null);
    setComicData(null);
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter character name"
          onChange={handleChange}
        />
        <div className="buttons">
          <button type="submit">Get Character Data</button>
          <button type="reset" className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {!comicData && characterData && characterData.results[0] && (
        <Characters data={characterData.results} onClick={getComicData} />
      )}

      {comicData && comicData.results[0] && (
        <Comics data={comicData.results} onClick={() => {}} />
      )}
    </>
  );
}

export default Search;