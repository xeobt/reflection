import { Link } from "react-router-dom";

// Props: `sections` — used just to link to the first section.
export default function Home({ sections }) {
  const firstSection = sections[0];

  return (
    <section className="hero">
      <p className="hero__eyebrow">A React practice project</p>
      <h1>One semester, two countries, a lot of new JSX.</h1>
      <p>
        This is a starter template for writing up your Erasmus story while
        revising the React concepts from the course: components, JSX, props,
        state, event handling, useEffect, React Router, forms, and a mock API
        call.
      </p>

      <div className="hero__route">
        <span className="dot" />
        <span>Poland</span>
        <span className="line" />
        <span>Faro</span>
        <span className="dot" />
      </div>

      {firstSection && (
        <p>
          <Link to={`/section/${firstSection.slug}`}>
            Check the answers
          </Link>
        </p>
      )}
    </section>
  );
}
