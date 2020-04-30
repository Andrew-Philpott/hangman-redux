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

const imageStyle = {
  border: "2px solid #efefef",
  borderRadius: 10,
  margin: 20,
};

export default function HangmanDisplay(props) {
  let pic = null;
  if (props.badGuessCount === -1) {
    pic = hangmanPictures[0];
  } else {
    pic = hangmanPictures[props.badGuessCount];
  }
  // const pic = hangmanPictures[props.badGuessCount];
  return (
    <div>
      <br />
      <h1>Hangman</h1>
      <img src={pic} style={imageStyle} />
    </div>
  );
}

HangmanDisplay.propTypes = {
  badGuessCount: PropTypes.number,
};
