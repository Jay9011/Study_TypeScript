/**
 * Readonly는 모든 프로퍼티를 읽기 전용으로 사용한다.
 */
interface _07_04_User {
    id: number;
    name: string;
    age: number;
    gender?: 'M' | 'F'
};

let _07_04_admin: Readonly<_07_04_User> = {
    id: 1,
    name: 'BOB',
    age: 10,
    gender: "M"
}

// _07_04_admin.id = 4; // Readonly로 사용했기 때문에 에러가 발생한다.