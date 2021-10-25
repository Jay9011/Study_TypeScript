/**
 * 1. any 타입은 어떤 타입이든지 넣을 수 있는 타입이다.
 */
var anyType = '홍길동';
/**
 * 2. Union Type은 파이프라인(|)으로 나열해서 넣을 수 있는 모든 타입을 나열할 수 있다.
 */
var unionType = '문자열 가능';
unionType = 25; // number도 가능
var typeAliases;
function fnTypeAliases(param) {
    return '문자열 가능';
}
/**
 * 4. 🌟 한 쪽은 타입이 고정되어 있고 한 쪽은 Union Type을 사용하는 경우 Typeof Operator를 사용해서 타입을 명확히 해줘야 한다.
 *  이와 같은 사용법 중에 Html Element를 확인하고 NullCheck 하는 방법이 많이 쓰인다.
 */
var unionAge;
var unionString;
function fnTypeofOperator(param) {
    if (typeof param === 'string') {
        unionString = param;
    }
    else {
        unionAge = param;
    }
    // unionAge = param;
}
fnTypeofOperator('한 쪽은 타입이 고정되어 있고 한 쪽은 타입이 복합적인 경우');
