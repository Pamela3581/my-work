



const solveQuadratic = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
      return "No real solutions";
    } else if (discriminant === 0) {
      return -b / (2 * a);
    } else {
      return [
        (-b + Math.sqrt(discriminant)) / (2 * a),
        (-b - Math.sqrt(discriminant)) / (2 * a)
      ];
    }
  };
  const solutions = solveQuadratic(1, -3, 2);
  console.log(solutions);//output: [1, 2]```
  

  


  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

const isPrimeNumber = isPrime(25);
console.log(isPrimeNumber2);//output:false

const isPrimeNumber2 = isPrime(23);
console.log(isPrimeNumber2);//output: true```
  
  