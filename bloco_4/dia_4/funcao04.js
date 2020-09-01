function biggerName(array) {
    let nameSize = 0;
    let bigName = array[0];
    for (let key in array) {
        if (array[key].length > nameSize) {
            nameSize = array[key].length;
            bigName = array[key];
        }
    }
    return bigName;
}

console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));