import "./Header.css";

export default function Header({ condition, temperature }) {
  return (
    <>
      <h1>
        {condition} {temperature}
      </h1>
    </>
  );
}
