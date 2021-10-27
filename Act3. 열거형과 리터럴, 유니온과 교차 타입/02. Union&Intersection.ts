/**
 * Union Type
 * 1. Union Type의 경우 두개의 타입 둘 다 가질 수 있는 타입니다.
 * 2. Union Type을 사용하는 파라미터에서 둘 중 하나의 interface만이 가지고 있는 프로퍼티의 사용법으로
 * 해당 프로퍼티를 사용하기 전 파라미터의 타입을 특정시켜줘야 한다.
 */
interface _03_Car {
    name: 'car';
    color: string;
    start(): void;
}

interface _03_Mobile {
    name: 'mobile';
    color: string;
    call(): void;
}
/**
 * Union Type으로 파라미터를 가질 때, 둘 중 하나의 타입으로 특정지어 줘야
 * 해당 타입에만 존재하는 프로퍼티를 사용할 수 있다.
 */
function _03_getGift(gift: _03_Car | _03_Mobile) {
    console.log(gift.color);
    if (gift.name === 'car') {
        gift.start();
    } else {
        gift.call();
    }
}
/**
 * Intersection Type
 * 1. 교차타입은 And를 의미한다.
 * 인터페이스의 상속과 비슷한 기능을 가진다.
 */
interface _03_Car2 {
    name: string;
    start(): void;
}

interface _03_Toy {
    name: string;
    color: string;
    price: number;
}
const _03_toyCar: _03_Toy & _03_Car2 = {
    name: '타요',
    start() { },
    color: 'blue',
    price: 1000
}