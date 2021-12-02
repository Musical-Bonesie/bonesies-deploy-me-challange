import React, { useState } from "react";
import { randomConfetti } from "../../utils/actions";
import "./Home.scss";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(userInput);
    randomConfetti();
  };

  return (
    <div className="home">
      <div className={name ? "visable" : "hidden"}>
        <h2>CONGRATULATIONS {name.toUpperCase()}!!</h2>
        <p>You have successfully deployed an app!</p>
      </div>
      <form className="home__form" onSubmit={handleSubmit}>
        <h1>I is Home Page!</h1>
        <label className="home__form-label">
          Type In Your Name
          <input
            className="home__form-input"
            placeholder="Type your name here..."
            type="text"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          ></input>
        </label>
        <button className="btn bouncy" type="submit" value="Submit">
          CELEBRATE!
        </button>
      </form>
    </div>
  );
}
