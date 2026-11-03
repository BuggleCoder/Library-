export class Calc {
  roundToNearest(a, b) {
    if (b === 0) return a;
    return Math.round(a / b) * b;
  }

  digits(a) {
    if (a === 0) return 1;
    return Math.floor(Math.log10(Math.abs(a))) + 1;
  }

  toPow(a, b) {
    if (b === 0) return 1;
    if (b === 1) return a;
    return Math.pow(a, b);
  }

  isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }
}
