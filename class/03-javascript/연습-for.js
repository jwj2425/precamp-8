for(let i=0 ; i<5 ; i=i+1 ){
    console.log("Hello!!!!")
    }
    // 5VM3023:2 Hello!!!!
    // undefined
    const classmates = ["철수", "영희", "훈이"]
    // undefined
    for(let i=0 ; i<3 ; i=i+1){
        console.log(classmates[0] + "입니다!!!")
    }
    // 3VM3555:2 철수입니다!!!
    // undefined
    for(let i=0 ; i<3 ; i=i+1){
        console.log(classmates[i] + "입니다!!!")
    }
    // VM3591:2 철수입니다!!!
    // VM3591:2 영희입니다!!!
    // VM3591:2 훈이입니다!!!
    // undefined
    for(let i=0 ; i<classmates.length ; i=i+1){
        console.log(classmates[i] + "입니다!!!")
    }
    // VM3627:2 철수입니다!!!
    // VM3627:2 영희입니다!!!
    // VM3627:2 훈이입니다!!!
    // undefined
    for(let i=0 ; i<classmates.length ; i++){
        console.log(classmates[i] + "입니다!!!")
    }
    // VM3638:2 철수입니다!!!
    // VM3638:2 영희입니다!!!
    // VM3638:2 훈이입니다!!!
    // undefined
    for(let i=0 ; i<classmates.length ; ++i){
        console.log(classmates[i] + "입니다!!!")
    }
    // VM3655:2 철수입니다!!!
    // VM3655:2 영희입니다!!!
    // VM3655:2 훈이입니다!!!
    // undefined