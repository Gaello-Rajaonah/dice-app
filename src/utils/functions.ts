import { NumberDictionary } from "./types";

const generatePlayerArray = (N: number) => {
  const result = [];


  for (let i = 0; i < N; i++) {
    result.push(i);
  }

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}


const rollDice = () => {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  return diceValue;
}

const findKeyWithHighestValue = (dictionary: NumberDictionary) => {
  let maxKey = null;
  let maxValue = -Infinity;

  for (const key in dictionary) {
    if (dictionary.hasOwnProperty(key)) {
      const value = dictionary[key];
      if (value > maxValue) {
        maxValue = value;
        maxKey = key;
      }
    }
  }

  return maxKey;
}

const displayPlayer = (index: number | null) => {
  return index !== null ? index + 1 : ''
}

export { generatePlayerArray, rollDice, findKeyWithHighestValue,displayPlayer }