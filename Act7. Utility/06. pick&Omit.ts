/**
 * 1. Pick 을 사용하면 어떤 타입에서 원하는 프로퍼티만 사용할 수 있다.
 * 2. Omit 을 사용하면 어떤 타입에서 해당 프로퍼티를 제외한 나머지 프로퍼티만 사용하게 할 수 있다.
 */
interface _07_06_User {
    id: number;
    name: string;
    age: number;
    gender?: 'M' | 'F'
};

let _07_06_admin: Pick<_07_06_User, 'id' | 'name'> = {
    id: 1,
    name: 'BOB'
}

let _07_06_omitAdmin: Omit<_07_06_User, 'age' | 'gender'> = {
    id: 1,
    name: 'BOB'
}