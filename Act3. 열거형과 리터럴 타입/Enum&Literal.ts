/**
 *  열거형의 경우 인터페이스와는 달리 
 * 컴파일 될 때 javascript에 함수의 형태로 정의되어 인코딩된다.
 */
enum GenderType {
    Male,
    Female
}

/**
 *  리터럴 타입의 경우 원하는 고정값을 파이프라인(|)으로 나열해서 사용할 수 있다.
 * 리터럴 타입은 interface와 같이 타입 힌트만을 제공하고 규칙을 적용할 뿐 컴파일 될 때 javascript에 인코딩 되지 않는다.
 */
interface Person {
    name: string,
    age: number,
    readonly gender: GenderType,
    readonly job: '회사원' | '사무직' | '기술직',
}

function getPersonDetail(name: string): Person {
    return {
        name: '홍길동',
        age: 25,
        gender: GenderType.Male,
        job: '회사원'
    }
}