/**
 * Required 는 모든 프로퍼티를 필수 프로퍼티로 만들어준다.
 * 이때, 원래 Object 내 선택적 프로퍼티 또한 필수 프로퍼티로 사용한다.
 */
interface _07_03_User {
    id: number;
    name: string;
    age: number;
    gender?: 'M' | 'F'
};

let _07_03_admin: Required<_07_03_User> = {
    id: 1,
    name: 'BOB',
    age: 10,
    gender: "M"
}