/**
 * Exclude<T1, T2> 는 T1 타입에서 T2 타입을 제외해서 사용할 수 있다.
 * T2 타입을 제외하고 남은 T1 타입만 사용한다.
 */

type _07_07_T1 = string | number | boolean;
type _07_07_T2 = Exclude<_07_07_T1, number | boolean>;
// _07_07_T2 타입은 string이 된다.