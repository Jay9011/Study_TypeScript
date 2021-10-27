var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 1. static은 Class명으로 접근할 수 있고, Class명으로 접근해야 한다.
 * (this나 변수명을 사용하게 되면 에러가 발생한다.)
 * 2. 추상 Class는 abstract를 사용해서 정의할 수 있고, extends로 상속받은 클래스에서
 * abstract로 정의된 프로퍼티를 재정의 해줘야 한다.
 */
var _05_Car = /** @class */ (function () {
    function _05_Car() {
        this.name = 'car';
    }
    _05_Car.prototype.start = function () {
        console.log(_05_Car.wheels);
    };
    _05_Car.wheels = 4;
    return _05_Car;
}());
console.log(_05_Car.wheels);
/**
 * 2. 추상 Class는 abstract를 사용해서 정의할 수 있고, extends로 상속받은 클래스에서
 * abstract로 정의된 프로퍼티를 재정의 해줘야 한다.
 */
var _05_NewCar = /** @class */ (function () {
    function _05_NewCar(color) {
        this.color = color;
    }
    return _05_NewCar;
}());
var _05_BMW = /** @class */ (function (_super) {
    __extends(_05_BMW, _super);
    function _05_BMW(color) {
        // super를 사용해서 부모 클래스의 프로퍼티에 접근할 수 있다.
        return _super.call(this, color) || this;
    }
    _05_BMW.prototype.doSomethis = function () {
        console.log("abstract\uB294 \uC0C1\uC18D\uBC1B\uB294 Class\uC5D0\uC11C \uAD6C\uCCB4\uC801\uC778 \uB3D9\uC791\uC744 \uC815\uC758\uD574\uC918\uC57C \uD55C\uB2E4.");
    };
    return _05_BMW;
}(_05_NewCar));
