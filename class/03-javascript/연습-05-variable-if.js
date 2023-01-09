// 데이터 타입, 연산자 실습

1+1
// 2
1+"만원"
// '1만원'
1+"1"
// '11'
1-"1"
// 0
"코드"+"캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
false || true
// true
!true
// false
!false
// true

// 조건문 실습 1

if(1+1 ===2){
    console.log("정답")
} else {
    console.log("틀림")
}
// VM1179:2 정답
undefined
if(true){
    console.log("정답")
} else {
    console.log("틀림")
}
// VM1229:2 정답
undefined
if(!true){
    console.log("정답")
} else {
    console.log("틀림")
}
// VM1244:4 틀림
undefined
if(0){
    console.log("정답")
} else {
    console.log("틀림")
}
// VM1271:4 틀림
undefined
if(1){
    console.log("정답")
} else {
    console.log("틀림")
}
// VM1393:2 정답

// 퀴즈
// 철수의 나이가 20세 이상이면 성인, 8세이상 19세 이하면 학생, 7세 이하면 어린이
const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}

if(profile.name ==="철수" && profile.age >= 20){
    console.log("성인")
// } else if(profile.name ==="철수" && (profile.age >= 8 && profile.age <=19)){ ==>
} else if(profile.name ==="철수" && profile.age >= 8){
    console.log("학생")
}
// } else {
//     console.log("어린이")
// }
else if(profile.age > 0){ //이 부분을 추가 함으로써 코드 최적화 및 에러 핸들링 가능
    console.log("어린이")
} else {
    console.log("잘못 입력")
}

// 학생