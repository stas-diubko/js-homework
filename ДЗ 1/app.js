	// задача 1
	// let stra = prompt("Введите переменную а",  );
 //    let strb = prompt("Введите переменную b", );
 //    let a = parseInt(stra);
 //    let b = parseInt(strb);

 //    if(a == b) {
 //    	alert("X равен 400")
 //    }

 //    if(a > b) {
 //    	let result = a+b/2*4
 //    	alert("X равен " + result)
 //    }

 //    if(a < b) {
 //    	let result = a-b+2/b*4
 //    	alert("X равен " + result)
 //    }



// задача 2
//вариант 1
	// let strx = prompt("Введите координату по оси x",  );
 //    let stry = prompt("Введите координату по оси y", );
 //    let x = parseInt(strx);
 //    let y = parseInt(stry);

 //    if (y > 0 && y < -x+4 && y < x+4) {
 //    	alert("Точка попадает в область")
 //    }

 //    else {
 //    	alert("Точка Не попадает в область")
 //    }

//вариант2

	// let strx = prompt("Введите координату по оси x",  );
 //    let stry = prompt("Введите координату по оси y", );
 //    let x = parseInt(strx);
 //    let y = parseInt(stry);

 //    if (x < 0) { 
 //    	x = -x
 //    }

 //    if (y < 0) {
 //    	y = - y
 //    }

 //    if (y > 1 || x > 1 || y > x) {
 //    	alert("Точка Не попадает в область")
 //    }
 //     else {
 //    	alert("Точка попадает в область")
 //    }

 //вариант3 

 	// let strx = prompt("Введите координату по оси x",  );
  //   let stry = prompt("Введите координату по оси y", );
  //   let x = parseInt(strx);
  //   let y = parseInt(stry);

  //   if (((x*x) + (y*y) <= 1) || (x <= 0) && (y <= 0) && (y >= -x-2)) {
  //   	alert("Точка попадает в область")
  //   }
  //   else {
  //   	alert("Точка Не попадает в область")
  //   }


// задача 3 

	// let strnum = prompt("Введите номер дня недели",  );
	// let num = parseInt(strnum);

	// switch(num){
	// 	case 1:
	// 		alert("Понедельник");
	// 		break;
	// 	case 2:
	// 		alert("Вторник");
	// 		break;	
	// 	case 3:
	// 		alert("Среда");
	// 		break;	
	// 	case 4:
	// 		alert("Четверг");
	// 		break;
	// 	case 5:
	// 		alert("Пятница");
	// 		break;
	// 	case 6:
	// 		alert("Суббота");
	// 		break;
	// 	case 7:
	// 		alert("Воскресенье");
	// 		break;	
	// 	default:
 //    		alert( "Такого дня недели не существует");	
	// }


// задача 4

	// let strnum1 = prompt("Введите число 1",  );
	// let strnum2 = prompt("Введите число 2",  );

	// let num1 = parseInt(strnum1);
	// let num2 = parseInt(strnum2);

	// if (num1 > num2) {
	// 	alert(num1)
	// }

	// else  {
	// 	alert(num2)
	// }


// задача 5

	// let strnum1 = prompt("Введите число 1",  );
	// let strnum2 = prompt("Введите число 2",  );

	// let num1 = parseInt(strnum1);
	// let num2 = parseInt(strnum2);

	// if (num1 > num2) {
	// 	alert(num1)
	// }
	
	// else if (num1 == num2) {
	// 	alert("Число 1 равно числу 2")
	// }

	// else  {
	// 	alert(num2)
	// }


// задача 6

	// let strnum = prompt("Введите номер квартиры",  );
	// let num = parseInt(strnum);

	// if (num <= 0) {
	// 	alert("Данного номера квартиры не существует")
	// }
	// else if (num <= 20) {
	// 	alert("Данная квартира находитя в первом подьезде")
	// }
	// else if (num <= 48) {
	// 	alert("Данная квартира находитя во втором подьезде")
	// }
	// else if (num <= 90) {
	// 	alert("Данная квартира находитя в третьем подьезде")
	// }
	// else {
	// 	alert("Данного номера квартиры не существует")
	// }

// задача 7

	// var userName = prompt("Введите логин", "");
	// var pass = prompt("Введите пароль", );

	// if (userName == "ivan" && pass == 334455) {
	// 	alert("Добро пожаловать!")
	// }
	// else if (userName == "alex" && pass == 777) {
	// 	alert("Добро пожаловать!")
	// }
	// else if (userName == "petr" && pass == "b5678") {
	// 	alert("Добро пожаловать!")
	// }
	// else {
	// 		alert("Ошибка входа!")
	// 	}


// задача 8

	// var year = prompt("Введите год рождения",  );
	// var age = 2019 - year;
	// 	alert("Ваш возраст " + age);

	// if (age >= 16) {
	// 	alert("Добро пожаловать");
	// }
	// else {
	// 	alert("Вход воспрещен");
	// }


// задача 9

	// let num = prompt("Введите Ваш стаж работы",  );
	
	// if (num <= 3) { 
	// 	alert("Надбавка 0%");
	// }
	// else if (num <= 10) { 
	// 	alert("Надбавка 10%");
	// }
	// else if (num <= 20) { 
	// 	alert("Надбавка 20%");
	// }
	// else if (num > 20) { 
	// 	alert("Надбавка 25%");
	// }

// задача 10

	let prod = prompt("Введите колличество товаров в корзине", );

	if (prod % 100 > 4 && prod % 100 < 20) {
		alert("В корзине " + prod + " товаров");
	}
	else if (prod % 10 >= 2 && prod % 10 <= 4) {
		alert("В корзине " + prod + " товара");
	}
	else if (prod % 10 == 1) {
		alert("В корзине " + prod + " товар");
	}
	else if (prod % 10 >= 5 && prod % 10 <= 9 || prod % 10 == 0) {
		alert("В корзине " + prod + " товаров");
	}
	



// Циклы

// задача 1

	// let i;

	// for (i = 4; i <= 400; i++) {
	// 	console.log(i);
	// }

// задача 2

	// let a = 1;

	// for (i = 1; i <= 4; i++) {
	// 	console.log(a = a + 3);
	// }

// задача 3

	// let i; 

	// for (i = 654; i >= 0; i--) {
	// 	console.log(i);
	// }

// задача 4

// let i; 

// for (i = 1983; i <= 2017; i++) {
// 	console.log(i);
// }

// задача 5

// let a = -6; 
// let i;
// for (i = -4; i < 49; i++) {
// 	console.log(a = a + 2);
// }

// задача 6

// let str = 7;

// for (i = 1; i < 10; i++){
// 		console.log(str + " * " + i + " = " + str * i)
// 	}


// задача 7

	



// задача 8

// let sum = 0;
// for (i = 1; i < 101; i++) {
// 	sum += i
// }
// console.log(sum)


// задача 9

	// let mult = 1;
	// for (i = 1; i < 51; i++) {
	// 	mult *= i
	// }
	// console.log(mult) 