const div = document.createElement("div");
div.innerText = "배고프당";

//1. 스타일 직접 주거나.
div.style.color = "red";
document.body.appendChild(div);

//2. class 이름을 직접 주기.
div.className = "box";
document.body.appendChild(div);