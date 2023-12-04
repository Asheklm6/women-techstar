//Create a function that checks if the input/parameter is an even number.
function checkNum(num) {
    num % 2 === 0 ? (
      console.log("Even Number")
    ) : (
      console.log("Odd Number")
    );
  }

  //Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter
  function numConsole(n1, n2) {
    if (n1 < n2) {
      for (let i = n1; i <= n2; i++) {
        console.log(i);
      }
    } else if (n1 > n2) {
      for (let i = n1; i >= n2; i--) {
        console.log(i);
      }
    } else {
      console.log(n1);
      console.log(n2);
    }
  }
  numConsole(2, 5);

  //Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3.
  function sumNum(a, b) {
    let sum = a;
  
    if (a < b) {
      for (let i = a; i <= b; i++) {
        if (i != a) {
          sum += i;
        }
      }
    } else if (a > b) {
      for (let i = a; i >= b; i--) {
        if (i != a) {
          sum += i;
        }
      }
    }
  
    console.log(sum);
    return sum;
  }
  
  sumNum(3, 2);