// 배열, 과일, 갯수를 매개변수로 입력 받고,
// 배열에 {name:과일, count:갯수} 추가되는 함수 만들기
const empty = []

const add = (arr, fruit, num)=> {
    return arr.push({name: fruit, count: num});
};

add(empty, "사과", 5);
add(empty, "바나나", 2);
add(empty, "포도", 3);
console.log(empty);