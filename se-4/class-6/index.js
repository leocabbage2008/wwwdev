function ucFirst(str) {
  str = str.toString();
  return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
  let ret =
    str.includes("sex") ||
    str.includes("free") ||
    str.includes("viagra") ||
    str.includes("porn");
  return ret;
}

function truncate(str, trunc) {
  return str.slice(0, trunc) == str ? str : str.slice(0, trunc) + "...";
}

function extractCurrencyValue() {
  return str.replace("$", "");
}

function camelize(str) {
  for (let i = 0; i < str.length; i++) {
    str[i] = ucFirst(str[i]);
  }
  let ret = str.join("");
  return ret;
}

function filterRange(arr, a, b) {
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    if (a <= parseInt(arr[i]) && b >= parseInt(arr[i])) {
      ret.push(arr[i]);
    }
  }
  return ret;
}

function Q9(arr, a, b, ) {
  for (let i = 0; i < arr.length; i++) {
    if (a <= parseInt(arr[i]) && b >= parseInt(arr[i])) {
      arr.splice(i, 1);
    }
  }
  document.getElementById("q9").innerHTML = "Result: " + arr;
}


function Q1() {
  let str = prompt("Input:");
  let ret = str[0].toUpperCase() + str.slice(1);
  document.getElementById("q1").innerHTML = "Result: " + ret;
}

function Q2() {
  let str = prompt("Input:").toLowerCase();
  let ret =
    str.includes("sex") ||
    str.includes("free") ||
    str.includes("viagra") ||
    str.includes("porn");
  document.getElementById("q2").innerHTML = "Result: " + ucFirst(ret);
}

function Q3() {
  let str = prompt("Input:");
  let trunc = parseInt(prompt("Trunc: "));
  let ret = str.slice(0, trunc) == str ? str : str.slice(0, trunc) + "...";
  document.getElementById("q3").innerHTML = "Result: " + ret;
}

function Q4() {
  let str = prompt("Input:");
  let ret = str.replace("$", "");
  document.getElementById("q4").innerHTML = "Result: " + ret;
}
// Question 5: Since shoppingCart and fruits reference the same object, then the length will be 4
// Question 6:
let arr = ["Jazz", "Blues"];
console.log(arr);
arr.push("Rock-n-Roll");
console.log(arr);
arr[Math.floor(arr.length / 2)] = "Classics";
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("Rap", "Reggae");
console.log(arr);

function Q7() {
  let str = prompt("Input:").split("-");
  for (let i = 0; i < str.length; i++) {
    str[i] = ucFirst(str[i]);
  }
  let ret = str.join("");
  document.getElementById("q7").innerHTML = "Result:" + ret;
}

function Q8() {
  let arr = prompt("Input:").split(",");
  let a = parseInt(prompt("A: "));
  let b = parseInt(prompt("B: "));
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    if (a <= parseInt(arr[i]) && b >= parseInt(arr[i])) {
      ret.push(arr[i]);
    }
  }
  document.getElementById("q8").innerHTML = "Result:" + ret;
}

function Q9() {
  let arr = prompt("Input:").split(",");
  let a = parseInt(prompt("A: "));
  let b = parseInt(prompt("B: "));
  for (let i = 0; i < arr.length; i++) {
    if (a <= parseInt(arr[i]) && b >= parseInt(arr[i])) {
      arr.splice(i, 1);
    }
  }
  document.getElementById("q9").innerHTML = "Result: " + arr;
}


//Question 10
let john = {
  name: "John",
  age: 25
};
let pete = {
  name: "Pete",
  age: 30
};
let mary = {
  name: "Mary",
  age: 28
};

let users = [john, pete, mary];

let names = users.map((person) => person.name);
console.log(names)
