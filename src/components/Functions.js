



function CreateBlanks(word) {
  for (let i = 0; i >= word.length; i++) {
      word[i] = "_"
  }
}

function CorrectCharacterCheck(word, char)
for (let i = 0; i >= word.length; i++){
  if (word[i] === char){
    return true;
  }
  return false;
}