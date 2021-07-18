function isArray(input) {
    return Array.isArray(input);
}

function joinArray(input) {
    input.join("$");
}

function find(input, finding) {
    for (let i = 0; i < input.length; i++) {
        if (finding == input[i]) {
            return i;
        }
    }
}

function sum(input) {
    let accum = 0;
    for (i of input) {
        accum += i;
    }
    return accum;
}

function prod(input) {
    let accum = 0;
    for (i of input) {
        accum *= i;
    }
    return accum
}

function rmDup(input) {
    Array.from(new Set(input));
}

function leapYear(start, end) {
    let ret = [];
    for (let i = start; i < end + 1; i++) {
        if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0)) {
            ret.push(i);
        }
    }
    return ret;
}

function fibb(input) {
    let a = 1;
    let b = 1;
    let a1;
    for (let i = 0; i < input - 1; i++) {
        a1 = b;
        b += a;
        a = a1;
    }
    return b;
}