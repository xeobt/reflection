import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SectionPage from "./pages/SectionPage";
import NotFound from "./pages/NotFound";
import { fetchSections } from "./api/erasmusApi";

export default function App() {
  // `sections` (including your written answers) is loaded asynchronously
  // to mimic a real API call — see src/api/erasmusApi.js.
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    fetchSections().then((data) => {
      if (!isCancelled) {
        setSections(data);
        setIsLoading(false);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  if (isLoading) {
    return <p className="loading-state">Loading your itinerary…</p>;
  }

  return (
    <div className="app-shell">
      <Navbar sections={sections} />
      <Routes>
        <Route path="/" element={<Home sections={sections} />} />
        <Route path="/section/:slug" element={<SectionPage sections={sections} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
