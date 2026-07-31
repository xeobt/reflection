import { useEffect, useState } from "react";

// Props:
//   value    — the saved answer for this question (string)
//   onSave   — callback(newValue) fired when the user saves
//
// This is a controlled form: the textarea's value lives in this
// component's own state (`draft`), and every keystroke fires the
// onChange event handler that updates it.
export default function AnswerForm({ value, onSave }) {
  const [draft, setDraft] = useState(value);
  const [justSaved, setJustSaved] = useState(false);

  // Keep the draft in sync if the saved value ever changes from outside
  // (e.g. loaded asynchronously from storage after this component mounts).
  useEffect(() => {
    setDraft(value);
  }, [value]);

  // Clear the "Saved" confirmation a couple of seconds after it appears.
  useEffect(() => {
    if (!justSaved) return;
    const timer = setTimeout(() => setJustSaved(false), 2000);
    return () => clearTimeout(timer);
  }, [justSaved]);

  function handleChange(event) {
    setDraft(event.target.value);
    if (justSaved) setJustSaved(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSave(draft);
    setJustSaved(true);
  }

  const isUnsaved = draft !== value;

  return (
    <form className="answer-form" onSubmit={handleSubmit}>
      <textarea
        value={draft}
        onChange={handleChange}
        placeholder="Write your answer here…"
      />
      <div className="answer-form__footer">
        <span className={`answer-form__status ${justSaved ? "saved" : ""}`}>
          {justSaved ? "Saved ✓" : isUnsaved ? "Unsaved changes" : ""}
        </span>
        <button type="submit" className="btn-save" disabled={!isUnsaved}>
          Save answer
        </button>
      </div>
    </form>
  );
}
