// Problem 2: Even Fibonacci Numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

// Tests
// Waiting:fiboEvenSum(10) should return a number.
// Waiting:Your function should return an even value.
// Waiting:Your function should sum the even-valued Fibonacci numbers: fiboEvenSum(8) should return 10.
// Waiting:fiboEvenSum(10) should return 10.
// Waiting:fiboEvenSum(34) should return 44.
// Waiting:fiboEvenSum(60) should return 44.
// Waiting:fiboEvenSum(1000) should return 798.
// Waiting:fiboEvenSum(100000) should return 60696.
// Waiting:fiboEvenSum(4000000) should return 4613732.

function fiboEvenSum(n) {
    var nth = 0;
    var n1 = 0;
    var n2 = 1;
    var count = 1;
    var sum = 0;
    while (count>0){
         nth = n1 + n2
         if (nth%2 == 0)
           sum += nth;
         n1 = n2;
         n2 = nth;
         count ++;
         if (nth >= n)
           break;    
    }
    console.log(sum);      
  }
  
  fiboEvenSum(1000);