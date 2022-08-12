import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { Homepage } from "./Homepage";
import { HotelsPage } from "./HotelsPage";
import { ResultsPage } from "./ResultsPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/hotels-page":
        title = "";
        metaDescription = "";
        break;
      case "/results-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/hotels-page" element={<HotelsPage />} />

      <Route path="/results-page" element={<ResultsPage />} />
    </Routes>
  );
}
export default App;
