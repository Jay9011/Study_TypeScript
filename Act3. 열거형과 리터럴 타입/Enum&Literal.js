/**
 *  열거형의 경우 인터페이스와는 달리
 * 컴파일 될 때 javascript에 함수의 형태로 정의되어 인코딩된다.
 */
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
})(GenderType || (GenderType = {}));
function getPersonDetail(name) {
    return {
        name: '홍길동',
        age: 25,
        gender: GenderType.Male,
        job: '회사원'
    };
}
