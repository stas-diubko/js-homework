'use strict'

// class Worker {
// 	constructor (name, surname, rate, days) {
// 		this.name = name;
// 		this.surname = surname;
// 		this.rate = rate;
// 		this.days = days;
// 	}

// 	getSalary () {
// 		return this.rate * this.days;
// 	}
// }

// var worker = new Worker('Ivan', 'Ivanov', 20, 31);
// var worker2 = new Worker('Petr', 'Petrov', 30, 30);

// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());

// console.log(worker2.name);
// console.log(worker2.surname);
// console.log(worker2.rate);
// console.log(worker2.days);
// console.log(worker2.getSalary());

// (function () {
// 	console.log('salary of workers = ' + (worker.getSalary() + worker2.getSalary()));
// }());



// 2)

// class Worker {
// 	constructor (name, surname, rate, days) {
// 		this._name = name;
// 		this._surname = surname;
// 		this._rate = rate;
// 		this._days = days;
// 	}

// 	get name () {
// 		return this._name;
// 	}
// 	get surnamename () {
// 		return this._surname;
// 	}
// 	get rate () {
// 		return this._rate;
// 	}
// 	get days () {
// 		return this._days;
// 	}

// 	getSalary () {
// 		return this.rate * this.days;
// 	}
// }

// var worker = new Worker('Ivan', 'Ivanov', 20, 31);

// console.log(worker.rate);




// 3)

// class Worker {
// 	constructor (name, surname, rate, days) {
// 		this._name = name;
// 		this._surname = surname;
// 		this._rate = rate;
// 		this._days = days;
// 	}

// 	get name () {
// 		return this._name;
// 	}
// 	get surnamename () {
// 		return this._surname;
// 	}
// 	get rate () {
// 		return this._rate;
// 	}
// 	get days () {
// 		return this._days;
// 	}

// 	set rate (value) {
// 		this._rate = value < 0 ? 0 : value > 100 ? 100 : value;
// 	}

// 	set days (value) {
// 		this._days = value;
// 	}

// 	getSalary () {
// 		return this.rate * this.days;
// 	}
// }

// var worker = new Worker('Ivan', 'Ivanov', 30, 31);

// console.log(worker.rate);

// worker.rate = 101;

// console.log(worker.rate);




// 4)

// class MyString {
// 	reverse(str){ 
// 		return str.split('').reverse().join(''); 
// 	} 

// 	ucFirst(str){ 
// 		return str[0].toUpperCase() + str.substring(1); 
// 	} 
// 	ucWords(str){ 
// 	str = str.split(' '); 
// 		for (var i = 0; i < str.length; i++) { 
// 		str[i] = str[i][0].toUpperCase() + str[i].substring(1); 
// 	} 

// 		return str.join(' '); 
// 	} 
// }

// var str = new MyString();

// console.log(str.reverse('abcde'));
// console.log(str.ucFirst('abcde'));
// console.log(str.ucWords('abcde abcde abcde'));




// 5)

// class User {
// 	constructor (name, surname) {
// 		this.name = name;
// 		this.surname = surname;
// 	}

// 	getFullName () {
// 		return this.name + ' ' + this.surname;
// 	}
// }

// class Student extends User {
// 	constructor (name, surname, year) {
// 		super (name, surname);
// 		this.year = year;
// 	}
// 	getCourse () {
// 		var y = new Date(); 
// 		var course = y.getFullYear() - this.year; 
// 		if (course > 5) return 'Студент закончил обучение в ' + (this.year + 5) + ' году'; 
// 		return course + ' курс, так как текущий год ' + y.getFullYear() ; 
// 	}
// }


// var student = new Student ('Ivan', 'Ivanov', 2016);

// console.log(student.name);
// console.log(student.surname);
// console.log(student.year);
// console.log(student.getFullName());
// console.log(student.getCourse());




// 6)

