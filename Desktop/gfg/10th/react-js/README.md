# Erasmus Diary — Poland → Faro

A small React template for writing up your Erasmus reflection while
revising the course concepts. This version is read-only: you write your
answers directly into the data file, and the app just displays them.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Where to write your answers

Open `src/data/sections.js`. Each question has an `answer` field —
fill it in with your own text:

```js
{ id: "q1", prompt: "Introduce yourself.", answer: "Hi, I'm..." }
```

Leave `answer: ""` empty and the page shows a placeholder instead, so you
can fill things in gradually. Save the file and the browser updates
automatically (Vite hot-reloads).

## Where each concept lives

| Concept        | File(s)                                                                 |
| -------------- | ------------------------------------------------------------------------ |
| Components     | Everything in `src/components/` and `src/pages/`                         |
| JSX            | Every `.jsx` file — the HTML-like syntax returned from each component    |
| Props          | `Navbar`, `QuestionCard`, `SectionPage` all receive data via props instead of hardcoding it |
| State          | `useState` in `App.jsx` (sections, loading)                              |
| Event handling | `NavLink`/`Link` clicks are handled by React Router under the hood       |
| useEffect      | Fetching the section/question data in `App.jsx`                          |
| React Router   | `main.jsx` (`BrowserRouter`), `App.jsx` (`Routes`/`Route`), `Navbar.jsx` (`NavLink`), `SectionPage.jsx` (`useParams` for the dynamic `:slug`) |
| API calls      | `src/api/erasmusApi.js` — a mocked async call (swap it for a real `fetch` any time); called from a `useEffect` in `App.jsx` |

## How the data flows

1. `App.jsx` fetches the list of sections/questions — including your
   written answers — from `src/data/sections.js`, via the mock API in
   `src/api/erasmusApi.js`.
2. `sections` is passed down as a **prop** to `Navbar`, `Home`, and
   `SectionPage`.
3. `SectionPage` reads the current topic from the URL with `useParams`
   and renders a `QuestionCard` per question.
4. `QuestionCard` just displays `question.prompt` and `question.answer`
   as plain text — no form, no editable state.

## Editing the questions

All the questions (and your answers) live in `src/data/sections.js` as
one array of sections. Add, remove, or reword questions there — the
routes and navigation update automatically since they're generated from
this data instead of being hardcoded per page.

## Adding a real backend later

Replace the body of `fetchSections()` in `src/api/erasmusApi.js` with a
real `fetch()` call — the commented-out example is already in that file.
Nothing else in the app needs to change, since every component only ever
sees the resolved data.
