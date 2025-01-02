import React from "react";
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LayoutIMG from "../../IMG/otros/LAYOUTHOME.png";
import style from "./LayoutHome.module.css";

const Layout = () => {
  const sections = [
    {
      id: 1,
      name: "Desmoldeo",
      path: "/desmoldeo",
      position: { top: "36.2%", left: "0.2%", width: "35.2%", height: "63%" },
      styleClass: "secciondesbloqueda",
    },
    {
      id: 2,
      name: "Seccion deshabilitada",
      path: "/encajonado",
      position: { top: "0.3%", left: "35.3%", width: "59.5%", height: "48%" },
      styleClass: "seccionbloqueada",
    },
    {
      id: 3,
      name: "Seccion deshabilitada",
      path: "/paletizado",
      position: { top: "32.8%", left: "59.8%", width: "37.2%", height: "34%" },
      styleClass: "seccionbloqueada",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<InteractiveImage sections={sections} />} />
        {sections.map((section) => (
          <Route
            key={section.id}
            path={section.path}
            element={<Sector name={section.name} />}
          />
        ))}
      </Routes>
    </Router>
  );
};

const InteractiveImage = ({ sections }) => {
  const navigate = useNavigate();

  return (
    <div className={style.layoutContainer}>
      <img src={LayoutIMG} alt="Layout" className={style.backgroundImage} />
      {sections.map((section) => (
        <div
          key={section.id}
          className={`${style.interactiveSection} ${
            style[section.styleClass]
          }`}
          style={section.position}
          onClick={() => navigate(section.path)}
        >
          <span className={style.tooltip}>{section.name}</span>
        </div>
      ))}
    </div>
  );
};

const Sector = ({ name }) => (
  <div className={style.sectorContainer}>
    <h1>{name}</h1>
    <p>Bienvenido a {name}.</p>
  </div>
);

export default Layout;