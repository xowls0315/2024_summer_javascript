//1. 마을버스: 1500, 고속버스: 2000, 우등버스: 3000
// 나이 13이하면 무료, 나이 65이상이면 30%인 버스가 있음
// 유저에게 숫자로 버스종류를 선택하고, 나이를 입력해서
// 최종 금액을 산출하는 프로그램

// ex) 버스종류 입력: 2
// ex) 나이 입력: 66
// ex) 고속버스 1400원 결제 부탁드립니다!

const bus_name = ["마을버스", "고속버스", "우등버스"];
const bus_fee = [1500, 2000, 3000];
const bus = Number(prompt("[마을버스: 1500, 고속버스: 2000, 우등버스: 3000] 버스 종류 입력: "));
const age = Number(prompt("나이 입력: "));

if (age <= 13) {
    console.log(`${bus_name[bus-1]} 0원 결제 부탁드립니다!`);
} else if(age >= 65) {
    console.log(`${bus_name[bus-1]} ${bus_fee[bus-1] * 0.7} 원 결제 부탁드립니다!`);
} else{
    console.log(`${bus_name[bus-1]} ${bus_fee[bus-1]} 원 결제 부탁드립니다!`);
}