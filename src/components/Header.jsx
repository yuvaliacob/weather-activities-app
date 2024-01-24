import "./Header.css";

export default function Header({
  currentLocation,
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
      <div className="current-location">
        {/* <h5>Location: {currentLocation}</h5> */}
      </div>
      <div className="location-nav">
        <h4>Change location:</h4>
        <button
          type="button"
          id="europe"
          className="location-button"
          onClick={clickEurope}
          disabled={location === "Europe"}
        >
          🏰
        </button>
        <button
          type="button"
          id="arctic"
          className="location-button"
          onClick={clickArctic}
          disabled={location === "Arctic"}
        >
          🥶
        </button>
        <button
          type="button"
          id="sahara"
          className="location-button"
          onClick={clickSahara}
          disabled={location === "Sahara"}
        >
          🏖️
        </button>
        <button
          type="button"
          id="rainforest"
          className="location-button"
          onClick={clickRainForest}
          disabled={location === "Rainforest"}
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
