/**
 * Record<K, T>
 * 레코드는 key: type 형태를 지정해서 정의할 수 있다.
 */
var _07_05_score = {
    1: 'A',
    2: 'C',
    3: 'B'
};
;
// User 객체를 받아와서 유효성체크를 하고 boolean 결과를 리턴하는 함수.
function isValid(user) {
    var result = {
        id: user.id > 0,
        name: user.name !== '',
        age: user.age > 0
    };
    return result;
}
;
