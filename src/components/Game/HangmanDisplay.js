import React from "react";
import PropTypes from "prop-types";

const hangmanPictures = [
  <img src="../../assets/img/hangman0.png" />,
  <img src="/../../assets/img/hangman1.png" />,
  <img src="/../../assets/img/hangman2.png" />,
  <img src="/../../assets/img/hangman3.png" />,
  <img src="/../../assets/img/hangman4.png" />,
  <img src="/../../assets/img/hangman5.png" />,
  <img src="/../../assets/img/hangman6.png" />,
];

export default function HangmanDisplay(props) {
  function generateUrl() {
    return "../../assets/img/hangman" + props.badGuessCount + ".png";
  }

  const pic = hangmanPictures[props.badGuessCount];

  return (
    <div>
      <p>Hangman Body Display</p>
      <img src={generateUrl()} />
      <img src="hangman0.png" />
      {hangmanPictures[0] && hangmanPictures[0]}
      {pic}
    </div>
  );
}

HangmanDisplay.propTypes = {
  badGuessCount: PropTypes.number,
};
//Input  word -> save word to state slice -> return back to page
