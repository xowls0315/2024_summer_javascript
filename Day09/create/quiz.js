// //1. 세로
// const bg1 = prompt("배경색 3가지 입력(세로)").split(" ");
// bg1.forEach((x)=>{
//     const div1 = document.createElement("div");
//     div1.style.height = "100px";
//     div1.style.width = "150px";
//     div1.style.backgroundColor = x;
//     div1.style.position = "relative";
//     div1.style.display = "flex";
//     div1.style.flexDirection = "column";

//     const span1 = document.createElement("span");
//     span1.innerText = "Color";
//     span1.style.color = "white";
//     span1.style.position = "absolute";
//     span1.style.bottom = "0";
//     span1.style.right = "0";
//     span1.style.margin = "5px";
//     document.body.appendChild(div1);
//     div1.appendChild(span1);
// });

// //2. 가로
// const bg2 = prompt("배경색 3가지 입력(가로)").split(" ");
// bg2.forEach((x)=>{
//     const div2 = document.createElement("div");
//     div2.style.height = "100px";
//     div2.style.width = "150px";
//     div2.style.backgroundColor = x;
//     div2.style.position = "relative";
//     div2.style.display = "flex";
//     div2.style.flexDirection = "row";

//     const span2 = document.createElement("span");
//     span2.innerText = "Color";
//     span2.style.color = "white";
//     span2.style.position = "absolute";
//     span2.style.bottom = "0";
//     span2.style.right = "0";
//     span2.style.margin = "5px";
//     document.body.appendChild(div2);
//     div2.appendChild(span2);
// });


//세로
const makeBox = (x) => {
    const div = document.createElement("div");
    div.style.width = "150px";
    div.style.height = "100px";
    div.style.backgroundColor = x;
    document.body.appendChild(div);
};

["red", "blue", "black", "skyblue"].forEach((x) => {
    makeBox(x);
});
//가로
// -1) container 만들어야함 그리고 flex 줘야함 ㅇㅈ?
// -2) box 5개 만들어야함 그리고 컨테이너에 넣어야함
// -3) container를 body에 뿌림 ㅅㄱ

const container = document.createElement("div");
container.style.display = "flex";

const makeBox1 = (x) => {
    const div = document.createElement("div");
    div.style.width = "150px";
    div.style.height = "100px";
    div.style.backgroundColor = x;
    return div;
};

["pink", "orange", "blue", "green", "yellow"].forEach((x)=>{
    container.appendChild(makeBox1(x));
});

document.body.appendChild(container);
