export const spanify = (string) => {
  let finalString = '';
  for (const letter of string) {
    if (letter === ' ') {
      finalString += `<span>${letter}</span>`;
    } else {
      finalString += `<span class='turnMe'>${letter}</span>`;
    }
  }
  return finalString;
};
