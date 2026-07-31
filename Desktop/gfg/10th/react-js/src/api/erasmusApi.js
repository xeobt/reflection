import sections from "../data/sections";

// In a real app this would be `fetch("/api/sections")`. It's mocked here with
// a Promise + setTimeout so the app has a genuine async call to await inside
// useEffect, complete with a loading state and (simulated) failure handling.
export function fetchSections({ simulateDelayMs = 500 } = {}) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(sections), simulateDelayMs);
  });
}

// Swap this out for a real endpoint, e.g.:
//
// export async function fetchSections() {
//   const response = await fetch("https://your-api.example.com/sections");
//   if (!response.ok) throw new Error("Failed to load sections");
//   return response.json();
// }
