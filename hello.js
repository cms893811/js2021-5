let date = new Date();
let hours = date.getHours();

if(hours < 11) {
    if(hours < 11) {
        console.log("아침 먹을 시간입니다.");
    } else if(hours < 15){
        console.log("점심 먹을 시간입니다.");
    } else {
        console.log("저녁 먹을 시간입니다.");
    }
}

let input = 32;
switch (input % 2) {
    case 0:
        console.log("짝수입니다.");
        break;
    case 1:
        console.log("홀수입니다.");
        break;   
}