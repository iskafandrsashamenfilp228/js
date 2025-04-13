let calculatorchik = {
    num0: null,
    num1: null,
    read() {
        this.num0 = +prompt('Напечатай первое число : ', 0)
        this.num1 = +prompt('Напечатай второе число : ', 0)
    },
    sum() {
        return this.num0 + this.num1
    },
    mul() {
        return this.num0 * this.num1
    }
}
calculatorchik.read()
console.log(calculatorchik.sum())
console.log(calculatorchik.mul())

