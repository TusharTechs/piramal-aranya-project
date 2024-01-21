import { useState } from "react";
import Amenities from "../../components/Amenities/Amenities";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Services from "../../components/Services/Services";
import Spectacular from "../../components/Spectacular/Spectacular";
import ContactPopup from "../../components/ContactPopup/ContactPopup";

function Homepage({ onFormSubmit }) {
  const [showContactPopup, setShowContactPopup] = useState(true);

  const handleCloseContactPopup = () => {
    setShowContactPopup(false);
  };

  return (
    <div>
      <Header />
      <Main />
      <Services />
      <Amenities />
      <Spectacular onFormSubmit={onFormSubmit} />
      <Footer />
      {showContactPopup && (
        <>
          <div className="overlay" onClick={handleCloseContactPopup}></div>
          <ContactPopup
            onFormSubmit={onFormSubmit}
            onClose={handleCloseContactPopup}
          />
        </>
      )}
    </div>
  );
}

export default Homepage;
