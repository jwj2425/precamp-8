const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" }
]
// undefined
fruits[0].number
// 1
fruits[0].title
// '레드향'
fruits[0].number + " " + fruits[0].title
// '1 레드향'
for( let i = 0 ; i<10 ; i=i+1 ){
    console.log(fruits[i])
}
// VM4453:2 {number: 1, title: '레드향'}number: 1title: "레드향"[[Prototype]]: Object
// VM4453:2 {number: 2, title: '샤인머스켓'}
// VM4453:2 {number: 3, title: '산청딸기'}
// VM4453:2 {number: 4, title: '한라봉'}
// VM4453:2 {number: 5, title: '사과'}
// VM4453:2 {number: 6, title: '애플망고'}
// VM4453:2 {number: 7, title: '딸기'}
// VM4453:2 {number: 8, title: '천혜향'}
// VM4453:2 {number: 9, title: '과일선물세트'}
// VM4453:2 {number: 10, title: '귤'}
for( let i = 0 ; i<10 ; i=i+1 ){
    console.log(fruits[i].number + " " + fruits[i].title)
}
// VM4640:2 1 레드향
// VM4640:2 2 샤인머스켓
// VM4640:2 3 산청딸기
// VM4640:2 4 한라봉
// VM4640:2 5 사과
// VM4640:2 6 애플망고
// VM4640:2 7 딸기
// VM4640:2 8 천혜향
// VM4640:2 9 과일선물세트
// VM4640:2 10 귤
// undefined
for( let i = 0 ; i<fruits.length ; i=i+1 ){
    console.log(fruits[i].number + " " + fruits[i].title)
}
// VM4871:2 1 레드향
// VM4871:2 2 샤인머스켓
// VM4871:2 3 산청딸기
// VM4871:2 4 한라봉
// VM4871:2 5 사과
// VM4871:2 6 애플망고
// VM4871:2 7 딸기
// VM4871:2 8 천혜향
// VM4871:2 9 과일선물세트
// VM4871:2 10 귤
undefined
for( let i = 0 ; i<fruits.length ; i++ ){
    console.log(fruits[i].number + " " + fruits[i].title)
}
// VM4882:2 1 레드향
// VM4882:2 2 샤인머스켓
// VM4882:2 3 산청딸기
// VM4882:2 4 한라봉
// VM4882:2 5 사과
// VM4882:2 6 애플망고
// VM4882:2 7 딸기
// VM4882:2 8 천혜향
// VM4882:2 9 과일선물세트
// VM4882:2 10 귤
// undefined
for( let i = 0 ; i<fruits.length ; ++i ){
    console.log(fruits[i].number + " " + fruits[i].title)
}
// VM4897:2 1 레드향
// VM4897:2 2 샤인머스켓
// VM4897:2 3 산청딸기
// VM4897:2 4 한라봉
// VM4897:2 5 사과
// VM4897:2 6 애플망고
// VM4897:2 7 딸기
// VM4897:2 8 천혜향
// VM4897:2 9 과일선물세트
// VM4897:2 10 귤
// undefined