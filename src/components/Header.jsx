import "./Header.css";

export default function Header({
  condition,
  temperature,
  headline,
  onChangeLocation,
}) {
  function clickEurope() {
    onChangeLocation("europe");
  }

  function clickArctic() {
    onChangeLocation("arctic");
  }

  function clickSahara() {
    onChangeLocation("sahara");
  }

  function clickRainForest() {
    onChangeLocation("rainforest");
  }

  return (
    <header className="header">
      <div className="location-nav">
        <h3>Change location:</h3>
        <button
          type="button"
          id="europe"
          className="location-button"
          onClick={clickEurope}
        >
          🏰
        </button>
        <button
          type="button"
          id="arctic"
          className="location-button"
          onClick={clickArctic}
        >
          🥶
        </button>
        <button
          type="button"
          id="sahara"
          className="location-button"
          onClick={clickSahara}
        >
          🏖️
        </button>
        <button
          type="button"
          id="rainforest"
          className="location-button"
          onClick={clickRainForest}
        >
          🌴
        </button>
      </div>
      <div className="condition-temperature">
        {condition} {temperature}°C
      </div>
      <div className="headline">
        <h4>{headline}</h4>
      </div>
    </header>
  );
}
