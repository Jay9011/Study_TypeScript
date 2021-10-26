/**
 * 클래스 속에서 정의된 함수는 클래스 속에서 정의된 변수에 this로 접근 가능하다.
 */
var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        /* 메소드's */
        this.printEmployeeDetail = function () {
            console.log(_this.fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this.jobTitle + "\uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + _this.hourlyRate * _this.workingHoursPerWeek + "\uB2EC\uB7EC \uC774\uB2E4.");
        };
    }
    return Employee;
}());
var employee1 = new Employee();
employee1.age = 25;
employee1.fullName = '윤종섭';
employee1.jobTitle = '프로그래머';
employee1.hourlyRate = 2000;
employee1.workingHoursPerWeek = 48;
employee1.printEmployeeDetail();
