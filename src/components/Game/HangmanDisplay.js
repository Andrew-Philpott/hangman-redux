import React from "react";
import PropTypes from "prop-types";

export default function HangmanDisplay(props) {
  const generateUrl = () => {
    return "~/public/hangman" + props.badGuessCount + ".png";
  };

  return (
    <div>
      <p>Hangman Body Display</p>
      <img src={generateUrl()} />
    </div>
  );
}

HangmanDisplay.propTypes = {
  badGuessCount: PropTypes.number,
};

//Input  word -> save word to state slice -> return back to page
