# 최재학 [202030432]

## [03월23일]
>각종 연산자
나누어 지는 수: 피제수, 나누는 수: 제수
나머지 연산자의 부호는 왼쪽 피제수(피연산자)의 부호를 따른다.
실수에도 나머지 연산자를 적용할 수 있다.
따옴표를 출력하고 싶으면 큰따음표 안에 작은 따음표
혹은 작은 따음표안에 큰 따음표를 넣어서 출력할 수
있지만 이스케이프 문자(\)를 사용하는 것이 더 좋다.
템플릿 문자열 : ``, ${<표현식>}는 표현식이 계산되어 문자열에 들어간다.
new Date().getFullYear() : 현재 연도
보통 let date = new Date();
h = date.getHours(); 로 사용한다. - 현재 시간
date.getMonth()+1; -월, 0~11을 반환하기 때문에 1을 더해야 단위가 맞는다.
date.getDay(); - 일
date.getHours(); - 시간
date.getMinutes(); -분
date.getSeconds(); - 초
[n] : 문자 선택 연산자, 문자열의 n번 째 문자를 선택
`올해는 ${<new Date().getFullYear()>}년입니다.`[4]
2
`올해는 ${<new Date().getFullYear()>}년입니다.`[5]
0
`올해는 ${<new Date().getFullYear()>}년입니다.`[6]
2
`올해는 ${<new Date().getFullYear()>}년입니다.`[7]
1
불(boolean) :true, false, 참과 거짓을 표현할 때 사용
비교 연산자: ==, !=, >, >, >=, <=
비교 연산자는 문자열에서도 사용할 수 있고 사전 순서에서 앞에
있는 문자열이 작은 것
논리 연산자: !, ||, &&
변수 선언 키워드: let
복합 대입 연산자: +=, -=, *=, /=
증감 연산자: 변수++, ++변수, 변수--, --변수 
자료형 검사: typeof()
String: 문자열, number: 숫자, boolean: 불, function: 함수
object: 객체, undefined:초기화되지 않은 형식으로 추출
강제 자료형 변환
Number() : 숫자로 자료형 변환, 숫자로 변환할 수 없는 값이 들어가면 NaN(Not a Number):표현 불가능한 수치형 결과가 된다.
String() : 문자열로 자료형 변환
Boolean() : 불로 자료형 변환, 0, NaN, ""[빈 문자열], null,undefined는 false, 나머지는 모두 true로 변환된다.
숫자 + 문자열 = 문자열, !연산자를 두 번 사용하면 
Boolean() 함수와 같은 효과, console.log(!!0)는 false
일치 연산자
=== 자료형과 값이 같은지 비교
!== 자료형과 값이 다른지 비교
상수 생성 키워드 : const
상수의 값을 변경하려하면 오류가 발생한다.
if, if else 조건문 
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