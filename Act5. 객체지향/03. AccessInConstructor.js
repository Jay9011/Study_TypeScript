var Employee3 = /** @class */ (function () {
    /**
     * constructor에서 접근자를 직접 지정해주는 경우,
     * 해당 프로퍼티를 자동으로 생성해준다.
     * (javascript에서는 this. 으로 접근할 때, 해당 객체가 없다면 객체를 생성하기 때문)
     */
    function Employee3(_fullName, _age, _jobTitle, hourlyRate, workingHoursPerWeek) {
        var _this = this;
        this._fullName = _fullName;
        this._age = _age;
        this._jobTitle = _jobTitle;
        this.hourlyRate = hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
        this.printEmployeeDetail = function () {
            console.log(_this._fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this._jobTitle + "\uC785\uB2C8\uB2E4.");
        };
    }
    Object.defineProperty(Employee3.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee3;
}());
var employee4 = new Employee3('윤종섭', 25, '프로그래머', 200, 48);
// private에는 외부에서 접근할 수 없다.
// employee3.fullName;
