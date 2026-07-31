import { NavLink } from "react-router-dom";

// Props: `sections` (array) is passed down from App.jsx.
// This component doesn't hold any state of its own — it just renders
// navigation links based on the data it receives.
export default function Navbar({ sections }) {
  return (
    <header className="navbar">
      <p className="navbar__title">Erasmus Diary</p>
      <p className="navbar__subtitle">Poland → Faro, Portugal</p>

      <ul className="flight-path">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        {sections.map((section) => (
          <li key={section.id}>
            <NavLink
              to={`/section/${section.slug}`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {section.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}
