/**
 * 클래스 속에서 정의된 함수는 클래스 속에서 정의된 변수에 this로 접근 가능하다.
 */
class Employee {
    /* 프로퍼티 */
    fullName: string;
    age: number;
    jobTitle: string;
    hourlyRate: number;
    workingHoursPerWeek: number;

    /* 메소드's */
    printEmployeeDetail = (): void => {
        console.log(`${this.fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은 ${this.hourlyRate * this.workingHoursPerWeek}달러 이다.`);
    }
}

let employee1 = new Employee();
employee1.age = 25;
employee1.fullName = '윤종섭';
employee1.jobTitle = '프로그래머';
employee1.hourlyRate = 2000;
employee1.workingHoursPerWeek = 48;
employee1.printEmployeeDetail();