//function [함수]

// 마술상자 => 
// 100 -> 200
// 200 -> 300
// 300 -> 400
// 400 -> 500
// x -> x + 100

function add100 (x) {
    return x + 100;
}

// minus100
function minus100 (x) {
    return x - 100;
}

function wonyoubgthinking(x) {
    return x + "럭키비키잖아★";
}

function test(x, y) {
    return (x + y) ** 2;
}

function test1(x) {
    if (x % 2 == 1) {
        return "홀수";
    } else {
        return "짝수";
    }
}

function test2(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

function test3(x, y) {
    if (x == y) {
        return "똑같음";
    } else {
        return "다름";
    }
}

const a = add100(3000); // 3100
const b = minus100(3000); // 2900
const c = wonyoubgthinking("수업을하고 있는데 마침");
const d = console.log(test(3, 2));
const e = console.log(test1(5));
const f = console.log(test2(10, 15));
const g = console.log(test3(10, 11));