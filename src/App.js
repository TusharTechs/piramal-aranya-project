import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Success from "./pages/Success/Success";
import NotFound from "./pages/NotFound/NotFound"; // Import your NotFound component
import { useState } from "react";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmission = () => {
    setFormSubmitted(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Homepage onFormSubmit={handleFormSubmission} />}
        />
        {formSubmitted ? (
          <Route path="/success" element={<Success />} />
        ) : (
          <Route path="*" element={<NotFound />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
