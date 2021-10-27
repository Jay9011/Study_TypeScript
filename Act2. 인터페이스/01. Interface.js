function getStudentDetails(studentID) {
    return {
        studentID: 1,
        name: '윤종섭',
        age: 31,
        gender: '남',
        subject: '타입스크립트',
        courseCompleted: true,
        1: 'A' // 배열형 프로퍼티를 선언해서 해당 타입 형태의 프로퍼티를 그냥 받는 모습
    };
}
function setStudentDetails(student) {
}
setStudentDetails({
    studentID: 2,
    name: '홍길동',
    age: 25,
    gender: '남'
});
// 함수형 인터페이스를 선언해서 사용하는 모습
var _02_Add = function (x, y) {
    return x + y;
};
var _02_BMW = /** @class */ (function () {
    function _02_BMW(c) {
        this.color = 'black';
        this.wheels = 4;
        this.color = c;
    }
    _02_BMW.prototype.start = function () {
        console.log('go!');
    };
    return _02_BMW;
}());
// 도구로 사용되는 interface의 모든 필수 프로퍼티를 구현해야 한다.
var _02_commonToyCar = /** @class */ (function () {
    function _02_commonToyCar() {
        this.price = 500;
        this.color = 'red';
        this.wheels = 4;
        this.name = 'toycar';
    }
    return _02_commonToyCar;
}());
