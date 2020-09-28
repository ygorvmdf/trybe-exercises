const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const allLessons = {
    lesson1: Object.assign({}, lesson1),
    lesson2: Object.assign({}, lesson2),
    lesson3: Object.assign({}, lesson3)
};

const verifyPair = (object, key, value) => {
    const pair = `${key} ${value}`;
    const objectPairs = Object.keys(object);
    for (let i = 0; i < objectPairs.length; i += 1) {
      if (Object.entries(object)[i].join(' ') === pair) {
        return true;
      }
    }
    return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

