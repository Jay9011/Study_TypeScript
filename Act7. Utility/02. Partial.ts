/**
 * Partial 는 해당 Object의 프로퍼티를 모두 선택적 프로퍼티로 사용 가능하게 한다.
 * 타입 선언시 사용하며 프로퍼티의 일부만 사용해도 된다.
 */
interface _07_02_User {
    id: number;
    name: string;
    age: number;
    gender: 'M' | 'F'
};

let _07_02_admin: Partial<_07_02_User> = {
    id: 1,
    name: 'BOB'
}