/**
 * Record<K, T>
 * 레코드는 key: type 형태를 지정해서 정의할 수 있다.
 */

type _07_05_Grade = 1 | 2 | 3;
type _07_05_Score = 'A' | 'B' | 'C' | 'D' | 'F';

const _07_05_score: Record<_07_05_Grade, _07_05_Score> = {
    1: 'A',
    2: 'C',
    3: 'B'
};
/**
 * keyof 유틸리티를 사용해서 좀 더 유용한 결과를 만들어낼 수 있다.
 */
interface _07_05_User {
    id: number;
    name: string;
    age: number;
};
// User 객체를 받아와서 유효성체크를 하고 boolean 결과를 리턴하는 함수.
function isValid(user: _07_05_User): Record<any, boolean> {
    const result: Record<keyof _07_05_User, boolean> = {
        id: user.id > 0,
        name: user.name !== '',
        age: user.age > 0
    };

    return result;
};