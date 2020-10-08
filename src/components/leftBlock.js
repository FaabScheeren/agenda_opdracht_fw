import React from "react";
import months from "../data/months";
import "./leftBlock.css";

const leftBlock = () => {
  console.log("months", months);

  return (
    <div>
      <p id="breadcrumb">
        {">"} Frankwatching Academy {">"} Academy agenda
      </p>
      <h1>Academy agenda</h1>
      <p className="headFabio">Maand:</p>
      <ul id="monthsBlock">
        {months.map((month) => {
          return <li>{`${month.month} ${month.year}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default leftBlock;
