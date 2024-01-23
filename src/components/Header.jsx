import "./Header.css";

export default function Header({ condition, temperature, headline }) {
  return (
    <>
      <h1>
        {condition} {temperature}
      </h1>
      <p>{headline}</p>
    </>
  );
}
