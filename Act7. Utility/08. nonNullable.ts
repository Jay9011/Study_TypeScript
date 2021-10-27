/**
 * NonNullable<T> 는 T1 타입에서 Null, undefined 같은 타입을 제외한
 * 나머지 타입을 사용한다.
 */

type _07_08_T1 = string | null | undefined | void;
type _07_08_T2 = NonNullable<_07_08_T1>;
// _07_08_T2는 string과 void 를 Union으로 가진 타입이다.