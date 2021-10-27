/**
 * 1. Generic은 특정 타입을 미리 정의하지 않고,
 * 사용할 때 타입을 지정해서 사용할 수 있게 한다.
 * 2. interface의 프로퍼티도 Generic으로 정의할 수 있다.
 * 3. parameter 타입을 제네릭으로 받을 때, 특정 파라미터의 타입을 정의해서 사용할 수 있다.
 */
/**
 * 함수명 뒤에 <T>를 추가해서 제네릭 타입을 사용할 수 있다.
 */
function _06_getSize(arr) {
    return arr.length;
}
var _06_arr1 = [1, 2, 3];
_06_getSize(_06_arr1);
var _06_arr2 = ['one', 'two', 'three'];
_06_getSize(_06_arr2);
var _06_m1 = {
    name: 's21',
    price: 1000,
    option: {
        color: 'black',
        coupon: true,
    }
};
var _06_m2 = {
    name: 's20',
    price: 800,
    option: 'good'
};
var _06_user = { name: '윤종섭', age: 10 };
var _06_car = { name: '윤종섭', color: 'red' };
var _06_book = { price: 1000 };
function showName(data) {
    return data.name;
}
showName(_06_user);
showName(_06_car);
// showName(_06_book); // _06_book에는 name이 없기 때문에 에러가 발생한다.
