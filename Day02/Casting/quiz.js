//프롬프트로 몇년생인가요 물어보고 숫자로 1999 입력하면
//콘솔로 당신의 나이는 26이군요!

// const year = window.prompt("몇년생인가요?");
// const age = 2024 - Number(year) + 1;

// window.console.log(`당신의 나이는 ${age}이군요!`);


//1.숫자를 두번 프롬프트로 물어보고,
//콘솔로 합: 차: 곱: 나타내는 프로그램
const num1 = prompt("숫자1 입력 >>> ");
const num2 = prompt("숫자2 입력 >>> ");

const sum = Number(num1) + Number(num2);
const sub = Number(num1) - Number(num2);
const mul = Number(num1) * Number(num2);

console.log(`합: ${sum} 차: ${sub} 곱: ${mul}`);

//2. 프롬프트로 한 변의 길이를 입력하고,
//콘솔로 정사각형의 넓이는 ~~입니다.
const side = Number(prompt("한 변의 길이를 입력 >>> "));
console.log(`정사각형의 넓이는 ${side**2}`);


//3. 아아(1500원) 주문 갯수 프롬프트, 라떼(2500원) 주문 갯수 프롬프트
//콘솔로 총 가격은 ~~ 입니다. ex) 3, 5 -> 4500 + 12500
const americano = Number(prompt("아이스 아메리카노 주문 갯수 입력 >>> "));
const latte = Number(prompt("라떼 주문 갯수 입력 >>> "));

console.log(`총 가격은 ${1500*americano + 2500*latte}원 입니다.`);
