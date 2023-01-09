let persons = [
    { name: "철수", age: 17},
    { name: "영희", age: 22},
    { name: "토우", age: 5},
    { name: "그루", age: 65},
    { name: "도비", age: 3},]
// undefined
for (let count = 0; count < persons.length; count++) {
    if(persons[count].age >= 19){
        console.log("성인");
    } else {
        console.log("미성년자")
    }
}
// VM3896:5 미성년자
// VM3896:3 성인
// VM3896:5 미성년자
// VM3896:3 성인
// VM3896:5 미성년자
undefined
for (let count = 0; count < persons.length; count++) {
    if(persons[count].age >= 19){
        console.log(persons[count].name + "성인");
    } else {
        console.log(persons[count].name + "미성년자")
    }
}
// VM4148:5 철수미성년자
// VM4148:3 영희성인
// VM4148:5 토우미성년자
// VM4148:3 그루성인
// VM4148:5 도비미성년자

const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망공" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
  ];
//   undefined
  for (let index = 0; index < fruits.length; index++) {
      console.log(fruits[index].number + " "+ fruits[index].title)
  }
//   VM5731:2 1 레드향
//   VM5731:2 2 샤인머스켓
//   VM5731:2 3 산청딸기
//   VM5731:2 4 한라봉
//   VM5731:2 5 사과
//   VM5731:2 6 애플망공
//   VM5731:2 7 딸기
//   VM5731:2 8 천혜향
//   VM5731:2 9 과일선물세트
//   VM5731:2 10 귤
  
  for (let index = 0; index < fruits.length; index++) {
      console.log(`${fruits[index].number} ${fruits[index].title}`)
  }
//   VM5981:2 1 레드향
//   VM5981:2 2 샤인머스켓
//   VM5981:2 3 산청딸기
//   VM5981:2 4 한라봉
//   VM5981:2 5 사과
//   VM5981:2 6 애플망공
//   VM5981:2 7 딸기
//   VM5981:2 8 천혜향
//   VM5981:2 9 과일선물세트
//   VM5981:2 10 귤
//   undefined
  for (let index = 0; index < fruits.length; index++) {
      console.log(`과일 차트 ${fruits[index].number} 위는${fruits[index].title}입니다`)
  }
//   VM6149:2 과일 차트 1 위는레드향입니다
//   VM6149:2 과일 차트 2 위는샤인머스켓입니다
//   VM6149:2 과일 차트 3 위는산청딸기입니다
//   VM6149:2 과일 차트 4 위는한라봉입니다
//   VM6149:2 과일 차트 5 위는사과입니다
//   VM6149:2 과일 차트 6 위는애플망공입니다
//   VM6149:2 과일 차트 7 위는딸기입니다
//   VM6149:2 과일 차트 8 위는천혜향입니다
//   VM6149:2 과일 차트 9 위는과일선물세트입니다
//   VM6149:2 과일 차트 10 위는귤입니다