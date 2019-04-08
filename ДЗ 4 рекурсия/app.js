// задача 1

// function recurs(n) {
//         if (n == 1) {
//             return "1";
//         }      
//         return recurs(n - 1) + " " + n;
//     }
//         console.log(recurs(15)); 


// задача 2

// function recurs(a, b) {
// 	if (a > b) {
// 		if (a == b) {
// 			return a; 
// 		}
// 		return a + " " + recurs(a - 1, b);
// 	} 
// 	else {
// 		if (a == b) {
// 			return a; 
// 		}
// 		return a + " " + recurs(a + 1, b);
// 	}
	
// }
// console.log(recurs(10, 15)); 
// console.log(recurs(20, 15)); 


// задача 3 ***

// function recurs(n) {
// 	if (n < 10) {
// 		return n;
// 	}
// 	else {
// 		return n % 10 + recurs(n / 10);
// 	}
// }

// console.log(recurs(267)); 


// задача 4

// function recurs(n) {
//  	if (n < 10) {
// 		return n;
// 	}
// 	else {
// 		console.log(n % 10 + " ")
// 		return recurs(n / 10);
// 	}
// }

// console.log(recurs(123456)); 


// задача 5

// function recurs(n) {
//  	if (n < 10) {
// 		return n;
// 	}
// 	else {
		 
// 		return recurs(n / 10) + " " + n % 10;
// 	}
// }

// console.log(recurs(123456)); 


// задача 6 

// var arr1 = ['a', 'b', 'c'];
// var arr2 = [1, 2, 3];

// var arrResult = arr1.concat(arr2);

// console.log(arrResult);


// задача 7

// var arr = ['a', 'b', 'c'];

// arr.push(1, 2, 3);

// console.log(arr);


// задача 8

// var arr = ['a', 'b', 'c'];

// arr.unshift(4, 5, 6);

// console.log(arr);


// задача 9 

// var arr = [1, 2, 3, 4, 5];
// var newArr = arr.slice(0, 3);

// console.log(newArr);


// задача 10

// var arr = [1, 2, 3, 4, 5];
// var newArr = arr.slice(3, 5);

// console.log(newArr);


// задача 11

// var arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);

// console.log(arr);


// задача 12

// var arr = [1, 2, 3, 4, 5];
// var newArr = arr.splice(1, 3);

// console.log(newArr);


// задача 13

// var arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');

// console.log(arr);


// задача 14

// var arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');

// console.log(arr);

