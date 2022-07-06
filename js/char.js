/* 
Character Countdown

- Input that disables itself after a set character limit (15)
- label that reflects the total remaining characters
*/
// const counterNum = document.getElementById("num");

// increaseNum.addEventListener("click", (e) => {
//   counterNum.value++;
//   if (counterNum.value > 0) {
//     counterNum.style.color = "green";
//   }
// });

const charLimit = document.getElementById("charLimit");
const charCount = document.getElementById("charCount");

charLimit.addEventListener("keyup", () => {
  let letters = charLimit.value.split("");

  charCount.innerText = 15 - letters.length;

  if (letters.length >= 15) {
    charLimit.disabled = true;
  }
});

console.log(charLimit);
console.log(charCount.innerText);
