import React, { useEffect, useState } from "react";
import Coustomer from "../Coustomer/Coustomer";
import "./Coustomers.css";

const Coustomers = () => {
  // set sate
  const [coustomers, setCoustomers] = useState([]);
  //set use effect for fetch data fro api
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCoustomers(data));
  }, []);
  return (
    <div>
      <h2>hello</h2>
      <div className="container">
        {coustomers.map((coustomer) => (
          <Coustomer key={coustomer.id} coustomer={coustomer}></Coustomer>
        ))}
      </div>
    </div>
  );
};

export default Coustomers;
