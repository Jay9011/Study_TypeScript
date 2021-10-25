/**
 *  Typescript에서 interface는 보다 명확하고 견고한 코딩을 할 수 있게
 * Typescript만의 구조로, 실제 컴파일 될 때는 javascript에 컴파일 되지 않는다.
 */
interface Student {
    studentID: number;
    name: string;
    age: number;
    /* readonly 키워드를 붙이면 읽기 전용 프로퍼티를 만들 수 있다. */
    readonly gender: string;
    /* 프로퍼티 뒤에 '?'를 붙이면 선택적 프로퍼티가 되어 없어도 되는 프로퍼티가 된다. */
    subject?: string;
    courseCompleted?: boolean;
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
        courseCompleted: true
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