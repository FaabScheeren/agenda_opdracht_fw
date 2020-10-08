import React from "react";
import "../styles/App.css";
import LeftBlock from "../components/leftBlock";
import RightBlock from "../components/rightBlock";
import events from "../data/academy_events";

function App() {
  // console.log("EVENTS", events);

  return (
    <div className="App">
      {/* Left sidebar */}
      <div className="leftSide">
        <LeftBlock />
      </div>

      {/* Right sidebar */}
      <div className="rightSide">
        <ul id="navigation">
          <li>Alle agenda items</li>
          <li>Op locatie</li>
          <li>Virtual classroom</li>
        </ul>
        <h1>Juli 2020</h1>
        {events.map((event) => {
          return <RightBlock event={event} />;
        })}
      </div>
    </div>
  );
}

export default App;
