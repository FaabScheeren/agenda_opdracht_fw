import React from "react";
import "./rightBlock.css";

const rightBlock = (props) => {
  console.log("EVENTS IN COM", props);

  return (
    <div>
      <div style={{ borderBottom: "1px solid #E5E5E5" }}>
        <p>
          <span className="eventCategory">{props.event.category}</span>
          <span className="eventDuration">
            {" "}
            * {props.event.duration} * {props.event.location}
          </span>
        </p>
        <p className="eventName">{props.event.name}</p>
        <p className="eventSummary">{props.event.summary}</p>
      </div>
    </div>
  );
};

export default rightBlock;
