/**
 * 1. 특정 값(상수)들의 집합. 비슷한 자료끼리 묶어 구분 값을 사람이 알아보기 쉽게 만들어주는 타입
 * 열거형의 경우 인터페이스와는 달리 컴파일 될 때 javascript에 함수의 형태로 정의되어 인코딩된다.
 */
type _03_Job = 'police' | 'developer' | 'teacher';
enum _03_GenderType {
    Male,
    Female
}

/**
 * 2. 리터럴 타입은 정해진 값을 가진 타입이다. (문자열로 지정된 타입을 문자열 리터럴 타입이라고 한다.)
 * 원하는 고정값을 파이프라인(|)으로 나열해서 사용할 수 있다.
 * 리터럴 타입은 interface와 같이 타입 힌트만을 제공하고 규칙을 적용할 뿐 컴파일 될 때 javascript에 인코딩 되지 않는다.
 */
interface _03_Person {
    name: string,
    age: number,
    readonly gender: _03_GenderType,
    readonly job: '회사원' | '사무직' | '기술직',
}

function _03_getPersonDetail(name: string): _03_Person {
    return {
        name: '홍길동',
        age: 25,
        gender: _03_GenderType.Male,
        job: '회사원'
    }
}