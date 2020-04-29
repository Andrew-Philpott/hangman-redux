import React from "react";
import PropTypes from "prop-types";
import Hangman0 from "../../assets/img/hangman0.png";
import Hangman1 from "../../assets/img/hangman1.png";
import Hangman2 from "../../assets/img/hangman2.png";
import Hangman3 from "../../assets/img/hangman3.png";
import Hangman4 from "../../assets/img/hangman4.png";
import Hangman5 from "../../assets/img/hangman5.png";
import Hangman6 from "../../assets/img/hangman6.png";

const hangmanPictures = [
  Hangman0,
  Hangman1,
  Hangman2,
  Hangman3,
  Hangman4,
  Hangman5,
  Hangman6,
];

export default function HangmanDisplay(props) {
  const pic = hangmanPictures[props.badGuessCount];
  return (
    <div>
      <p>Hangman Body Display</p>
      <img src={hangmanPictures[props.badGuessCount]} />
    </div>
  );
}

HangmanDisplay.propTypes = {
  badGuessCount: PropTypes.number,
};
