import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="section-header">
      <h2>Lost somewhere between Poland and Faro</h2>
      <p>
        That page doesn't exist. <Link to="/">Go back home</Link>.
      </p>
    </div>
  );
}
