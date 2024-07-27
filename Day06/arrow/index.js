//general function[일반 함수]
function small (x, y) {
    return x > y ? y : x;
}

//arrow function[화살표 함수]
const smaller = (x, y)=> {
    return x > y ? y : x;
}

// 어떠한 단어가 들어오면 뒤에 "!" 붙혀서 돌려주는 함수
const test1 = (word)=> {
    return word + "!";
};
console.log(test1("Hello"));
// 어떠한 숫자가 들어오면 반 나눠서 돌려주는 함수
const test2 = (num)=> {
    return num / 2;
};
// 어떠한 두 숫자가 들어오면 합치고 두배해서 돌려주는 함수
const test3 = (num1, num2)=> {
    return (num1 + num2) * 2;
};

// 어떠한 배열과 과일을 넣었을때, 배열에 과일을 넣어주는 함수
const test4 = (arr, fruit)=> {
    return arr.push(fruit);
};

// 어떠한 배열과 과일을 영어로 넣었을때,
// 과일에 알파벳이 a 또는 p가 들어가면 배열에 추가가 안되고
// 그게 아니면 추가되는 함수 만들기!
const fruits = ["banana", "melon"];
const test5 = (arr, fruit)=> {
    if (!fruit.includes("a") || !fruit.includes("p")) {
        return arr.push(fruit);
    }
}
test5(fruits, "당근");
console.log(fruits);

// 비밀번호를 입력 했을 때,
//1. ! or #이 안들어가면 특수문자 필수!
//2. 비밀번호의 길이가 6~20사이가 아니면 비밀번호 길이를 재수정!
//3. 비밀번호의 시작이 IT or it로 시작안하면 반드시 IT or it로 시작!
//다 통과되면 비밀번호 통과!

const test6 = (pw)=> {
    if (!pw.includes("!") && !pw.includes("#")) {
        return "특수문자 필수!";
    } else if (pw.length < 6 || pw.length > 20){
        return "비밀번호 길이를 재수정!";
    } else if (!(pw.startsWith("IT") || pw. startsWith("it"))) {
        return "반드시 IT of it로 시작!"
    } else {
        return "비밀번호 통과!";
    }

}
console.log(test6("it12345"));
console.log(test6("it12!"));
console.log(test6("12345!!"));
console.log(test6("it12345!!"));





