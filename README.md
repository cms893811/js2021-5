# 최재학 [202030432]
<<<<<<< HEAD
## [04월13일]
> 익명 함수
- 익명 함수
이름을 붙이지 않고 함수 생성, 함수 호출 시 코드 실행
```
let 변수이름 = function() {
    console.log("첫 번째 줄");
    console.log("두 번째 줄");
};
변수();
console.log(함수);
```
- 선언적 함수
이름을 붙여 함수 생성
```
function 함수이름() {}
```
- 화살표 함수(arrow function)
function을 생략 가능하고, 하나의 표현식일 경우 블록도 생략이 가능하다.
익명 함수를 간단하게 작성하는 방법
- 클론 방법
git clone 깃허브 링크
- 함수에는 매개변수가 여러개 일 수도, 리턴이 없을 수도 있다.
- 매개 변수를 입력하지 않고 함수 호출, 초기화 해서 사용하는 경우 해당 변수는 undefined, 심각한 오류 발생X
- 조건문으로 초기화 해줄 수 있음
- default parameter 이용 시 더 쉬움
```
function print(name, count = 1) {
    console.log(`${name}이/가 ${count}개 있습니다.`);
}
print("사과"); // <- count 미 호출
----------------------------
출력
사과이/가 1개 있습니다.
```
- 콜백함수
함수의 매개 변수로 전달되는 함수
#표준 내장 함수
- parseInt()
    문자열을 정수로 변환
- parseFloat()
    문자열을 실수로 변환
변환 불가능 문자와 숫자가 섞여 있을 시 숫자만 변환
- 타이머 함수
'특정 시간 후'에 또는 '특정 시간마다' 어떤 일을 할 때 사용
시간은 밀리초
- setTimeout(함수, 시간)
- setInterval(함수, 시간)
# 최재학 [202030432]
=======
>>>>>>> 60b98d8669cd25074fb0f89b0a528576faac1d95
## [04월06일]
> 
# for in 반복문
- 인덱스를 가져와서 반복
<<<<<<< HEAD
```
=======
```jsx
>>>>>>> 60b98d8669cd25074fb0f89b0a528576faac1d95
    for(let index in array) {
    }
```
# for of 반복문
- 요소를 가져와서 반복
<<<<<<< HEAD
```
=======
```jsx
>>>>>>> 60b98d8669cd25074fb0f89b0a528576faac1d95
    for(let element of array) {
    }
```
- 배열을 선언할 때는 배열의 이름을 잘 명시해야함
# 중첩 반복문
- 예)
<<<<<<< HEAD
```
=======
```jsx
>>>>>>> 60b98d8669cd25074fb0f89b0a528576faac1d95
    let output = "";
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < i + 1; j++) {
            output += '*';
        }
        output += '\n'
    }
    console.log(output);
```
# break 키워드
- switch 조건문 이나 반복문을 벗어날 때 사용
- push는 배열의 끝에 원하는 값을 추가해주는 함수
<<<<<<< HEAD
```
=======
```jsx
>>>>>>> 60b98d8669cd25074fb0f89b0a528576faac1d95
    bar = [0];
    bar.push(1, 2, 3);
    console.log(bar)
    //실행 결과
    //[0, 1, 2, 3]
```
- pop은 배열의 마지막 주소에 있는 값을 제거해주는 함수
<<<<<<< HEAD
```
=======
```jsx
>>>>>>> 60b98d8669cd25074fb0f89b0a528576faac1d95
    bar = [0, 1, 2, 3];
    bar.pop();
    console.log(bar)
    //실행 결과
    //[0, 1, 2]
```
- shift는 배열의 첫번째 주소에 있는 값을 제거한 후에 반환해주는 함수
```jsx
    bar = [0, 1, 2];
    bar.shift();
    console.log(bar)
    //실행 결과
    //[1, 2]
```
- push와 pop를 이용하면 stack, push와 shift를 이용하면 queue
- reverse는 배열의 요소들을 역순으로 만들어주는 함수
- sort는 배열을 정렬
- slice는 배열의 일부를 복사하는 함수
- splice는 배열의 일부를 제거하며 복사하는 함수, 매개변수를 통해 잘라진 곳에 요소를 집어넣을 수 있음
# continue 키워드
- 반복문 내부에서 현재 반복을 멈추고 다음 반복을 진행할 때 사용
- 예)
```jsx
    for(let i = 1; i < 10;. i++) {
        if (i % 2 == 0) {
            continue;
        }
        conesole.log(i);
    }
```
# 스코프(Scope)
- 변수를 사용할 수 있는 범위
- 스코프 == 블록
- 스코프 내부에서 이름이 중복되도 독립적으로 사용됨
# var 키워드: 변수 선언시 사용 현재는 잘 사용하지 않는다.

# 최재학 [202030432]
## [03월30일]
> 조건문 if/switch, 삼항 연산자
- 중첩 조건문: 조건문(if) 안에 조건문(if)을 중첩해 사용하는 것
예)
```jsx
    let date = new Date();
    let hours = date.getHours();
<<<<<<< HEAD

    if(hour < 11) {
        if(hours < 11) {
            console.log("아침 먹을 시간입니다.");
        } else {`
            if(hours < 15){
                console.log("점심 먹을 시간입니다.");
            } else {
                console.log("저녁 먹을 시간입니다.");
            }
        }
    }
```
- switch 조건문: 조건의 결과(case)에 해당하는 블록을 실행, break 키워드를 <br>
  실행하지 않으면 조건문을 벗어나지 않고 break를 발견할 때까지 읽는다.<br>
  즉, 여러 개의 키값이 동일한 블록을 실행해야할 때 사용<br>
예)
```jsx
    let input = 32;
    switch (input % 2) {
    case 0:
        console.log("짝수입니다.");
        break;
    case 1:
        console.log("홀수입니다.");
        break;   
}
```
- 삼항 연산자<br>
<불 표현식(조건문)> ? <참(일 때 실행)> : <거짓(일 때 실행)><br>
- 짧은 초기화 조건문
```jsx
let test;
test = test || "초기화합니다."
입력을 받는 방법
const repl = require('repl');
repl.start({
    prompt: "숫자 입력> ",
    eval: (command, context, filename, callback) => {
        let number = Number(command);
        if(isNaN(number)) {
            console.log("숫자가 아닙니다.")
        } else {
            console.log("숫자입니다.");
        }
        callback();
    }
})
```
- 반복문 for
```jsx
for (let i = 0; i <1000; i++) {
    console.log("출력");
}
```
- 배열<br>
여러 개의 자료를 한꺼번에 다룰 수 있는 자료형<br>
대괄호 내부의 각 자료는 쉼표로 구분<br>
배열에는 여러 자료형이 섞여 있을 수 있음<br>
```jsx
let 이름 = [자료, 자료...]
```
- while 반복문: 특정한 숫자를 증가시켜 불 표현식을 false로 만들어 반복문을 벗어남
```jsx
while (<불 표현식(조건)>) {
    // 조건이 참인 동안 실행할 문장
}
```
반복의 횟수가 결정되어 있다면 for문, 아니면 while문을 사용<br>
- 역 for 반복문: 배열 반복을 뒤에서부터 실행해야할 때 사용
```jsx
let array = [1, 2, 3, 4, 5, 6];
for(let i = length - 1; i >= 0; i--) {
    console.log(array[i]);
}
```
- for in 반복문과 for of 반복문
```jsx
for(let 인덱스 in 배열) {

=======

    if(hour < 11) {
        if(hours < 11) {
            console.log("아침 먹을 시간입니다.");
        } else {`
            if(hours < 15){
                console.log("점심 먹을 시간입니다.");
            } else {
                console.log("저녁 먹을 시간입니다.");
            }
        }
    }
```
- switch 조건문: 조건의 결과(case)에 해당하는 블록을 실행, break 키워드를 <br>
  실행하지 않으면 조건문을 벗어나지 않고 break를 발견할 때까지 읽는다.<br>
  즉, 여러 개의 키값이 동일한 블록을 실행해야할 때 사용<br>
예)
```jsx
    let input = 32;
    switch (input % 2) {
    case 0:
        console.log("짝수입니다.");
        break;
    case 1:
        console.log("홀수입니다.");
        break;   
}
```
- 삼항 연산자<br>
<불 표현식(조건문)> ? <참(일 때 실행)> : <거짓(일 때 실행)><br>
- 짧은 초기화 조건문
```jsx
let test;
test = test || "초기화합니다."
입력을 받는 방법
const repl = require('repl');
repl.start({
    prompt: "숫자 입력> ",
    eval: (command, context, filename, callback) => {
        let number = Number(command);
        if(isNaN(number)) {
            console.log("숫자가 아닙니다.")
        } else {
            console.log("숫자입니다.");
        }
        callback();
    }
})
```
- 반복문 for
```jsx
for (let i = 0; i <1000; i++) {
    console.log("출력");
}
```
- 배열<br>
여러 개의 자료를 한꺼번에 다룰 수 있는 자료형<br>
대괄호 내부의 각 자료는 쉼표로 구분<br>
배열에는 여러 자료형이 섞여 있을 수 있음<br>
```jsx
let 이름 = [자료, 자료...]
```
- while 반복문: 특정한 숫자를 증가시켜 불 표현식을 false로 만들어 반복문을 벗어남
```jsx
while (<불 표현식(조건)>) {
    // 조건이 참인 동안 실행할 문장
}
```
반복의 횟수가 결정되어 있다면 for문, 아니면 while문을 사용<br>
- 역 for 반복문: 배열 반복을 뒤에서부터 실행해야할 때 사용
```jsx
let array = [1, 2, 3, 4, 5, 6];
for(let i = length - 1; i >= 0; i--) {
    console.log(array[i]);
}
```
- for in 반복문과 for of 반복문
```jsx
for(let 인덱스 in 배열) {

>>>>>>> 60b98d8669cd25074fb0f89b0a528576faac1d95
}
for(let 요소 of 배열) {

}
```
- 중첩 반복문: 중첩 조건문처럼 반복문을 여러 번 중첩해서 사용하는 것

## [03월23일]
>각종 연산자
나누어 지는 수: 피제수, 나누는 수: 제수<br>
나머지 연산자의 부호는 왼쪽 피제수(피연산자)의 부호를 따른다.<br>
실수에도 나머지 연산자를 적용할 수 있다.<br>
따옴표를 출력하고 싶으면 큰따음표 안에 작은 따음표<br>
혹은 작은 따음표안에 큰 따음표를 넣어서 출력할 수<br>
있지만 이스케이프 문자(\)를 사용하는 것이 더 좋다.<br>
템플릿 문자열 : ``, ${<표현식>}는 표현식이 계산되어 문자열에 들어간다.<br>
new Date().getFullYear() : 현재 연도<br>
보통 let date = new Date();<br>
h = date.getHours(); 로 사용한다. - 현재 시간<br>
date.getMonth()+1; -월, 0~11을 반환하기 때문에 1을 더해야 단위가 맞는다.<br>
date.getDay(); - 일<br>
date.getHours(); - 시간<br>
date.getMinutes(); -분<br>
date.getSeconds(); - 초<br>
[n] : 문자 선택 연산자, 문자열의 n번 째 문자를 선택<br>
`올해는 ${<new Date().getFullYear()>}년입니다.`[4]<br>
2<br>
`올해는 ${<new Date().getFullYear()>}년입니다.`[5]<br>
0<br>
`올해는 ${<new Date().getFullYear()>}년입니다.`[6]<br>
2<br>
`올해는 ${<new Date().getFullYear()>}년입니다.`[7]<br>
1<br>
불(boolean) :true, false, 참과 거짓을 표현할 때 사용<br>
비교 연산자: ==, !=, >, >, >=, <=<br>
비교 연산자는 문자열에서도 사용할 수 있고 사전 순서에서 앞에<br>
있는 문자열이 작은 것<br>
논리 연산자: !, ||, &&<br>
변수 선언 키워드: let<br>
복합 대입 연산자: +=, -=, *=, /=<br>
증감 연산자: 변수++, ++변수, 변수--, --변수 <br>
자료형 검사: typeof()<br>
String: 문자열, number: 숫자, boolean: 불, function: 함수<br>
object: 객체, undefined:초기화되지 않은 형식으로 추출<br>
강제 자료형 변환<br>
Number() : 숫자로 자료형 변환, 숫자로 변환할 수 없는 값이 들어가면<br>
 NaN(Not a Number):표현 불가능한 수치형 결과가 된다.<br>
String() : 문자열로 자료형 변환<br>
Boolean() : 불로 자료형 변환, 0, NaN, ""[빈 문자열], <br>
null,undefined는 false, 나머지는 모두 true로 변환된다.<br>
숫자 + 문자열 = 문자열, !연산자를 두 번 사용하면 <br>
Boolean() 함수와 같은 효과, console.log(!!0)는 false<br>
일치 연산자<br>
=== 자료형과 값이 같은지 비교<br>
!== 자료형과 값이 다른지 비교<br>
상수 생성 키워드 : const<br>
상수의 값을 변경하려하면 오류가 발생한다.<br>
if, if else 조건문 <br>

## [03월16일]
> Node.js, 환경설정, console.log("문자열") 메소드 부분이 중요! <br />

Node.js가 등장하면서 자바스크립트로 웹 서버를 개발할 수 있게 됨<br />
자바로 모바일 애플리캐이션을 만들 수 있게됨-네이티브 어플리케이션<br />
데스크톱 애플리케이션을 자바스크립트로 만들게 됨. 데이터 베이스<br />
실습환경 구축. 표현식이 하나 이상 모일 경우, 마지막에 종결의미로 세미콜론<br />
자바스크립트에서 사용하는 키워드, 키워드로 함수명을 지정해서는 안됨<br />
식별자: 변수와 함수 이름 등으로 사용하는 단어<br />
키워드 사용 불가<br />
특수 문자는 _와$만 허용<br />
숫자로 시작하면 안됨<br />
공백은 입력하면 안됨<br />
식별자 사용 규칙<br />
생성자 함수의 이름은 항상 대문자로 시작<br />
변수, 함수, 속성, 메소드의 이름은 항상 소문자로 시작<br />
여러단어로 된 식별자는 각 단어의 첫 글자를 대문자로 한다.<br />
출력 메소드<br />
console.log("문자열") 메소드<br />
사칙 연산자 +, -, *, /<br />


<table>
</table>