# prime-fun

Lightwieght package with all the prime-finding tools that you'll ever need. This module can check for primality, find all primes below an upper bound, find twin primes, and find prime k-tuples for 3 ≤ k ≤ 13. Primes are found using the Sieve of Eratosthenes algorithm, which produces quick results.

# Installation
In your project's directory, type:

```
npm install prime-fun
```

# Usage

## Load package

At the top of your file: 

```javascript
import primes from "prime-fun";
```

## Methods 

There are four methods:  isPrime(n), sieve(n), twinPrimes(n), and tupleTemplate(n, k). 

### `isPrime(number)`
This will check the primality of a `number`, returning true if it is prime, and false otherwise.

```javascript
console.log(primes.isPrime(53));
// => true

console.log(primes.isPrime(774637));
// => false

console.log(1444441);
// => true
```

### `sieve(upper_bound)`
This runs the Sieve of Eratosthenes algorithm to return an array of all the prime numbers from 2 to the `upper_bound` number passed into the method.

```javascript
console.log(primes.sieve(100));
// => [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
```

### `twinPrimes(upper_bound)`
This will return an array of arrays containing all the twin prime pairs up to the `upper_bound` number that is passed into the method.

```javascript
console.log(primes.twinPrimes(100));
// => [[3, 5], [5, 7], [11, 13], [17, 19], [29, 31], [41, 43], [59, 61], [71, 73]]
```

### `tupleTemplate(upper_bound, tuple)`
This method returns an array of arrays containing prime k-tuples, where k ≥ 3, up to the `upper_bound` passed into the function.  
Acceptable integer values for `tuple` are: `3, 4, 5, 6, 7, 8, 9, 10, 11, 12` or `13`

```javascript
// All prime triplets up to 30
console.log(primes.tupleTemplate(30, 3));
// => [[5, 7, 11], [7, 11, 13], [11, 13, 17], [13, 17, 19], [17, 19, 23]]     
```
```javascript
// All prime septuplets up to 10,000
console.log(primes.tupleTemplate(10000, 7));
// => [[11, 13, 17, 19, 23, 29, 31], [5639, 5641, 5647, 5651, 5653, 5657, 5659]]
```

There are two string arguments that can be passed in the `tuple` parameter, which are `"cousin"` and `"sexy"`. Cousin primes are a pair of primes who are 4 apart, and Sexy primes are 6 apart. 

```javascript
console.log(prime.tupleTemplate(50, "cousin"));
// => [[3, 7], [7, 11], [13, 17], [19, 23], [37, 41], [43, 47]]

console.log(prime.tupleTemplate(50, "sexy"));
// => [[5, 11], [7, 13], [11, 17], [13, 19], [17, 23], [23, 29], [31, 37], [37, 43], [41, 47]]
```  

# Testing
To run the included test suite, first ensure `mocha` is installed by navigating to the root directory of this package and running
```
npm install
```
Then
```
npm test
```

# References
[Wikipedia Prime k-tuple](https://en.wikipedia.org/wiki/Prime_k-tuple)

[Online Encyclopedia of Integer Sequences](https://oeis.org/A257129)

# License 
(The ISC License)

Copyright 2021 Kyle W. Smith <kw72smith@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

