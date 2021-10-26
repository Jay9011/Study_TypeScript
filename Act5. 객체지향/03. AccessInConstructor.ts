class Employee3 {
    /**
     * constructor에서 접근자를 직접 지정해주는 경우,
     * 해당 프로퍼티를 자동으로 생성해준다.
     * (javascript에서는 this. 으로 접근할 때, 해당 객체가 없다면 객체를 생성하기 때문)
     */
    constructor(
        private _fullName: string,
        private _age: number,
        private _jobTitle: string,
        public hourlyRate?: number,
        public workingHoursPerWeek?: number) {

    }

    get fullName() {
        return this._fullName
    }
    set fullName(value: string) {
        this._fullName = value;
    }
    public printEmployeeDetail = (): void => {
        console.log(`${this._fullName}의 직업은 ${this._jobTitle}입니다.`);
    }
}

let employee4 = new Employee3('윤종섭', 25, '프로그래머', 200, 48);
// private에는 외부에서 접근할 수 없다.
// employee3.fullName;
