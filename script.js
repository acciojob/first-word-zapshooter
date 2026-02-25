function firstWord(s) {
  const trimmed = s.trimStart();
  const idx = trimmed.indexOf(' ');
  return idx === -1 ? trimmed : trimmed.substring(0, idx);
}
// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));