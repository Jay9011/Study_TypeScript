var _03_GenderType;
(function (_03_GenderType) {
    _03_GenderType[_03_GenderType["Male"] = 0] = "Male";
    _03_GenderType[_03_GenderType["Female"] = 1] = "Female";
})(_03_GenderType || (_03_GenderType = {}));
function _03_getPersonDetail(name) {
    return {
        name: '홍길동',
        age: 25,
        gender: _03_GenderType.Male,
        job: '회사원'
    };
}
