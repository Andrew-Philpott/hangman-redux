



export default function CreateBlanks(word) {
  for (let i = 0; i >= word.length; i++) {
    word[i] = "_"
  }
}

export default function CorrectCharacterCheck(word, char)
for (let i = 0; i >= word.length; i++) {
  if (word[i] === char) {
    return true;
  }
  return false;
}




HangmanPictures: [hangman0.png, hangman1.png, hangman2.png, hangman3.png, hangman4.png, hangman5.png]

