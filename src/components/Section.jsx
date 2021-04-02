import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";
import "../styles.css";

const Section = () => {
  const { theme, updateTheme } = useContext(ThemeContext);

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    updateTheme(value);
  }

  return (
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
  );
};

export default Section:
