// const name = data;
// data: String, Number, Boolean
// typeCasting: Number(), String(), Boolean()




//1. 유저에게 점심메뉴 먹은거 물어보고
//콘솔로 ~~ 점심을 먹었다니 맛있었겠군요!
const lunch = prompt("점심메뉴 뭐먹었어요?>> ");
console.log(`${lunch} 점심을 먹었다니 맛있었겠군요!`)

//2. 유저에게 밑변 그리고 높이를 물어보고
//콘솔로 정삼각형의 넓이 ~~ 입니다.
const bottom = prompt("밑변의 길이는?>> ");
const high = prompt("높이의 길이는?>> ");

console.log(`정삼각형의 넓이는 ${0.5*bottom*high} 입니다.`)

//3. 유저에게 원화를 물어보고 엔화로 바꿔주는 프로그램
//ex) 10000-> 1129 나오기!
const won = prompt("원화가 얼마입니까?>> ");
console.log(`${won} -> ${won*1129/10000}`);