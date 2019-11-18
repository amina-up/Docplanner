import React from "react";
import "./App.css";
import Header from "./Components/header/Header";
import DoctorPatient from "./Components/Cards/DoctorPatient";
import Features from "./Components/Features/Features";
import Countries from "./Components/Countries/Countries";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <DoctorPatient />
      <Features />
      <Countries />
      <Footer />
    </div>
  );
}

export default App;
