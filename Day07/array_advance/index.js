const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.push(6);

// map: 요소들을 바꾸기! emoji: 시작 + .
//모두 토마토
const tomato = arr.map(()=>{
    return "🍅";
});
console.log(tomato);

//모두 10
const ten = arr.map(()=> {
    return 10;
})

console.log(ten);

const oneTwo = arr.map((x)=>{
    return x % 2 == 1 ? 1 : 2;
});

console.log(oneTwo);

const tomato2 = arr.map((x)=>{
    return x == 3 ? "🍅" : x;
});
console.log(tomato2);

const string = arr.map((x)=>{
    return String(x);
});
console.log(string);

//filter: 요소들을 필터링~

const oddArr = arr.filter((x)=>{
    return x % 2 == 1; // 홀수만 남겨주세요
});
console.log(`oddArr:${oddArr}`);

//1. 3의 배수만 살리기
const threeArr = arr.filter((x)=> {
    return x % 3 == 0;
});
console.log(threeArr);

//2. 6 이상만 살리기
const sixOver = arr.filter((x) => {
    return x >= 6 == 1;
})
console.log(sixOver);

const fruits = ["peach", "apple", "mango", "strawberry", "avocado", "grape", "kiwi", "watermelon", "melon"];

//1. melon이 들어간 과일만 살리기~
const melon = fruits.filter((x)=>{
    return x.includes("melon");
});
console.log(melon);

//2. 글자 길이가 6글자 이상만 살리기~
const sixString = fruits.filter((x) => {
    return x.length >= 6;
});
console.log(sixString);

//3. 모든 과일을 대문자로 바꾸기!
const BigString = fruits.map((x)=> {
    return x.toUpperCase();
});
console.log(BigString);