// Props:
//   question — { id, prompt, answer }
//
// This is now a plain, read-only reflection card: no form, no state.
// It just displays the question and whatever you've written in
// `src/data/sections.js` as that question's `answer`.
export default function QuestionCard({ question }) {
  const hasAnswer = question.answer && question.answer.trim().length > 0;

  return (
    <article className="reflection-card">
      <p className="reflection-card__tag">Question {question.id.replace("q", "")}</p>
      <h3 className="reflection-card__question">{question.prompt}</h3>
      <p className={hasAnswer ? "reflection-card__answer" : "reflection-card__placeholder"}>
        {hasAnswer
          ? question.answer
          : "Write your answer in src/data/sections.js →"}
      </p>
    </article>
  );
}
