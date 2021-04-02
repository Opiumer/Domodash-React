import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ThemeContext from "./ThemeContext";
import Navbar from "./components/Navbar";

import "./styles.css";

function App() {
  // Le thème est en fait une classe CSS qui englobera notre app
  // Ca change juste le couleur de la typo ...
  const [theme, setTheme] = useState("light"); //a terme allez chercher la value du preset

  const contextValue = {
    theme,
    updateTheme: setTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={theme}>
        <div className="container-fluid main w-100 h-100 p-0 m-0">
          <Navbar />

          <div className="row sectionRow w-100 p-0 m-0">
            <div className="col-1">
              <button
                className="btn btn-secondary btnCollapse mb-1"
                type="button"
                data-toggle="collapse"
                data-target="#collapsible1"
                aria-expanded="false"
                aria-controls="collapsible1"
              ></button>
            </div>
            <div className="col sectionName">SECTION NAME</div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
