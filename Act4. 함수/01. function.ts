/**
 * 1. 함수의 리턴에 타입을 지정할 수 있다.
 * 2. 매개변수에 타입을 지정할 수 있다.
 * 3. typescript는 함수에 정의되어있는 모든 매개변수들을 불러와야 하는데, 이때 매개변수에 기본값을 정의해주거나 선택적 매개변수를 사용함으로써 매개변수를 정의할 수 있다.
 * 4. parameter의 타입 선언 뒤에 = 값을 사용하면 argument가 전달되지 않을 때 기본적으로 값을 지정할 수 있다.
 * 5. parameter 뒤체 ?를 사용함으로써 선택적 매개변수로 정의할 수 있다. 🌟이때, 선택적 매개변수의 뒤에 정의되는 모든 매개변수는 선택적 매개변수가 되어야 한다.
 *  (다시 말해, 필수 정의 parameter는 앞에, 선택적 parameter는 뒤에 정의해야 한다.)
 */
function sendGreeting(message: string = 'Hi!', userName?: string): void {
    console.log(`${userName} ${message}`);
}

sendGreeting();
sendGreeting('hello~');
sendGreeting('hello~', '종섭');