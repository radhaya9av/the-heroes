import "../styles/Characters.scss";

function Characters({ data, onClick }) {
  return (
    <div className="characters-container">
      {data.map((dataItem) => {
        return (
          <div
            key={dataItem.id}
            className="character-card"
            style={{
              background: `url(${dataItem.thumbnail.path}.${dataItem.thumbnail.extension}) no-repeat center`,
              backgroundSize: "cover",
            }}
            onClick={() => onClick(dataItem.id)}
          >
            <div className="caption">{dataItem.name}</div>
            <div className="caption bottom">View Comics</div>
          </div>
        );
      })}
    </div>
  );
}

export default Characters;