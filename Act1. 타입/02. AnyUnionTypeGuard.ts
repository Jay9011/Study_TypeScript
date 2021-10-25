/**
 * 1. any 타입은 어떤 타입이든지 넣을 수 있는 타입이다.
 */
let anyType: any = '홍길동';

/**
 * 2. Union Type은 파이프라인(|)으로 나열해서 넣을 수 있는 모든 타입을 나열할 수 있다.
 */
let unionType: string | number = '문자열 가능';
unionType = 25; // number도 가능

/**
 * 3. Type Aliases는 Union Type을 좀더 깔끔하고 편리하게 하나의 타입으로 정의해서 사용할 수 있는 기능이다.
 */
type StrOrNum = string | number;
let typeAliases: StrOrNum;
function fnTypeAliases(param: StrOrNum): StrOrNum {
    return '문자열 가능';
}

/**
 * 4. 🌟 한 쪽은 타입이 고정되어 있고 한 쪽은 Union Type을 사용하는 경우 Typeof Operator를 사용해서 타입을 명확히 해줘야 한다.
 *  이와 같은 사용법 중에 Html Element를 확인하고 NullCheck 하는 방법이 많이 쓰인다.
 */
let unionAge: number;
let unionString: string;
function fnTypeofOperator(param: StrOrNum): void {
    if (typeof param === 'string') {
        unionString = param;
    } else {
        unionAge = param;
    }
    // unionAge = param;
}
fnTypeofOperator('한 쪽은 타입이 고정되어 있고 한 쪽은 타입이 복합적인 경우');