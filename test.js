'use strict';
/*
  Copyright (ISC) 2021 Kyle W. Smith.
  Test suite for prime-fun.
  Refer to README.md for documentation.
*/
import primes from "./index.js";
import { strict as assert } from "assert";

const prime_list = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const composite_list = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38];
const twin_prime_list = [[3, 5], [5, 7], [11, 13], [17, 19], [29, 31], [41, 43], [59, 61], [71, 73], [101, 103], [107, 109]];
const cousin_list = [[3, 7], [7, 11], [13, 17], [19, 23], [37, 41], [43, 47], [67, 71], [79, 83]];
const triplet_list = [[5, 7, 11], [7, 11, 13], [11, 13, 17], [13, 17, 19], [17, 19, 23], [37, 41, 43], [41, 43, 47], [67, 71, 73]];
const quadruplet_list = [[3, 5, 7, 11], [5, 7, 11, 13], [11, 13, 17, 19]];
const quintuplet_list = [[5, 7, 11, 13, 17], [7, 11, 13, 17, 19], [11, 13, 17, 19, 23]];


//Tests sieve on first 100 numbers
describe('sieve(100)', () => {
  it('sieve(100): Should return the first 25 primes', () => {
    let sieve_primes = primes.sieve(100);
    assert.deepStrictEqual(sieve_primes, prime_list);
  });
});

//Tests sieve on first 100 numbers
describe('sieve(n, true)', () => {
  
  // Tests if optional boolean argument is working (used in isPrime)
  it('sieve(10, true): Should return true (5 is prime).', () => {
    let sieve_bools = primes.sieve(10, true);
    console.log(sieve_bools)
    assert.equal(sieve_bools[5], true);
  });
  
  it('sieve(11, true): Should return the true (4 is not prime)', () => {
    let sieve_bools = primes.sieve(10, true);
    assert.equal(sieve_bools[4], false);
  });

});

//Tests isPrime on 0 and 1
describe('isPrime', () => {
  it('isPrime(0): Should return false', () => {
    assert.equal(primes.isPrime(0), false);
  });

  it('isPrime(1): Should return false', () => {
    assert.equal(primes.isPrime(0), false);
  });
});

//Tests isPrime on composite numbers
describe('isPrime(c), where c is a composite number', () => {
  composite_list.forEach((number) => {
    it(`isPrime(${number}): Should return false`, () => {
      assert.equal(primes.isPrime(number), false);
    });
  });
});

//Tests isPrime on first 25 prime numbers 
describe('isPrime(p), where p is a prime number', () => {
  prime_list.forEach((number) => {
    it(`isPrime(${number}): Should return true`, () => {
      assert.equal(primes.isPrime(number), true);
    });
  });
});


//Tests twinPrimes on first 10 pairs of twin primes
describe('twinPrimes(n)', () => {
  it('twinPrimes(109): Should return first ten twin prime pairs', () => {
    assert.deepStrictEqual(primes.twinPrimes(109), twin_prime_list);
  });
});

//Tests tupleTemplate.
// n is an upper bound to search for primes
// k is the desired k-tuple to find
// can also pass "cousin" or "sexy" to find those respective prime pairs
describe('tupleTemplate(n, k)', () => {

  //Tests prime triplets
  it('tupleTemplate(100, "cousin"): Should return first eight cousin prime pairs', () => {
    assert.deepEqual(primes.tupleTemplate(100, "cousin"), cousin_list);
  });

  //Tests prime triplets
  it('tupleTemplate(100, 3): Should return first eight prime triplets', () => {
    assert.deepEqual(primes.tupleTemplate(100, 3), triplet_list);
  });

  //Tests prime quadruplets
  it('tupleTemplate(100, 4): Should return first three prime quadruplets', () => {
    assert.deepStrictEqual(primes.tupleTemplate(100, 4), quadruplet_list);
  });

  //Tests prime quintuplets
  it('tupleTemplate(100, 5): Should return first three prime quadruplets', () => {
    assert.deepEqual(primes.tupleTemplate(100, 5), quintuplet_list);
  });
});