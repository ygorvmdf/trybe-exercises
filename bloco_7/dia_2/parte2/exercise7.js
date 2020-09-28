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

const getValueByNumber = (object, int) => {
  const valueList = Object.values(object);
  return valueList[int];
}

console.log(getValueByNumber(lesson1, 0));
