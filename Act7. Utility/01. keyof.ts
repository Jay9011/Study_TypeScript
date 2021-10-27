/**
 * keyof 는 해당 Object에서 사용한 타입을 Union 형태로 가져올 수 있다.
 */
interface _07_01_User {
    id: number;
    name: string;
    age: number;
    gender: 'M' | 'F';
}
type _07_01_UserKey = keyof _07_01_User; // 'id' | 'name' | 'age' | 'gender'

const _07_01_uk: _07_01_UserKey = "name";