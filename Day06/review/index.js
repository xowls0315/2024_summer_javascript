//1. 온도를 입력 받으면, 0 이하이면 추워요
// 0~10 쌀쌀해요, 10~20 쾌적해요, 20~30 살짝 더워
// 30 이상이면 더워요 라는 함수를 만들어주세요

function test1(temp) {
    if (temp < 0) {
        return console.log("추워요");
    } else if (temp >= 0 && temp < 10) {
        return console.log("쌀쌀해요");
    } else if (temp >= 10 && temp < 20) {
        return console.log("쾌적해요")
    } else if (temp >= 20 && temp < 30) {
        return console.log("살짝 더워");
    }
}

test1(15);
test1(25);

//2. 올리브영에서 3만원 이상 구매하면, 10% 할인해주고
// 5만원이상 구매하면 20% 할인해 주는 가격 계산 함수를
// 만들어주세요!

function test2(total) {
    if (total >= 50000) {
        return console.log(`${total * 0.8} 원 계산하세요!`);
    } else if (total >= 30000) {
        return console.log(`${total * 0.9} 원 계산하세요!`);
    } else {
        return console.log(`${total} 원 계산하세요!`);
    }
}

test2(50000);
test2(30000);
test2(10000);


//"coffee".toUpperCase();
//"coffee".includes("ee");