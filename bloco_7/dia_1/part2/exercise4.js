const replaceX = (string, item) => string.replace(/x/g, item);
const mainSkills = ['css', 'fisica', 'html', 'java script', 'matematica'];
const concatTemplate = replacedString => {
  return `${replacedString} Minhas cinco principais skills sao:\n
  ${mainSkills[0]}
  ${mainSkills[1]}
  ${mainSkills[2]}
  ${mainSkills[3]}
  ${mainSkills[4]}
  `
}
