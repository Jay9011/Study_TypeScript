 `1.` tsconfig.json
===================================================
1. ```tsconfig.json```에 Compile 기본 옵션을 설정한다.
> ✅ `"compilerOptions"`
> ```
> "target" ➙ 컴파일 할 대상 javascript 버전
> "module" ➙ 컴파일 할 import 문법
> "strictNullChecks" ➙ null 체크를 사용한다.
> ```
 `2.` Type
===================================================
1. Type Inference (타입 유추)
    > *typeScript*에서는 타입을 지정하지 않을 시 선언과 동시에 삽입된 타입으로 지정된다.
1. Type Annotation (타입 명시)
    > - *typeScript*는 데이터 타입을 명시해서 컴파일 단계에서 오류를 방지할 수 있음.
    > - 코드를 읽기 쉬워 협업을 하거나 유지보수에 있어 유리할 수 있음.