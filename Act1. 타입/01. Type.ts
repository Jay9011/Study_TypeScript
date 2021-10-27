/**
 * 1. 타입스크립트의 기본 타입은 다음과 같다.
 * ■ Boolean
 * ■ Number
 * ■ String
 * ■ Array
 * ■ Object
 * ■ Tuple
 * ■ Enum
 * ■ Void
 * ■ Undefined
 * ■ Null
 * ■ Never
 * ■ Any
 */
/**
 * Boolean : true와 false로 이루어진 타입
 */
let _01_isTrue: boolean = true;
/**
 * Number : 숫자형 타입
 */
let _01_one: number = 1;
/**
 * String : 문자형 타입
 */
let _01_name: string = 'Text'
/**
 * Array : 배열
 */
let _01_numberArray: number[] = [1, 2, 3];
let _01_array: Array<number> = [1, 2, 3];
let _01_stringArray: string[] = ['one', 'two', 'three'];
let _01_UnionArray: (string | number)[] = [1, 'one', 2, 3, 'three'];
let _01_UnionArray2: Array<string | number> = [1, 'one', 2, 3, 'three'];
/**
 * Tuple : 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식의 타입
 */
let _01_Tuple: [string, number] = ['Text', 1];
// 데이터를 개별 변수로 지정하지 않고, 단일 튜플 타입으로 지정해 사용할 수 있다.
let _01_user: [string, number] = ['윤종섭', 25];
// 때로는 값으로 타입을 대신할 수 있으며, 이때 미리 지정해준 값이 아닌 다른 값은 에러를 출력한다.
let _01_user2: ['윤종섭', number];
_01_user2 = ['윤종섭', 20];
_01_user2 = ['윤종섭', 25];
// _01_user2 = ['윤씨', 30]; // error
/**
 * Void : 변수에는 undefined와 null만 할당하고, 함수에는 반환 값을 설정할 수 없는 타입.
 */
function fnVoid(): void {

}
/**
 * Never : 절대 발생할 수 없는 타입을 나타낸다. 보통 에러를 반환하거나 절대 반환 할 수 없는 형태의 함수에서 쓰인다.
 */
function fnError(): never {
    throw new Error();
}
function fnWhile(): never {
    while (true) {

    }
}
/**
 * Object : typeof 연산자가 object로 반환하는 모든 타입.
 * 여러 타입의 상위 타입이기 때문에 개별적으로는 쓰이지 않고, 주로 interface를 사용하게 된다.
 */
let _01_object: object = {};
let _01_arrayObject: object = [];
let _01_funcObject: object = function (): void { };
let _01_dateObject: object = new Date();
// 보다 정확하게 타입 지정을 하기 위해 아래와 같이 객체 속성들에 대한 타입을 개별적으로 지정할 수 있다.
let user: { name: string, age: number } =
{
    name: '윤종섭',
    age: 25
};
/**
 * Enum : 특정 값(상수)들의 집합. 비슷한 자료끼리 묶어 구분 값을 사람이 알아보기 쉽게 만들어주는 타입
 */
enum _01_Enum {
    Window,
    IOS,
    Android
}
let _01_EnumType: _01_Enum;
_01_EnumType = _01_Enum.Window;

/**
 * Any : 기존 javascript에서 사용하던 방식의 타입으로 그 어떤 타입이든 사용할 수 있다.
 * 다만, 사용은 지양한다.
 */