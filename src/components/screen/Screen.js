import "./Screen.css";

export default function Screen({ calculator }) {
  return (
    <div className="screen">
      {!calculator.number ? 0 : calculator.number ? calculator.number : calculator.result}
    </div>
  );
}
