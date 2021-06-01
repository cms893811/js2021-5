# 최재학 [202030432]
## [06월01일]
> 
- 인터넷 익스플로러에서는 let, const, 템플릿 문자열, 화살표 함수, for of 사용 불가
- 템플릿 문자열: `${}`
- 화살표 함수: const 이름 = () => {}
- for of: for(let item of array) { }
## screen 객체
- width : 화면의 너비
- height : 화면의 높이
- availWidth : 실제 화면에서 사용 가능한 너비
- availHeight : 실제 화면에서 사용 가능한 높이
- colorDepth : 사용 가능한 색상 수
- pixelDepth : 한 픽셀당 비트 수

## location 객체 메소드
- assign(링크) : 매개 변수로 전달한 위치로 이동
- reloat() : 새로고침
- replace() 매개 변수로 전달한 위치로 이동

## history 객체 메소드
- forward() : 앞으로 이동
- back() :  뒤로 이동

## navigator 객체
- appCodeName 웹 브라우저의 코드 이름
- appName 웹 브라우저의 이름
- appVersion 웹 브라우저의 버전
- paltform 사용 중인 운영체제의 시스템 환경
- uesrAgent 웹 브라우저의 전체적인 정보

## 객체 탐색 메소드
parent() : 부모 태그 선택
find() : 후손 태그 찾기

## 문서 객체 조작
each() : 선택된 문서 객체에 반복을 적용

## 문자 조작
text() : 태그 내부의 문자 조작
html() : 태그 내부의 문자를 조작(HTML 태그 인식)
- 선택자로 여러 개의 문서 객체를 선택할 때
- - text ( ) 메소드는 모든 문서 객체 내부의 문자를 출력
- - html( ) 메소드는 첫 번째 문서 객체 내부의 문자를 출력

## 스타일 조작
css() 스타일을 조작

## 속성 조작
attr() 속성을 조작

## 문서 객체 추가 메소드
$(A).prepentTo(B) : A를 B 안쪽 앞에 추가
$(A).appentTo(B) : A를 B 안쪽 뒤에 추가
$(A).insertBefore(B) : A를 B 앞에 추가
$(A).insertAfter(B) : A를 B 뒤에 추가

```
<script>
$(document).ready(function () {
            $('<h1></h1>')
                .text('안녕하세요')
                .attr('data-test', 'test')
                .css({
                    baclgroundColor: 'red',
                    color: 'white'
                })
                .appendTo('body');
        });
</script>
```

```
<h1 data-test='test' style= backgroundColor: 'red', color: white>안녕하세요</h1>
```
- 이벤트

## 애니메이션
animate()
- 스타일에 적용
- 숫자를 적용할 수 있는 모든 속성에 animate( ) 메소드 사용 가능
- 콜백 함수는 애니메이션이 종료되었을 때 호출, 생략 가능함

## [05월25일]
> 요청과 응답, express 모듈, 서버 생성/실행, 페이지 라우팅, response 객체, request 객체, 미들웨어
- 요청 메시지: 클라이언트가 서버로 보내는 편지
- 응답 메시지: 서버가 클라이언트로 보내는 편지<br>
express 모듈을 사용한 서버 생성과 실행
```
// 모듈 추출
const express = require('express');

//서버 생성
const app = express();

//request 이벤트 리스너 설정
app.use((request, response) => {
    response.send('<h1>Hello express</h1>');
});

// 서버 실행
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
컴퓨터에는 0~65535번까지 포트가 있다.

- 페이지 라우팅 : 클라이언트 요청에 적절한 페이지를 제공하는 기술
express 모듈은 app 객체의 다음 메소드를 활용해 페이지 라우팅을 함
- get(path, callback) : GET 요청이 발생했을 때 이벤트 리스너 지정
- post(path, callback) : POST 요청이 발생했을 때 이벤트 리스너 지정
- put(path, callback) : PUT 요청이 발생했을 때 이벤트 리스너 지정
- delete(path, callback) : DELETE 요청이 발생했을 때 이벤트 리스너 지정
- all(path, callback) : 모든 요청이 발생했을 때 이벤트 리스너 지정
<br>

- 페이지 라우팅을 할 때 토큰을 활용함
- ':<토큰 이름>' 형태로 설정
- 토큰은 다른 문자열로 변환 입력가능, request 객체의 params 속성으로 전달됨
<br>

페이지 라우팅
```
//모듈 추출
const express = require('express');

// 서버 생성
const app = express();

// request 이벤트 리스너 설정
app.get('/page/:id', (request, response) => {
    // 토큰 꺼내기
    const id = request.params.id;
    // 응답
    response.send(`<h1>${id} Page</h1>`);
});

// 서버 실행
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
## response 객체
- send() : 데이터 본문을 제공
- status() : 상태 코드를 제공
- set() : 헤더를 설정
<br>

response 객체의 기본 메소드
```
//모듈 추출
const express = require('express');

// 서버 생성
const app = express();

// request 이벤트 리스너 설정
app.get('*', (request, response) => {
    response.status(404);
    response.set('methodA', 'ABCDE');
    response.set({
        'methodB1': 'FGHIJ',
        'methodB2': 'KLMNO'
    });
    response.send('404 ERORR');
});

// 서버 실행
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
Content-Type
서버가 데이터를 제공할 떼 Content-Type 속성을 헤더에 제공하여 웹 브라우저가 제공된 <br>
데이터의 형태를 해석할 수 있게 해야함<br>
예) 그림파일 제공
```
//모듈 추출
const express = require('express');
const fs = require('fs');

// 서버 생성
const app = express();

// request 이벤트 리스너 설정
app.get('/image', (request, response) => {
    fs.readFile('./image.png', (error, data) => {
        response.type('image/png');
        response.send(data);
    }); 
});

app.get('/audio', (request, response) => {
    fs.readFile('./audio.mp3', (error, data) => {
        response.type('audio/mpeg');
        response.send(data);
    }); 
});

// 서버 실행
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
리다이렉트 : 3xx, 특수한 상태 코드
웹 브라우저가 리다이렉트를 확인하면 화면을 출력하지 않고, 응답 헤더에 있는 Location 속성을 확인해서 해당 위치로 이동

```
// 모듈 추출
const { response } = require('express');
const express = require('express');

//서버 생성
const app = express();

// request 이벤트 리스너 설정
app.get('*', (require, response) => {
    response.redirect('https://www.naver.com/');
});

// 서버 실행
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
## request 객체
요청 매개 변수 추출
```
// 모듈 추출
const express = require('express');

//서버 생성
const app = express();

// request 이벤트 리스너 설정
app.get('*', (require, response) => {
    console.log(request.query);
    response.send(request.query);
});

// 서버 실행
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
## 미들웨어
- 정적 파일 제공 : 웹 페이지에서 변경되지 않는 요소를 쉽게 제공해주는 기능
```
// 모듈 추출
const express = require('express');

//서버 생성
const app = express();
app.use(express.static('public'));

// request 이벤트 리스너 설정
app.get('*', (require, response) => {
    response.send(404);
    response.send('해당 경로에는 아무것도 없습니다.');
});

// 서버 실행
app.listen(52273, () => {
    console/i.log('Server running at http://127.0.0.1:52273');
});
```
- morgan 미들웨어
다른 사람이 만든 미들웨어도 가져와서 사용할 수 있다.
```
// 모듈 추출
const express = require('express');
const morgan = require('morgan');

//서버 생성
const app = express();
app.use(express.static('public'));
app.use(morgan('combined'));

// request 이벤트 리스너 설정
app.get('*', (require, response) => {
    response.send('명령 프롬프트를 확인해주세요.');
});

// 서버 실행
app.listen(52273, () => {
    console/i.log('Server running at http://127.0.0.1:52273');
});
```
## body-parser 미들웨어
- 클라이언트에서 서버로 데이터 전송
- 요청 본문

```
// 모듈 추출
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { request } = require('node:http');
const { response } = require('express');
// 서버 생성
const app = express();
app.use(express.static('public'));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: false}));

// request 이벤트 리스너 설정
app.get('*', (require, response) => {
    // HTML 형식의 문자열 생성
    let output = '';
    output += '<form method="post">';
    output += '<input type="text" name="a" />';
    output += '<input type="text" name="b" />';
    output += '<input type="submit" />';
    output += '</form>';

    response.send(output);
});

app.post('/', (request, response) => {
    //응답
    response.send(request.body);
});

// 서버 실행
app.listen(52273, () => {
    console/i.log('Server running at http://127.0.0.1:52273');
});
```
## RESTful
REST 규정에 맞게 만든 ROA를 따르는 웹 서비스 디자인 표준





## [05월17일]
> process 객체, 이벤트 연결, OS 모듈, url 모듈, File System 모듈 파일 읽기/쓰기, 동기/비동기 처리, request 모듈, cheerio 모듈, async 모듈, 
- 전역 변수: 모든 곳에서 제약없이 사용할 수 있는 변수
# process 객체의 속성과 이벤트
- process 객체: 프로세스 정보를 제공하며, 제어할 수 있게 하는 객체<br>
## node.js의 이벤트 연결 메소드
- on(<이벤트 이름>, 이벤트 핸들러) : 이벤트를 연결
## process 객체의 이벤트
- exit : 프로세스가 종료될 때 발생
- uncaughtException 예외가 일어날 때 발생
```
process.on('exit', () => {
    console.log('프로세스가 종료되었습니다.');
});
process.on('uncaughtException', () => {
    console.log('예외가 발생했습니다.');
});
// 예외 강제 발생
error.error.error();
```
## OS 모듈
os 모듈 추출
```
const os = require('os');
```
- 다른 이름을 사용해도 되지만 같은 이름을 사용하는 것이 알기 쉬움
## os 모듈 메소드
- hostname(); : 운영체제의 호스트 이름을 리턴
- type(); : 운영체제의 이름을 리턴
- platform(); : 운영체제의 플랫폼을 리턴
- arch(); : 운영체제의 아키텍처을 리턴
- release(); : 운영체제의 버전을 리턴
- uptime(); : 운영체제의 실행된 시간을 리턴
- loadavg(); : 에버리지 정보를 담은 배열을 리턴
- totalmem(); : 시스템의 총 메모리를 리턴
- freemem(); : 시스템의 사용 가능한 메모리를 리턴
- cpus(); : CPU의 정보를 담은 객체를 리턴
- networkInterfaces(); : 네트워크 인터페이스의 정보를 담은 배열을 리턴
<br>

- os모듈 추출, 메소드 호출 예시
```
const os = require('os');
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());
```

## url 모듈
```
const url = require('url');
```
- parse(urlStr[, parseQueryString=false, slashesDenoteHost=flase]) : URL 문자열을 URL 객체로 변환해 리턴
- format(urlObj) :URL 객체를 URL 문자열로 변환해 리턴
- resolve(form, to) : 매개 변수를 조합해 URL 문자열을 생성해 리턴
<br>

## File System 모듈
```
const fs = require('fs');
```
## 파일 읽기 메소드
- fs.readFileSync(<파일 이름>) : 동기적으로 파일을 읽어 들임
- fs.readFile(<파일 이름>, <콜백 함수>) : 비동기적으로 파일을 읽어 들임
<br>

- 동기와 비동기의 내부 실행 구조는 다름
## 비동기 처리의 장점
- 자바스크립트 프로그래밍 언어는 C++, 자바보다 느리지만 Node.js를 사용하면 손쉽게 비동기 처리를 구현하여 빠른 처리가 가능

## 파일 쓰기
- fs.writeFileSync(<파일 이름>, <문자열>) : 동기적으로 파일을 씀
- fs.writeFile(<파일 이름>, <문자열>, <콜백 함수>) : 비동기적으로 파일을 씀

## 파일 처리와 예외 처리
- 동기 코드를 예외 처리할 때는 try catch
- 비동기 코드를 예외 처리할 때는 콜백 함수로 전달된 첫 번째 매개변수 error를 활용
<br>

조기리턴: 함수 중간 부분에 리턴을 넣으면 함수가 해당 부분에서 종료되는 것

## 노드 패키지 매니저
- npm을 이용한 외부 모듈 설치
```
npm install <모듈 이름>@<버전>
```

## request 모듈
- 외부 모듈이므로 npm으로 설치해야 사용할 수 있음
```
npm install request
```
설치한 외부 모듈은 내부 모듈처럼 require() 함수로 사용

## cheerio 모듈
- 가져온 웹 페이지의 특정 위치에서 손쉽게 데이터를 추출
## async 모듈
- 대부분의 메소드가 비동기적으로 구성되므로 실행 순서를 정의하기가 어렵고, 들여쓰기도 많은데 이 문제를 어느 정도 해결해 줄 수 있는 모듈

## [05월11일]
> Date 객체, Array 객체, underscore.js 라이브러리, JSON 객체, 예외 처리
- new Date()<br>
현재 시간으로 Date 객체 생성
- new Date(유닉스 타임)<br>
1970년 1월 1일 00시 00분 00초부터 경과한 밀리초로 Date 객체를
생성
- new Date(시간문자열)<br>
문자열로 Date 객체 생성
- new Date(년, 월-1, 일, 시간, 분, 초, 밀리초)<br>
시간 요소를 기반으로 Date 객체 생성
## Date 객체
메소드 활용
- get[]()
- set[]()
- []에는 FullYear, Month, Day, Hours, Minutes, Seconds 등이 들어간다.
```
// 예제 7-7 시간 간격 구하기
let now = new Date();
let before = new Date("Sep 29, 1997");
let interval = now.getTime() - before.getTime();
interval = Math.floor(interval / (1000 * 60 * 60 * 24));
console.log(`태어난지 ${interval}일 지났습니다.`);
```
## Array 객체
대부분 파괴적 메소드로 자기 자신을 변경
- concat() :  매개 변수로 입력한 배열의 요소를 모두 합쳐 배열을 만들어 리턴
- join() : 배열 안의 모든 요소를 문자열로 만들어 리턴
- pop() : 배열의 마지막 요소를 제거하고 리턴
- push() : 배열의 마지막 부분에 새로운 요소 추가
- reverse() : 배열의 요소 순서를 뒤집음
- slice() : 배열 요소의 지정한 부분을 리턴
- sort() : 배열의 요소를 정렬
- splice() : 배열 요소의 지정한 부분을 삭제하고 삭제한 요소를 리턴
```
//예제 7-8 배열 가공
let foo = [
    {
        name: '고구마',
        price: 1000
    },
    {
        name: '감자',
        price: 500
    },
    {
        name: '바나나',
        price: 1500
    },
];
let popped = foo.pop();
console.log('- 배열에서 꺼낸 요소');
console.log(popped);
console.log('- pop() 메소드를 호출한 이후의 배열');
console.log(foo);

foo.push(popped);
foo.push({
    name: '사과',
    price: 2000
},
{
    name: '수박',
    price: 3000
});
console.log('- push() 메소드를 호출한 이후의 배열');
console.log(foo);
```
- forEach() : 배열의 요소를 하나씩 뽑아 반복
- map() : 콜백 함수에서 리턴하는 것을 기반으로 새로운 배열을 만듬
- filter() : 콜백 함수에서 ture를 리턴하는 것으로만 새로운 배열을 만들어 리턴
```
// 예제 7-10
let foo = [10, 20, 304, 41, 44];
// forEach() 메소드
foo.forEach((item, index) => {
    console.log(`${index} - ${item}`);
});
console.log('===================');
// map() 메소드
let bar = foo.map((item, index) => {
    return item * 2;
});
console.log(bar);
console.log('===================');
// filter() 메소드
let foobar = foo.filter((item, index) => {
    return item % 2 == 0;
});
console.log(foobar);
```
## underscore.js 라이브러리
```
    //1번 형태
    const bar =_.sortBy(foo, (item) => item.price);
    console.log(bar);
    //2번 형태
    const foobar = _(foo).sortBy((item) => item.name);
    console.log(foobar);
```
## JOSN 객체
```
// 기본 형태
let foo = [
    {
        name: '고구마',
        price: 1000
    },
    {
        name: '감자',
        price: 500
    },
    {
        name: '바나나',
        price: 1500
    }
];
```
- 문자열을 큰따옴표로 만들어야 한다.
- 모든 키는 큰따옴표로 감싸야 한다
- 숫자, 문자열, 불 자료형만 사용할 수 있다.
## JSON 객체의 메소드
- JSON.stringify(객체, 변환 함수, 공백 개수) : 자바스크립트 객체를 문자로 만든다
- JSON.parse(문자열) : 문자열을 자바스크립트 객체로 파싱한다
## 예외처리
- TypeError 발생
undefined 자료형을 일반적은 객체 또는 함수처럼
다루면 발생하는 예외
```
fuction callThreeTimes(callback) {
    for(let i = 0; i < 3; i++) {
        callback();
    }
    // 정상 실행
    callThreeTimes(function() {console.log('안녕하세요');});

    // 예외 발생
    callTenTimes();
}
```
TypeError를 기본 예외 처리로 처리
```
fuction callThreeTimes(callback) {
    if (callback) {
        for(let i = 0; i < 3; i++) {
            callback();
        }
    } else {
        console.log('매개 변수 callback이 지정되지 않았습니다.');
    }

    // 정상 실행
    callThreeTimes(function() {console.log('안녕하세요');});

    // 예외 발생
    callTenTimes();
}
```
- 고급 예외 처리, try catch finally 구문을 사용
```
try {
    const array = new Array(-2000);
} catch (exception) {
    console.log(`${exception.name} 예외가 발생했습니다.`)
} finally {
    console.log('finally 구문이 실행되었습니다.')
}
```
## 예외 강제 발생
```
const error = new Error('메시지');
error.name = '내 마음대로 오류';
error.message = '오류의 메시지';
// 예외 발생
throw error;
```
## [05월04일]
>
- 프로토타입<br>
생성자 함수로 만든 객체는 프로토타입이라는 공간에 메소드를 지정해서 모든 객체가 공유 하도록 함, 해당 함수를 생성자 함수로 사용했을 때만 의미가 있음
```
//생성자 함수
function Product(namem price) {
    this.name = name;
    this.price = price;
}
Product.prototype.print = function() {
    console.log(`${product.name}의 가격은 ${product.price}원입니다.`);
};
let product = new Product("바나나", 1200);
product.print();
```
- null의 값과 자료형
0, NaN, ""은 false로 변형될 뿐이지 실제로는 값이 들어있는 것
null은 아예 값이 없는 상태 undefined를 인위적으로 만들 때 사용
### 표준 내장 객체
- 기본 자료형<br>
자바스크립트에서 제공하는 숫자(number), 문자열(string), 불(boolean)을 기본 자료형이라고 한다.
차이점: 기본 자료형은 객체가 아니므로 속성과
메소드를 추가할 수 없음
다만 프로토타입으로 속성 또는 메소드를 추가할 수는
있음
```
let primitiveNumber = 273;
Number.prototype.method = function() {
    return 'Primitive Method'
}
console.log(primitiveNumber.method());
```
- Number 객체
```
let numberFromConstructor = new Number(273);
```
### Number 객체가 가진 메소드
- toExponential() : 숫자를 지수 표시로 나타낸 문자열을 리턴
- toFixed() : 숫자를 고정소수점 표시로 나타낸 문자열을 리턴
- toPrecision() : 숫자를 길이에 따라 지수 표시 또는 고정소수점 표시로 나타낸 문자열을 리턴
생성자 함수에 속성과 메소드 추가
```
function Constructor() {}
Constructor.property = 273;
Constructor.method = function() {};
```
### Number 생성자 함수의 속성
- MAX_VALUE : 자바스크립트의 숫자가 나타낼 수 있는 최대 숫자
- MIN_VALUE : 자바스크립트의 숫자가 나타낼 수 있는 최소 숫자
- NaN : 자바스크립트의 숫자로 나타낼 수 없는 숫자
- POSITIVE_INFINITY : 양의 무한대 숫자
- NEGATIVE_INFINITY: 음의 무한대 숫자
자바스크립트가 너무 큰 수를 다룰 때는 부동소수점 형식으로 숫자를 다루기 때문에 작은 수는 무시한다.
### String 객체
- Number 객체
```
let stringFromConstructor = new String('안녕하세요');
```
### 메소드 활용
- indexOf() : 문자열 내부에 특정 문자열이 있는지 확인할 때 사용, 매개 변수로 받은 문자열이 포함된 부분의 위치를 리턴함, 매개 변수로 받은 문자열이 포함되어 있지 않으면 -1을 리턴
## [04월27일]
>객체, 속성, 메소드
동일한 변수에 값을 할당하면, 마지막에 할당한 값으로 덮여씌워 진다. 
이는 함수도 같다.
선언적 함수는 코드를 실행하기 전에 생성됨
- 익명 함수와 화살표 함수의 차이
거의 비슷한 기능을 수행하지만 this 키워드가 가지는 의미가
다르다. function () {} 식으로 선언 하는 익명함수 내부에서
this가 가지는 의미는 자바스크립트 최상위 객체 또는
외부에서 강제로 연결한 객체를 나타내고
화살표 함수 내부에서는 this는 자기 자신과 관련된 것만을
나타낸다.
- 객체 선언
```
let 객체 이름 = {
    키1: '값',
    키2: 값
}
```
- 객체의 속성에 접근
```
객체 이름[키1]
객체 이름.키2
```
식별자 생성 규칙에 어긋나는 문자를 키로 사용할 때는
반드시 대괄호를 사용해야 객체의 요소에 접근할 수 있다.
- 속성: 객체 내부에 있는 각각의 값
- 메소드: 객체의 속성 중 자료형이 함수인 속성
객체에 있는 속성을 메소드에서 사용할 때는 자신이 가지고 있는 속성임을 분명하게 표시하기 위해 this를 사용
- 예)
```
let object = {
    name: '바나나',
    price: 1200,
    print: fuction () {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`)
    }
};
```
- 생성자 함수: 객체를 만드는 함수
```
fuction Product(name, price) {
    this.name = name;
    this.price = price;
}
let product = new Product("바나나",);
```

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
## [04월06일]
> 
# for in 반복문
- 인덱스를 가져와서 반복
```jsx
    for(let index in array) {
    }
```
# for of 반복문
- 요소를 가져와서 반복
```jsx
    for(let element of array) {
    }
```
- 배열을 선언할 때는 배열의 이름을 잘 명시해야함
# 중첩 반복문
- 예)
```jsx
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
```jsx
    bar = [0];
    bar.push(1, 2, 3);
    console.log(bar)
    //실행 결과
    //[0, 1, 2, 3]
```
- pop은 배열의 마지막 주소에 있는 값을 제거해주는 함수
```jsx
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