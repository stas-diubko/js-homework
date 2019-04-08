// задача 1

// let num = prompt("Введите длину массива",  );
// var arr = [];
// var str = 'x';
// for (i = 0; i < num; i++) {
// 	arr.push(str);
// 	str += 'x';
// }
// console.log(arr);


// задача 2

// let num = prompt("Введите длину массива",  );
// var arr = [];
// for (i = 1; i <= num; i++) {
// 	var str = '';
// 	for (j = 0; j < i; j++) {
// 		str += i;
// 	}
// 	arr.push(str);
// }
// console.log(arr);


// задача 3

// function func(arr) {
// 	var sum = 0;
// 	for (i = 0 ; i < arr.length; i++) {
// 		sum += arr[i];
// 		if (sum > 10) {
// 			return i + 1; 
// 		}
// 	}
// }

// console.log(func([1, 2, 3, 1, 1, 6, 7, 8, 9]));


// задача 4

// var arr = [1, 3, 5, 6, 7, 9];
// var result = [];
// for (i = arr.length - 1; i >= 0; i--) {
// 	result.push(arr[i]);
// }
// console.log(result);


// задача 5


// var arr = [1, 2, 3, 7, -1, 8, 11, 4, 15, 18, -2, 6, -3];

// function isRange(num) {
// 	if (num > 0 && num < 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// var newArr = [];
// for (i = 0; i <= arr.length; i++) {
// 	if (isRange(arr[i])) {
// 		newArr.push(arr[i]);
// 	}
// }

// console.log(newArr);


// задача 6

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


// задача 7 

// var arr = [1, 2, 3, 4, 5, 6];  
// arr.splice (0, 6, 2, 1, 4, 3, 6, 5);

// alert( arr );


// задача 8 

// var arr = [1, 2, 3, 4, 5, 6];  
// arr.splice (0, 6, 5, 6, 3, 4, 1, 2);

// alert( arr );


// задача 9


// задача 10

// var arr = [[1, 7, 9], [4, 2], [6]];
// var sum = 0;
// for (i = 0; i < arr.length; i++) {
// 	for (j = 0; j < arr[i].length; j++) {
// 		sum += arr[i][j];
// 	}
// }
// alert(sum);


// задача 11

// var arr = [[[8, 4], [3, 5]], [[9, 6], [7, 8]]];
// var sum = 0;
// for (i = 0; i < arr.length; i++) {
// 	for (j = 0; j < arr[i].length; j++) {
// 		for (k = 0; k < arr[j].length; k++) {
// 			sum += arr[i][j][k];
// 		}
// 	}
// }
// alert(sum);