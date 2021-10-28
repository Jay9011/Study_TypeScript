/**
 * 맵드 타입이란 기존에 정의되어 있는 타입을 새로운 타입으로 변환해주는 문법을 의미한다.
 * 마치 javascript 의 map() API 함수를 타입에 적용한 것과 같은 효과를 가진다.
 * 1. Mapped 타입의 기본 문법
 */

// 맵드 타입은 아래와 같이 사용할 수 있다.
//  { [ P in K ] : T }
//  { [ P in K ] ? : T }
//  { readonly [ P in K ] : T }
//  { readonly [ P in K ] ? : T }

type Heroes = 'Hulk' | 'Thor' | 'Capt';
// Mapped 타입을 만드는데, key는 Heroes에 정의된 리터럴 타입으로, 값은 number 타입으로 정의한다.
type HeroProfiles = { [K in Heroes]: number };
// HeroProfiles 에는 이 Mapped 선언이 끝난 후 다음과 같은 타입으로 만들어진다.
//  { Hulk: number } // 첫번째 순회
//  { Thor: number } // 두번째 순회
//  { Capt: number } // 세번째 순회
// 마치 map() API를 쓰는 것 처럼 Heroes에 쓰이는 모든 키에 대한 타입을 정의할 수 있다.
const heroInfo: HeroProfiles = {
    Hulk: 54,
    Thor: 1000,
    Capt: 33,
}

/**
 * 실전 예제 1
 * : 실제로 Mapped는 타입 선언을 편하고 간결하게 해줄 뿐 아니라,
 *   interface로 구현하게 되었을 때 그 효용성이 크게 느껴질 수 있다.
 * --------------------------------------------------------------
 * 1. Subset을 정의할 때 Generic T를 사용하고, 이를 Mapped 타입으로 선언.
 * 2. Subset에서 사용할 수 있는 프로퍼티 key는 T에 있는 keyof 이름으로 사용.
 * 3. ?: 해당 키는 선택적 프로퍼티로 있어도 되고 없어도 됨.
 * 4. 만들어진 프로퍼티의 값은 해당 T의 [프로퍼티명]에 해당하는 타입.
 */
type Subset<T> = {
    [K in keyof T]?: T[K];
}
interface _08_01_Person {
    age: number;
    name: string;
}
const _08_01_ageOnly: Subset<_08_01_Person> = { age: 23 };
const _08_01_nameOnly: Subset<_08_01_Person> = { name: '윤종섭' };
const _08_01_Ironman: Subset<_08_01_Person> = { name: 'Tony', age: 23 };
const _08_01_Empty: Subset<_08_01_Person> = {};

/**
 * 실전 예제 2
 * 같은 형태의 타입이 있을 때, 삽입과 수정의 과정에 있어 삽입에서는 모든 타입이 필수인 반면
 * 수정에서는 모든 타입이 선택적으로 들어올 수 있다. 이때, 두 타입을 따로 선언하기 보다 맵드를 활용하면 효율적으로 쓸 수 있게 된다.
 */
// 삽입용 프로필
//  interface UserProfile {
//      username: string;
//      email: string;
//      profilePhotoUrl: string;
//  }
// 수정용 프로필
//  interface UserProfileUpdate {
//      username?: string;
//      email?: string;
//      profilePhotoUrl?: string;
//  }
interface _08_01_UserProfile {
    username: string;
    mail: string;
    profilePhotoUrl: string;
}
// 본래 다음과 같이 타입의 통일성을 위해서 쓸 수 있을거다.
type _08_01_UserProfileUpdate = {
    username?: _08_01_UserProfile['username'];
    email?: _08_01_UserProfile['mail'];
    profilePhotoUrl?: _08_01_UserProfile['profilePhotoUrl'];
}
// 하지만 Mapped를 사용하면 아래처럼 사용할 수 있게 될 것이고,
//  type _08_01_UserProfileUpdate2 = {
//      [p in 'username' | 'email' | 'profilePhotoUrl']?: _08_01_UserProfile[p];
//  }
// keyof에 해당하는 P를 할당받아 해당 타입을 사용할 수 있다.
type _08_01_UserProfileUpdate3 = {
    [p in keyof _08_01_UserProfile]?: _08_01_UserProfile[p];
}