/**
 * 1. 함수의 리턴에 타입을 지정할 수 있다.
 * 2. 매개변수에 타입을 지정할 수 있다.
 * 3. typescript는 함수에 정의되어있는 모든 매개변수들을 불러와야 하는데, 이때 매개변수에 기본값을 정의해주거나 선택적 매개변수를 사용함으로써 매개변수를 정의할 수 있다.
 * 4. 🌟 parameter의 타입 선언 뒤에 = 값을 사용하면 argument가 전달되지 않을 때 기본적으로 값을 지정할 수 있다.
 * 5. 🌟 parameter 뒤체 ?를 사용함으로써 선택적 매개변수로 정의할 수 있다. 🌟이때, 선택적 매개변수의 뒤에 정의되는 모든 매개변수는 선택적 매개변수가 되어야 한다.
 *  (다시 말해, 필수 정의 parameter는 앞에, 선택적 parameter는 뒤에 정의해야 한다.)
 * 6. 🌟 나머지 매개변수
 * 7. 함수 Overload
 */
function sendGreeting(message: string = 'Hi!', userName?: string): void {
    console.log(`${userName} ${message}`);
}

sendGreeting();
sendGreeting('hello~');
sendGreeting('hello~', '종섭');

/**
 * 6. 🌟 나머지 매개변수
 */
function _04_Add(...nums: number[]) {
    return nums.reduce((result, num) => result + num, 0);
}
_04_Add(1, 2, 3);
_04_Add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/**
 * 7. 함수 Overload
 */
interface _04_User {
    name: string;
    age: number;
}
function join(name: string, age: number): _04_User;
function join(name: string, age: string): string;
function join(name: string, age: number | string): _04_User | string {
    if (typeof age === "number") {
        return {
            name, age
        };
    } else {
        return `나이는 숫자로 입력해주세요.`;
    }
}
// 일반적으로 두 개의 반환 형식을 갖는 함수를 콜 할때, 리턴 형식이 불분명한 경우 에러가 뜰 수 있다.
// 그 때는 같은 함수명, 다른 파라미터 형태를 주고 리턴 값을 단일로 가져가면서 파라미터 형태에 따라 리턴 값을 각각 지정해줄 수 있다.
const _04_sam: _04_User = join('sam', 30);