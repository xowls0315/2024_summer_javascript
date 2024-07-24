//1. 자동차 속도를 입력하고, 제한 속도 입력하여,
// 자동차 속도가 과속이면, 과속입니다! 아니면 안전운행 중이네요!
const speed = Number(prompt("자동차 속도 입력 >> "));
const limitspeed = Number(prompt("제한 속도 입력 >> "));

if (speed > limitspeed)
    console.log("과속입니다!");
else
    console.log("안전운행중이네요!");

//2. [영국,프랑스,독일,스페인,이탈리아,스위스] 중에서 가고 싶은 국가를
//0~5까지 번호로 입력하면, 콘솔로 ~~나라를 가고싶어하군요! 다음에 같이가요!
const nation = ["영국","프랑스","독일","스페인","이탈리아","스위스"];
const num = Number(prompt("0~5중에 번호를 입력하세요 >> "));
console.log(`${nation[num]} 나라를 가고싶어하군요!`);