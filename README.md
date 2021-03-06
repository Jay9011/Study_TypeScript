Javascript는 컴파일 후 러닝타임에서 에러를 확인할 수 있고, 의도치 않은 연산 결과를 가져올 수 있다.

하지만 타입스크립트는 코딩 과정에서 에러를 찾아낼 수 있으며, 의도된 대로 연산 결과를 가져올 수 있게끔 유도해준다.
- - -
# tsconfig.json
1. ```tsconfig.json```에 Compile 기본 옵션을 설정한다.
> ✅ `"compilerOptions"`
>
> - "target" ➙ 컴파일 할 대상 javascript 버전 `es3`부터 `es5`, `es6` 등 가장 최신 버전인 `esnext`까지 있다.
> - "module" ➙ 컴파일 할 import 문법
> - "strictNullChecks" ➙ null 체크를 사용한다.
> - "allowJs" ➙ 타입스크립트 컴파일을 할 때 자바스크립트 파일도 포함될 수 있는지를 설정해주는 속성. 이미 기존에 존재하는 자바스크립트 프로젝트에 타입스크립트를 점진적으로 적용할 때 사용하면 좋은 속성.
> - "lib" ➙ 타입스크립트를 자바스크립트로 컴파일 할 때 포함될 라이브러리의 목록. 디 속성을 활용하는 가장 대표적인 사례는 `async` 코드를 컴파일 할 때 `Promise` 객체가 필요하므로 아래와 같은 설정을 해줘야 한다.
>   ```json
>   // tsconfig.json
>   {
>     "lib": ["es2015", "dom", "dom.iterable"]
>   }
>   ```
> - "include" ➙ 변환할 폴더 지정 (`*`: 해당 디렉토리에서 모든 파일 검색, `?`: 해당 디렉토리 안에 파일 이름 중 한 글자라도 맞으면 해당, `**`: 하위 디렉토리를 재귀적으로 접근(하위 디렉토리의 하위 디렉토리가 존재하는 경우 반복해서 접근))
>   ```json
>   {
>       "include": ["src/**/*"]
>   }
>   ```
> - "exclude" ➙ 변환하지 않을 폴더 경로 지정
>   ```json
>   {
>       "exclude": ["node_modules"]
>   }
>   ```
> - "typeRoots" ➙ 써드파티 라이브러리의 타입을 정의해놓은 `@type` 폴더의 위치를 변경할 수 있다.
> - "extends" ➙ 특정 타입스크립트 설정 파일에서 다른 타입스크립트 설정의 내용을 가져와 추가할 수 있는 속성.
# Type
1. Type Inference (타입 추론)
    > *typeScript*에서는 타입을 지정하지 않을 시 선언과 동시에 삽입된 타입으로 지정된다.
    > - 가장 적절한 타입(Best Common Type) : 타입은 보통 표현식(코드)를 바탕으로 추론하게 되는데, 그 표현식을 이용해서 가장 근접한 타입을 Best Common Type 이라고 한다.
    >   ```typescript
    >     let arr = [0, 1, null];
    >   ```
    >   위 변수에서 `arr`의 타입은 크게 `number`와 `null`로 구분된다. 이때 Best Common Type 알고리즘으로 다른 타입들과 가장 잘 호환되는 타입을 선정한다.
1. Type Annotation (타입 표기)
    > - *typeScript*는 데이터 타입을 명시해서 컴파일 단계에서 오류를 방지할 수 있음.
    > - 코드를 읽기 쉬워 협업을 하거나 유지보수에 있어 유리할 수 있음.
    > - `:` 를 이용하여 javascript 코드에 타입을 정의하는 방식을 타입 표기(Type Annotaion)이라고 함.
    >   - Boolean, Number, String, Array, Typle, Object, Enum, Void, Undefined, Null, Never, Any 타입이 있음.
    >   - Array의 경우 `: number[]` 형태로 타입을 정의하거나 `: Array<number>` 형태로 타입을 정의할 수 있음.
1. Type Compatibility (타입 호환)
    >   타입 호환이란 타입스크립트 코드에서 특정 타입이 다른 타입의 구조와 맞다면 에러로 표기하지 않고 인정해주는 것을 말한다.
    >   ```typescript
    >   interface Ironman {
    >       name: string;
    >   }
    >   class Avengers {
    >       name: string;
    >   }
    >   
    >   let i: Ironman;
    >   i = new Avengers(); // OK, because of structural typing
    >   ```
    >   위와 같은 구조에서 Ironman과 Avengers는 명시된 타입명이  다르지만 구조적인 관점에서는 같은 타입을 갖는 타입이기 때문에 서로 인정해준다는 것이다.
    >   ```typescript
    >    let hero: Avengers;
    >    let capt = { name: "Captain", location: "Pangyo" };
    >    hero = capt;
    >   ```
    >   위의 코드에서 `capt`가 `hero` 타입에 호환될 수 있는 이유는 `capt`의 속성중에 `name`이 있기 때문이다.
    >   `Avengers` 인터페이스에서 `name` 속성을 갖고 있기 때문에 `capt`는 `Avengers` 타입에 호환될 수 있다.
    >   ```typescript
    >   function assemble(a: Avengers) {
    >       console.log("어벤져스 모여라", a.name);
    >    }
    >    // 위에서 정의한 capt 변수. 타입은 { name: string; location: string;}
    >    assemble(capt);
    >   ```
    >   함수 호출에서도 `capt` 변수에 이미 `name` 속성이 있기 때문에 `assemble` 함수의 호출 인자로 넘길 수 있다.
1. `Union Type` : 여러개의 타입을 쓸 수 있게 정의하는 방법. `|` 로 타입을 연결한다.
1. `Intersection Type` : 여러 타입을 모두 만족시키는 하나의 타입을 만든다. `&` 로 타입을 연결한다.
# 타입 별칭 (Type Aliases)
> 타입 별칭은 복잡한 타입의 정의를 단순하게 만들어 줄 수 있다.
```typescript
type MyName = string;
const name: MyName = 'capt';
```
```typescript
type Developer = {
  name: string;
  skill: string;
}
```
```typescript
type User<T> = {
  name: T
}
```
# 함수
1. 타입지정 : 함수의 리턴타입, 파라미터에 타입을 정의할 수 있다.
    ```typescript
        function sum(a: number, b: number): number {
            return a + b;
        }
    ```
1. `?` : 파라미터를 선택적으로 받을 때 사용
1. 파라미터 초기화 : ES6 문법과 동일하게 사용
1. REST 문법 사용 : ES6에서 쓰듯이 `...파라미터: 타입[]` 형태로 사용
1. `this` : 타입스크립트에서 자바스크립트의 `this`가 잘 못 사용되었을 때 감지할 수 있다.
    ```typescript
        function 함수명(this: 타입) {
            // ...
        }
    ```
    ```typescript
        interface Vue {
            el: string;
            count: number;
            init(this: Vue): () => {};
        }

        let vm: Vue = {
            el: '#app',
            count: 10,
            init: function(this: Vue) {
                return () => {
                return this.count;
                }
            }
        }
    ```
# 인터페이스
> 인터페이스는 상호 간에 정의한 약속 혹은 규칙을 의미한다. 타입스크립트에서 인터페이스는 보통 다음과 같은 범주에 대해 규칙을 정의할 수 있다.
- 객체의 스팩 (속성과 속성의 타입)
- 함수의 파라미터
- 함수의 스팩 (파타미터, 반환 타입 등)
- 배열과 객체를 접근하는 방식
- 클래스
1. `?` : 프로퍼티를 선택적으로 사용할 때 사용.
1. `readonly` : 읽기 전용 프로퍼티 사용.
1. `ReadonlyArray<T>` : 읽기 전용 배열
1. `[propName: string]: any` : 인터페이스에 정의하지 않은 프로퍼티들을 추가로 사용하고 싶을 때 인터페이스에 다음과 같이 선언하면 모든 프로퍼티들을 추가로 받을 수 있다.
1. 함수 타입 : 함수의 인자의 타입과 반환 값의 타입을 정의할 수 있다.
    ```typescript
    interface login {
       (username: string, password: string): boolean;
    }
    ```
1. `implements` : 인터페이스의 형태를 규칙을 정의하는 도구로 사용할 수 있다.
    ```typescript
    interface CraftBeer {
        beerName: string;
        nameBeer(beer: string): void;
    }

    class myBeer implements CraftBeer {
        beerName: string = 'Baby Guinness';
        nameBeer(b: string) {
            this.beerName = b;
        }
        constructor() {}
    }
    ```
1. `extends` : 기존에 정의되어 있는 인터페이스를 확장시킬 수 있다.
    ```typescript
    interface Person {
        name: string;
    }
    interface Developer extends Person {
        skill: string;
    }
    let fe = {} as Developer;
    fe.name = 'josh';
    fe.skill = 'TypeScript';
    ```
# 클래스
1. `readonly` : 읽기 전용
1. Accessor : 접근과 할당에 대한 제어를 선언할 수 있다
    1. `public`
    1. `private` or `#`
    1. `protected`
1. getter & setter : 접근 제어자를 할당한 경우 getter와 setter 함수를 만들어서 접근성을 제어할 수 있다.
1. `abstract` : 추상 클래스는 특정 클래스의 상속 대상이 되는 클래스이며 좀 더 체계화 된 클래스 규칙을 정의할 수 있다.
    ```typescript
    abstract class Developer {
        abstract coding(): void; // 'abstract'가 붙으면 상속 받은 클래스에서 무조건 구현해야 함
        drink(): void {
            console.log('drink sth');
        }
    }

    class FrontEndDeveloper extends Developer {
        coding(): void {
            // Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
            console.log('develop web');
        }
        design(): void {
            console.log('design web');
        }
    }
    ```
# 제네릭
> 제네릭은 C#, Java 등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징이다.
> 특히, 한가지 타입보다 여러가지 타입에서 동작하는 컴포넌트를 생성하는데 사용된다.
```typescript
function getText<T>(text: T): T {
    return text;
}
```
1. 제네릭으로 특정 타입의 _prototype_ 함수를 사용하기 위해서는 제네릭에 타입을 특정지어줄 필요가 있다. 예를들어 `.length`를 사용하기 위해서는 제네릭을 string 타입으로 특정지어 줘야 한다.
1. 제네릭 클래스 : 제네릭 인터페이스와 같이 정의할 수 있다.
    ```typescript
    class GenericMath<T> {
        pi: T;
        sum: (x: T, y: T) => T;
    }
    let math = new GenericMath<number>();
    ```
1. 제네릭 제약조건 : 제네릭 타입을 선언 할 때 특정 타입을 정의해줄 수 있다. 이때, `{length: number}` 와 같이 부분 타입 정의를 해줄수도 있다.
    ```typescript
    interface LengthWise {
        length: number;
    }

    function logText<T extends LengthWise>(text: T): T {
        console.log(text.length);
        return text;
    }
    ```