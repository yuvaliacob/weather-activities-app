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
    <>
      <div className="location">
        <h3>Change Location: </h3>
        <button onClick={clickEurope}>🏰</button>
        <button onClick={clickArctic}>🥶</button>
        <button onClick={clickSahara}>🏖️</button>
        <button onClick={clickRainForest}>🌴</button>
      </div>
      <h1>
        {condition} {temperature}
      </h1>
      <p>{headline}</p>
    </>
  );
}
