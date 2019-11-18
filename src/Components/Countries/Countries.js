import React from "react";
import "./Countries.css";
import CardCountries from "./CardCountries";
let count = [
  {
    image: "https://www.docplanner.com/images/warsaw.png",
    p: "Warsaw",
    button: "see Opening"
  },
  {
    image: "https://www.docplanner.com/images/barcelona.png",
    p: "Barcelona",
    button: "see Opening"
  },
  {
    image: "https://www.docplanner.com/images/istanbul.png",
    p: "Istanbul",
    button: "see Opening"
  },
  {
    image: "https://www.docplanner.com/images/rome.png",
    p: "Rome",
    button: "see Opening"
  },
  {
    image: "https://www.docplanner.com/images/mexico-city.png",
    p: "Mexico",
    button: "see Opening"
  },
  {
    image: "https://www.docplanner.com/images/curitiba.png",
    p: "Curitibia",
    button: "see Opening"
  }
];

const Countries = () => {
  return (
    <div>
      <div className="intro-countries">
        <h1>
          Improve the lives of millions.
          <br /> Change yours forever
        </h1>
        <p>
          More than 1000 team mates share our same vision, goals and passion.
          <br />> With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City
          and
          <br /> Curitiba, our search for great talent never stops.
        </p>
      </div>
      <div className="countries-img">
        {count.map(el => (
          <CardCountries image={el.image} p={el.p} button={el.button} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
