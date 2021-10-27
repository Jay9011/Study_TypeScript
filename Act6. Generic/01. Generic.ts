/**
 * 1. Generic은 특정 타입을 미리 정의하지 않고,
 * 사용할 때 타입을 지정해서 사용할 수 있게 한다.
 * 2. interface의 프로퍼티도 Generic으로 정의할 수 있다.
 * 3. parameter 타입을 제네릭으로 받을 때, 특정 파라미터의 타입을 정의해서 사용할 수 있다.
 */
/**
 * 함수명 뒤에 <T>를 추가해서 제네릭 타입을 사용할 수 있다.
 */
function _06_getSize<T>(arr: T[]): number {
    return arr.length;
}
const _06_arr1 = [1, 2, 3];
_06_getSize<number>(_06_arr1);
const _06_arr2 = ['one', 'two', 'three'];
_06_getSize<string>(_06_arr2);
/**
 * interface 뒤에 <T>를 추가해서 프로퍼티에 제네릭 타입을 사용할 수 있다.
 */
interface _06_Mobile<T> {
    name: string;
    price: number;
    option: T;
}
const _06_m1: _06_Mobile<{ color: string; coupon: boolean; }> = {
    name: 's21',
    price: 1000,
    option: {
        color: 'black',
        coupon: true,
    }
}
const _06_m2: _06_Mobile<string> = {
    name: 's20',
    price: 800,
    option: 'good'
}
/**
 * 여러개의 interface를 제네릭타입으로 사용할 때,
 * 함수 내에서 특정 프로퍼티를 사용하려면 해당 프로퍼티의 정의를 extends 를 사용해서 정의해줘야 한다.
 */
interface _06_User {
    name: string;
    age: number;
}
interface _06_Car {
    name: string;
    color: string;
}
interface _06_Book {
    price: number;
}
const _06_user: _06_User = { name: '윤종섭', age: 10 };
const _06_car: _06_Car = { name: '윤종섭', color: 'red' };
const _06_book: _06_Book = { price: 1000 };

function showName<T extends { name: string }>(data: T): string {
    return data.name;
}

showName(_06_user);
showName(_06_car);
// showName(_06_book); // _06_book에는 name이 없기 때문에 에러가 발생한다.