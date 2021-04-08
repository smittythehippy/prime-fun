'use strict';
/*
  Copyright (ISC) 2021 Kyle W. Smith
  This module can determine primality, find prime numbers, twin primes, and prime k-tuples.
  Refer to README.md for documentation.
*/

// Parameters for k-tuples.
// Reference https://oeis.org/A257124
// Use above to calculate further tuples if wanted.
const tuple_parameters = {
    "cousin": { distance: 4 },
    "sexy": { distance: 6 },
    3: { distance: 6, index_distance: 2 },
    4: { distance: 8, index_distance: 3 },
    5: { distance: 12, index_distance: 4 },
    6: { distance: 16, index_distance: 5 },
    7: { distance: 20, index_distance: 6 },
    8: { distance: 26, index_distance: 7 },
    9: { distance: 30, index_distance: 8 },
    10: { distance: 32, index_distance: 9 },
    11: { distance: 36, index_distance: 10 },
    12: { distance: 42, index_distance: 11 },
    13: { distance: 48, index_distance: 12 }
};

// Validate input
const checkInput = (input) => {
    if (typeof input !== "number") {
        throw new TypeError("Expected a number");
    }
    if (!Number.isInteger(input)) {
        throw new Error("Expected an integer");
    }
    if (!Number.isSafeInteger(input)) {
        throw new Error("Not enough memory to compute");
    }
    if (input < 0) {
        throw new Error("Expected a positive integer");
    }
    return true;
}

// Sieve of Erathosthenes for finding prime numbers.
// If optional_boolean_array is passed as true, then return the array of true/false values instead of prime numbers.
const sieve = (upper_bound, optional_boolean_return) => {

    if (checkInput(upper_bound)) {
        let maximum_factor = Math.floor(Math.sqrt(upper_bound));
        let primes = new Array(upper_bound + 1).fill(true)
        primes[0] = false;
        primes[1] = false;

        for (let i = 2; i <= maximum_factor; i++) {
            let j = i * i;
            if (primes[i] === true) {
                for (j; j <= upper_bound; j += i) {
                    primes[j] = false;
                }
            }
        }

        if (optional_boolean_return) {
            return primes;
        }
        else {

            let prime_numbers = [];
            for (let k = 2; k < primes.length; k++) {
                if (primes[k] === true) {
                    prime_numbers.push(k);
                }
            }
            return prime_numbers;
        }
    }
};

// Check if a number is prime.
const isPrime = (number) => {

    if (number === 1 || number === 0) {
        return false;
    }
    if (number === 2 || number === 3) {
        return true;
    }
    let primes = sieve(number + 1, true);
    if (primes[number] === true) {
        return true;
    }
    return false;
};

// Twin primes are a pair of prime numbers who differ by two.
const twinPrimes = (upper_bound) => {
    let primes = sieve(upper_bound);
    let twin_primes = [];
    let previous = 2;

    let length = primes.length;

    for (let i = 0; i < length; i++) {
        if (primes[i] - previous === 2) {
            twin_primes.push([previous, primes[i]]);
        }
        previous = primes[i];
    }

    return twin_primes;
};

// Function for finding prime k-tuples.
// Can also pass "cousin" or "sexy" in the tuple parameter to find those respective prime pairs.
const tupleTemplate = (upper_bound, tuple) => {

    let primes = sieve(upper_bound);

    let distance, index_distance;
    if (tuple === "cousin" || tuple === "sexy") {
        tuple = tuple_parameters[tuple];
        distance = tuple.distance;
        index_distance = tuple.index_distance;
    }
    else {
        tuple = parseInt(tuple);
        tuple = tuple_parameters[tuple];
        distance = tuple.distance;
        index_distance = tuple.index_distance;
    };

    let prime_tuples = [];
    let current_tuple = [];
    let previous_index = 0;
    let index_iterator = 0;
    let length = primes.length;

    for (let i = 1; i < length; i++) {

        current_tuple = [];
        index_iterator = index_distance === undefined ? 0 : index_distance - 1;

        if (primes[i] - primes[previous_index] === distance && (index_distance === undefined ? true : i - previous_index === index_distance)) {
            current_tuple.push(primes[previous_index]);
            while (index_iterator >= 0) {
                current_tuple.push(primes[i - index_iterator]);
                index_iterator--;
            }
            prime_tuples.push(current_tuple);
            previous_index++;
            continue;
        }

        while (primes[i] - primes[previous_index] > distance) {
            previous_index++;
            current_tuple = [];
            if (primes[i] - primes[previous_index] === distance && (index_distance === undefined ? true : i - previous_index === index_distance)) {
                current_tuple.push(primes[previous_index]);
                while (index_iterator >= 0) {
                    current_tuple.push(primes[i - index_iterator]);
                    index_iterator--;
                }
                prime_tuples.push(current_tuple);
                previous_index++;
                break;
            }
        }
    }
    return prime_tuples;
};

export default {
    sieve,
    isPrime,
    twinPrimes,
    tupleTemplate
};