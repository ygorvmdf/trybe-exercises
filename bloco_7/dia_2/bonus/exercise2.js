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

const creatReport = (object, professor) => {
    const newObject = {};
    newObject.professor = professor;
    newObject.aulas = [];
    newObject.estudantes = 0;
    for (index in object) {
        if (object[index].professor === professor) {
            newObject.aulas.push(object[index].materia);
            newObject.estudantes += object[index].numeroEstudantes;
        }
    }
    return newObject;
}

console.log(creatReport(allLessons, 'Maria Clara'));
