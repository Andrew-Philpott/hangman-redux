import React from "react";

export default function LetterDisplay(props) {
  return (
    <div>
      <p>(Handles Displaying the already guessed incorrect Letters)</p>
      <h1>{props.wordAppearsAs}</h1>
    </div>
  );
}
