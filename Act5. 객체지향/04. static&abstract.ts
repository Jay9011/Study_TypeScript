/**
 * 1. static은 Class명으로 접근할 수 있고, Class명으로 접근해야 한다.
 * (this나 변수명을 사용하게 되면 에러가 발생한다.)
 * 2. 추상 Class는 abstract를 사용해서 정의할 수 있고, extends로 상속받은 클래스에서
 * abstract로 정의된 프로퍼티를 재정의 해줘야 한다.
 */
class _05_Car {
    name: string = 'car';
    color: string;
    static wheels = 4;

    start() {
        console.log(_05_Car.wheels);
    }
}
console.log(_05_Car.wheels);
/**
 * 2. 추상 Class는 abstract를 사용해서 정의할 수 있고, extends로 상속받은 클래스에서
 * abstract로 정의된 프로퍼티를 재정의 해줘야 한다.
 */
abstract class _05_NewCar {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    // 추상 클래스에서는 함수명만 정의하고 구체적인 동작은 이후에 정의한다.
    abstract doSomethis(): void;
}
class _05_BMW extends _05_NewCar {
    constructor(color: string) {
        // super를 사용해서 부모 클래스의 프로퍼티에 접근할 수 있다.
        super(color);
    }
    doSomethis() {
        console.log(`abstract는 상속받는 Class에서 구체적인 동작을 정의해줘야 한다.`);
    }
}