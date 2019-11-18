import React from "react";
import "./Features.css";
import CardFeatures from "./CardFeatures";

let tabFeature = [
  {
    svg: "https://www.docplanner.com/img/flag.png",

    h2: "Leader in 10 countries",
    p:
      "Poland, Turkey, Spain, Italy ,Czech Republic, Mexico, Brazil,Colombia, Argentina and Chile"
  },
  {
    svg: "https://www.docplanner.com/img/visits.png",
    h2: "1.5 million appointments",
    p: "booked last month",
    trans: "trans"
  },

  {
    svg: "https://www.docplanner.com/img/patients.png",
    h2: "30 million unique patients",
    p: "visit us every month"
  },

  {
    svg: "https://www.docplanner.com/img/doctors.png",
    h2: " 2 million active doctors",
    p: "trust in our solutions",
    trans: "trans"
  }
];

const Features = () => {
  return (
    <div className="features">
      <div>
        <h3>
          The world's
          <br />
          biggest healthcare platform
        </h3>
        <p>
          We work from 6 offices all over the world, bringing Docplanner
          <br />
          Group to life in almost 20 countries.
        </p>
      </div>
      <div className="cards-features">
        {tabFeature.map(el => (
          <CardFeatures h2={el.h2} p={el.p} trans={el.trans} svg={el.svg} />
        ))}
      </div>
      <img
        src="https://www.docplanner.com/img/sygnet.svg"
        srcset="https://www.docplanner.com/img/sygnet.svg 1x, https://www.docplanner.com/img/sygnet@2x.svg 2x"
        className="svg-float"
      ></img>
    </div>
  );
};

export default Features;
