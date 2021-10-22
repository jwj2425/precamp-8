const profile ={
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}
// undefined
if(profile.age >=20){
    console.log("성인입니다")
} else if(profile.age >=8){
    console.log("학생입니다")
} else if(profile.age <=7){
    console.log("어린이입니다")
}

// VM2822:4 학생입니다
// undefined



f(profile.age >=20){
    console.log("성인입니다")
} else if(profile.age >=8){
    console.log("학생입니다")
} else if(profile.age <8){
    console.log("어린이입니다")
}

// VM2853:4 학생입니다
// undefined
if(profile.age >=20){
    console.log("성인입니다")
} else if(profile.age >=8){
    console.log("학생입니다")
} else {
    console.log("어린이입니다")
}

// VM2870:4 학생입니다
// undefined
if(profile.age >=20){
    console.log("성인입니다")
} else if(profile.age >=8){
    console.log("학생입니다")
} else if(age){
    console.log("어린이입니다")
}

// VM2896:4 학생입니다
// undefined

f(profile.age >=20) {
    console.log("성인입니다.")
} else if(profile.age >=8) {
    console.log("학생입니다.")
} else if(profile.age) {
    console.log("어린이입니다.")
}
    
// VM7418:4 학생입니다.