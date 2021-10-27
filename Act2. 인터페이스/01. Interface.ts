/**
 *  Typescript에서 interface는 보다 명확하고 견고한 코딩을 할 수 있게
 * Typescript만의 구조로, 실제 컴파일 될 때는 javascript에 컴파일 되지 않는다.
 * 1. 🌟 interface 선언 방법
 * 2. 프로퍼티 선언 방법
 * 3. 🌟 선택적 프로퍼티 선언 방법 ?
 * 4. 🌟 배열형 프로퍼티 선언 방법 [index: type]: type
 * 5. 🌟 읽기 전용 프로퍼티 선언 방법 (readonly)
 * 6. 함수형 interface 선언 방법
 * 7. 🌟 도구형 interface 선언 방법 (implements)
 * 8. 🌟 interface 상속과 확장 (extends)
 */
type Score = 'A' | 'B' | 'C' | 'D' | 'F';
interface Student {
    studentID: number;
    name: string;
    age: number;
    /* readonly 키워드를 붙이면 읽기 전용 프로퍼티를 만들 수 있다. */
    readonly gender: string;
    /* 프로퍼티 뒤에 '?'를 붙이면 선택적 프로퍼티가 되어 없어도 되는 프로퍼티가 된다. */
    subject?: string;
    courseCompleted?: boolean;
    /** 프로퍼티명을 배열처럼 선언해서 해당 형태의 프로퍼티를 마음껏 받을 수 있다. */
    [grade: number]: Score;
    /** 메소드 또한 인터페이스 내에 정의할 수 있다. */
    addComment?: (comment: string) => string;
}
function getStudentDetails(studentID: number): Student {
    return {
        studentID: 1,
        name: '윤종섭',
        age: 31,
        gender: '남',
        subject: '타입스크립트',
        courseCompleted: true,
        1: 'A'  // 배열형 프로퍼티를 선언해서 해당 타입 형태의 프로퍼티를 그냥 받는 모습
    };
}
function setStudentDetails(student: Student): void {
}
setStudentDetails(
    {
        studentID: 2,
        name: '홍길동',
        age: 25,
        gender: '남'
    }
);
/**
 * 6. 함수형 interface 선언
 */
interface Add {
    (num1: number, num2: number): number;
}
// 함수형 인터페이스를 선언해서 사용하는 모습
const _02_Add: Add = function (x, y) {
    return x + y;
}
/**
 * 7. 도구형 interface (implements)
 */
interface _02_Car {
    color: string;
    wheels: number;
    start?: () => void;
}
class _02_BMW implements _02_Car {
    color = 'black';
    wheels = 4;
    constructor(c: string) {
        this.color = c;
    }
    start() {
        console.log('go!');
    }
}
/**
 * 8. interface 상속과 확장 (extends)
 */
interface _02_Toy {
    name: string;
}
// extends 를 사용해서 상속, 확장한다.
interface _02_toyCar extends _02_Car, _02_Toy {
    price: number;
}
// 도구로 사용되는 interface의 모든 필수 프로퍼티를 구현해야 한다.
class _02_commonToyCar implements _02_toyCar {
    price = 500;
    color = 'red';
    wheels = 4;
    name = 'toycar';
}