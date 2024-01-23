import "./Header.css";

export default function Header({
  condition,
  temperature,
  headline,
  onChangeLocation,
}) {
  function handleClick() {
    onChangeLocation("arctic");
  }
  return (
    <>
      <h1>
        {condition} {temperature}
      </h1>
      <p>{headline}</p>
      <button onClick={handleClick}>arctic</button>
    </>
  );
}
