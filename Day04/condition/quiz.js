//1. 각도를 물어보고, 0~90 예각, 90 직각, 90~80 둔각, 180 평각
const angle = Number(prompt("각도 입력 >>"));

if (angle > 0 && angle < 90) {
    alert("예각");
} else if (angle == 90) {
    alert("직각");
} else if (angle > 90 && angle < 180) {
    alert("둔각");
} else if (angle == 180) {
    alert("평각");
} else {
    alert("입력 오류!");
}

//2. 영어 시험 점수를 입력하고
// 90점 이상 A, 80점 이상 B, 70점 이상 C, 60점 이상 D, 그 외는 나락
const score = Number(prompt("영어 점수 입력 >> "));

if (score >= 90) {
    alert("A");
} else if (score >= 80) {
    alert("B");
} else if (score >= 70) {
    alert("C");
} else if (score >= 60) {
    alert("D")
} else {
    alert("나락");
}

//3.[Object문제]. mbti를 물어봐서 어떤 성향인지 알려주는 프로그램
//ex) 4번 물어봄
// e인가요 i인가요?
// n인가요 s인가요?
// f인가요 t인가요?
// j인가요 p인가요?
// entj => 외향적이고 직관적이고 이성적이고 계획적이군요!
const mbti = {
    e: "외향적이고, ",
    i: "내향적이고, ",
    n: "직관적이고, ",
    s: "이성적이고, ",
    f: "감성적이고, ",
    t: "현실적이고, ",
    p: "즉흥적이네요!",
    j: "계획적이네요!",
};

const one = prompt("e인가요 i인가요?");
const two = prompt("n인가요 s인가요?");
const three = prompt("f인가요 t인가요?");
const four = prompt("j인가요 p인가요?");

alert(`당신의 mbti는 ${mbti[one]}${mbti[two]}${mbti[three]}${mbti[four]}`);