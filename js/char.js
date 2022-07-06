/* 
Character Countdown

- Input that disables itself after a set character limit (15)
- label that reflects the total remaining characters
*/

const charLimit = document.getElementById("charLimit");
const charCount = document.getElementById("charCount");

charLimit.addEventListener("keyup", () => {
  let letters = charLimit.value.split("");

  charCount.innerText = 15 - letters.length;

  if (letters.length >= 15) {
    charLimit.disabled = true;
  }
});
