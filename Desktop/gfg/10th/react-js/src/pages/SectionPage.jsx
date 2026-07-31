import { useParams } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";

// Props:
//   sections — full list of sections (App.jsx passes this down)
//
// `useParams` reads the dynamic :slug segment from the URL — this is what
// lets one single route/component handle every section instead of writing
// a page per topic.
export default function SectionPage({ sections }) {
  const { slug } = useParams();
  const section = sections.find((item) => item.slug === slug);

  if (!section) {
    return (
      <div className="section-header">
        <h2>Section not found</h2>
        <p>Check the link — that topic doesn't exist.</p>
      </div>
    );
  }

  return (
    <section>
      <div className="section-header">
        <p className="section-header__eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
        <p>{section.subtitle}</p>
      </div>

      {section.questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </section>
  );
}
