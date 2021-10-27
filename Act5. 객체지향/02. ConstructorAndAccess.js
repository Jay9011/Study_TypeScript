/**
 * 모든 Class는 Constructor를 가진다.
 * 1. Class의 접근 제한자는 public, private, protected가 있다.
 * 2. 확장(extends)을 사용하는 경우 super 로 부모 프로퍼티에 접근 가능하다.
 * 3. private 대신 #을 사용해서 접근 제한자를 단축할 수 있다.
 * 4. protected는 동일 클래스, 상속 클래스 에서 접근 가능하지만 외부에서 접근 불가능하다.
 */
var Employee2 = /** @class */ (function () {
    /**
     * 생성자는 매개변수를 가질 수 있으며, Type을 가질 수 있다.
     */
    function Employee2(fullName, age, jobTitle, hourlyRate, workingHoursPerWeek) {
        var _this = this;
        // public은 외부에서 접근 가능
        this.printEmployeeDetail = function () {
            console.log(_this._fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this.jobTitle + "\uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + _this.hourlyRate * _this.workingHoursPerWeek + "\uB2EC\uB7EC \uC774\uB2E4.");
        };
        // 생성자 안에서 this. 로 접근하는 객체는 Class의 프로퍼티이고 = 뒤에 있는 값은 매개변수를 나타낸다.
        this._fullName = fullName;
        this.age = age;
        this.jobTitle = jobTitle;
        // 선택적 매개변수를 사용하기 위해서는 값이 전달되지 않는 경우에 대한 처리를 해줘야 한다.
        if (hourlyRate) {
            this.hourlyRate = hourlyRate;
        }
        if (workingHoursPerWeek) {
            this.workingHoursPerWeek = workingHoursPerWeek;
        }
    }
    Object.defineProperty(Employee2.prototype, "fullName", {
        /**
         * getter / setter
         * gettter와 setter는 기본적으로 함수의 형태로 만들어지며 접근시 함수명으로 접근된다.
         * 따라서 this.으로 접근하는 프로퍼티명과 함수명을 달리해야 무한루프에 빠지지 않는다.
         */
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee2;
}());
var employee3 = new Employee2('윤종섭', 25, '프로그래머', 200, 48);
// private에는 외부에서 접근할 수 없기 때문에 getter를 생성해줘야 한다.
employee3.fullName;
