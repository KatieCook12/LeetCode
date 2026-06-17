function average(salary: number[]): number {

    return salary.sort((a, b) => a - b).slice(1, salary.length - 1).reduce((accumulator, currentValue) => accumulator + currentValue, 0) / (salary.length - 2);

};