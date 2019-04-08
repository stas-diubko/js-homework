
// задание 4

// function isNumberInRange() {
// 	if (num > 0 && num < 10) {
// 		return true
// 	}
// 	else {
// 		return false
// 	}
// }

// isNumberInRange();


// задание 5

// function isEven(num) {
// 	if (num % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }


// задание 6

// var arr = [1, 2, 3, 7, 8, 11, 4, 15, 18, 6, 21, 22];

// function isEven(num) {
// 	if (num % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// var newArr = [];
// for (i = 0; i <= arr.length; i++) {
// 	if (isEven(arr[i])) {
// 		newArr.push(arr[i]);
// 	}
// }

// console.log(newArr);


// задание 7

// function getDivisors(num) {
// 	var arr = [];
// 	for (var i = 1; i <= num; i++) {
// 		if (num % i == 0) {
// 			arr.push(i);
// 		}
// 	}
	
// 	return arr;
// }

// alert(getDivisors(24));


// задание 8

// 1)

// const test = [];

// for (let row = 0; row < 10; row++) {
// 	test [row] = [];
// 	for (let col = 0; col < 10; col++) {
// 		test [row][col] = (row + 1) * (col + 1);
// 	}
// }
// console.log(test);

// 2)

// const test = [];
// const size = 10;
// for (let col = 0; col < size; col++) {
// 	test [col] = [];
// 	for (let row = 0; row < size; row++) {
// 		if (row == col) {
// 			test [col][row] = 1;
// 		}
// 		else if (col == size - row - 1) {
// 			test [col][row] = 2;
// 		}
// 		else if (col > row && col > size - row - 1){
// 			test [col][row] = 5;
// 		}
// 		else if (col < row && col < size - row - 1){
// 			test [col][row] = 3;
// 		}
// 		else if (col < row && col > size - row - 1){
// 			test [col][row] = 4;
// 		}
// 		else {
// 			test [col][row] = 6;
// 		}
// 	}
// }
// console.log(test);



// задание 9

// function exp(num, exponent) {
// 	let a = Math.pow(num, exponent);
// 	alert(a);
// }

// let c = prompt("Введите число",  );
// let b = prompt("Введите степень",  );
// exp(c, b)


// задание 10

// function getAge(a) {
// 	if (a >= 16) {
// 		alert('добро пожаловать');
// 	}
// 	else {
// 		alert('вы еще молоды');
// 	}
// }

// let age = prompt("Введите возраст",  );

// getAge(age)


// задание 11*****

// function getAge(a) {
	
// 	if (a == undefined) {
// 		alert('введите число');
// 	}
// 	else if (a >= 16) {
// 		alert('добро пожаловать');
// 	}
// 	else if (a < 16){
// 		alert('вы еще молоды');
// 	}
	
// }

// getAge()


// задание 12

// var arr = [1, 2, 3, 4, 5, 6, 7, 10];

// function countArrLength(a) {
// 	if (a == undefined) {
// 		alert('ошибка');
// 	}
// 	else {
// 		alert(arr.length);
// 	}	
// }

// countArrLength()


// задание 13

// let strnum = prompt("Введите число",  );

// countNums(strnum);
// function countNums(num) {
// 	if (num > 10) {
// 		return num*num;
// 	}
// 	else if (num < 7) {
// 		alert('число меньше 7');
// 	}
// 	else if (num == 8) {
// 		return 7;
// 	}
// 	else if (num == 9) {
// 		return 8;
// 	}
// }


// задание 14

// var str ='hello world';
// var newArr = [];

// var arr = str.split(' ');
// console.log(arr);

// for (var i = 0; i < arr.length; i++) {
// 	newArr.push(ucfirst(arr[i]));
// }

// var newStr = newArr.join(' ');
// alert(newStr);

// function ucfirst(str) {
// 	return str[0].toUpperCase() + str.substr(1);
// }


//  задание 15

//  var str = 'var_text_hello';
// var arr = str.split('_');

// for (var i = 0; i < arr.length; i++) {
//     if (arr[0] != arr[i]) {
//         arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
//     }
// }
// var result = arr.join('');
// alert(result);


//  задание 15

// function inArray(Where, Find) {

// var arrNew = Where.split(' '); 
// var res; 
// for(var i=0; i<arrNew.length; i++)
// {
// if(arrNew[i] == Find)
// {
// res = true;
// }
// }

// if(res == undefined) 
// {
// res = false;
// }
// return res;
// }

// var str = 'Сделайте функцию inArray , которая определяет, есть в массиве элемент с заданным текстом или нет';

// var toSearch = 'которая';

// alert(inArray(str, toSearch));


// задание 16 ***

// var str = '123456';

// function toRearrange(text)
// {
// var arr = str.split('');
// var arrNew = [];
// for(var i=0; i<arr.length; i+=2){
// var temp = arr.slice(i, i+2).reverse();
// arrNew = arrNew.concat(temp);
// }

// str = arrNew.join('');
// return str;
// }

// alert(toRearrange(str));


// Задание 17

// function sequence (start = 0, step = 1) {
// 	let counter = start;
// 		return function () {
// 			return counter += step;
// 		}
// }

// var generator = sequence(2, 3);
// var generator1 = sequence(5, 5);

// console.log(generator());
// console.log(generator());
// console.log(generator());
// console.log(generator1());
// console.log(generator1());
// console.log(generator1());


// Задание 18
// function sequence (start = 0, step = 1) {
// 	let counter = start - step;
// 		return function () {
// 			return counter += step;
// 		}
// }

// let gen = sequence(0, 2);

// function take(gen, x) {
// 	let arr = [];
// 	for (i = 0; i < x; i++) {
// 		arr[i] = gen();
// 	}
// 	return arr;	
// }

// console.log(take(gen, 5));


// Задание 19

// var arr = [1, 2, 3, 4, 5, 6];
// var newArr = [];

// function square(x) {
// 	return x * x;
// }

// function map(square, arr) {
// 	var arrLength = arr.length;
// 	for (i = 0; i < arrLength; i++) {
// 		newArr [i] = square(arr[i]);
// 	}
// 	return newArr;
// }

// console.log(map(square, arr));



// Задание 20

// function sequence (start = 0, step = 1) {
// 	let counter = start - step;
// 		return function () {
// 			return counter += step;
// 		}
// }

// function square(x) {
// 	return x * x;
// }

// var gen = sequence(1, 1);

// function fmap(a, gen) {
// 	return function() {
// 		var argsCount = arguments.length;
// 		var newArray = [];
// 		for (i = 0; i < argsCount; i++) {
// 			newArray [i] = arguments[i];
// 		}
// 		x = a(gen.apply(null, newArray));
// 		return x;
// 	}
// }
// var squareGen = fmap(square, gen);
// console.log(squareGen());
// console.log(squareGen());
// console.log(squareGen());
// console.log(squareGen());
// console.log(squareGen());


// Задание 21

// var arr = [1, 2, 3, 7, 8, 11, 4, 15, 18, 6, 21, 22, 28, 27, 30, 32];

// function isEven(num) {
// 	if (num % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// var newArr = [];
// for (i = 0; i <= arr.length; i++) {
// 	if (isEven(arr[i])) {
// 		newArr.push(arr[i]);
// 	}
// }

// function filter () {
// 	return newArr;
// }

// console.log(filter(arr, isEven));