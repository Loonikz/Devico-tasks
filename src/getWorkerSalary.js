// Implement a class Worker (Worker), which will have the following
// properties: name, surname, rate (rate per day of work), days (number of
// days worked). The class must also have a getSalary() method that will
// display the employee's salary. The salary is the multiplication of the rate by
// the number of days worked. All its properties are private, and make getter
// methods to read them. For the rate property and for the days property, also
// make setter methods.

class Worker {

    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname;
    }

    getRate() {
        return this.rate;
    }

    setRate(rate) {
        this.rate = rate;
    }

    getDays() {
        return this.days;
    }

    setDays(days) {
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.getRate()); //outputs 10
console.log(worker.getDays()); //outputs 31
console.log(worker.getSalary()); //outputs 310 - what equal 10*31

worker.setRate(20); // let's increase rate
worker.setDays(10); // let's decrease days
console.log(worker.getSalary()); //outputs 200 - what equal 20*10
