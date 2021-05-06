import { getSuggestions } from "../API";

const debounce = (fn, delay) => {
  let timer;
  return function (...props) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...props);
    }, delay);
  };
};

let newOptions = [];
const GetSuggestions = async (word, keycode) => {
  try {
    if (keycode !== 32 && keycode !== 8 && keycode !== 13) {
      newOptions = await getSuggestions(word);
    }
  } catch (err) {
    console.log(err);
  }
};

export { debounce, GetSuggestions, newOptions };
