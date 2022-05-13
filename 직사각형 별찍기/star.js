// 문제 설명
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.


const a = 2, b = 3;

// 별 모양 문자를 저장할 변수 선언.
let star = "";

// a:가로, b:세로.
for (let k = 0; k < b; k++) {
    // star에 '*'를 추가, a만큼 반복.
    for (i = 0; i < a; i++) {
        star += "*"
    }
    // a만큼 별문자 저장후 다음 열로 넘어가기.
    star += "\n"
}

console.log(star);



// best sovling

// const n = data.split(" ");
// const a = Number(n[0]), b = Number(n[1]);
// const row = '*'.repeat(a)
// for(let i =0; i < b; i++){
//     console.log(row)
// }