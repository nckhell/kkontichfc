export const ucFirstLetterOfEveryWord = (string: string): string => {
  return string
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
};

export const anotherFunction = () => {
  return "test";
};
