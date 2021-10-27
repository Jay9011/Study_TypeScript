/**
 * Union Type으로 파라미터를 가질 때, 둘 중 하나의 타입으로 특정지어 줘야
 * 해당 타입에만 존재하는 프로퍼티를 사용할 수 있다.
 */
function _03_getGift(gift) {
    console.log(gift.color);
    if (gift.name === 'car') {
        gift.start();
    }
    else {
        gift.call();
    }
}
var _03_toyCar = {
    name: '타요',
    start: function () { },
    color: 'blue',
    price: 1000
};
