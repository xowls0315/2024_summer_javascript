//1. 유저에게 태어난 년도를 입력하고
//2005년 이하이면-> 성인입니다 아니면 미성년자입니다!
const year = prompt("태어난 년도를 입력하세요>> ");
if (year <= 2005)
    console.log("성인입니다!");
else
    console.log("미성년자입니다!");

//2. 자이로드롭을 탈려고하는데 키를 물어보고, 140이상이면 
//탑승할 수 있습니다! 아니면 탑승이 불가능 합니다!
const height = prompt("키를 입력하세요>> ");
if (height >= 140)
    console.log("탑승할 수 있습니다!");
else
    console.log("탑승이 불가능 합니다!");

//3. 성별을 물어보고, 나이도 물어봐서
// 남성이고 20살이상이면 징집대상입니다! 아니면 징집대상이 아닙니다!
const gender = prompt("성별을 입력하세요>> ");
const age = prompt("나이를 입력하세요>> ");
if (gender == "남성" && age >= 20)
    console.log("징집대상입니다!");
else
    console.log("징집대상이 아닙니다!");

//4. 다이소에서 물품 총 구매액수를 물어보고
// 5만원 이상이면 10% 할인된 금액을 주고, 아니면 그냥 금액 주는 프로그램
const total = prompt("총 구매액수를 입력하세요>> ");
if (total >= 50000)
    console.log(`5만원 이상이므로 10% 할인된 금액으로 ${total*0.1}을 드리겠습니다!`);
else
    console.log("그냥 금액을 계산하세요!");

//5. 나이를 물어보고 20살 이상이면 성인, 19~14살이면 청소년, 13살이하면 어린이
const age2 = prompt("나이를 입력하세요>> ");
if (age2 >= 20)
    console.log("성인입니다!");
else if (age2 >=14 && age2 <= 19)
    console.log("청소년입니다!");
else
    console.log("어린이입니다!");
