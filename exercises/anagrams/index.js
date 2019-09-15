// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//METHOD 2

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/^[/w]/g, "")
    .split("")
    .sort()
    .join("");
}

//METHOD 1

// function anagrams(stringA, stringB) {
//   Amap = charMap(stringA);
//   Bmap = charMap(stringB);

//   if (Object.keys(Amap).length !== Object.keys(Bmap).length) return false;

//   for (let key in Amap) {
//     if (Amap[key] !== Bmap[key]) return false;
//   }

//   return true;
// }

// function charMap(str) {
//   const map = {};
//   for (char of str.replace(/^[/w]/g, "")) {
//     map[char] ? map[char]++ : (map[char] = 1);
//   }
//   return map;
// }

module.exports = anagrams;
