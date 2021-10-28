/**
 * 맵드 타입이란 기존에 정의되어 있는 타입을 새로운 타입으로 변환해주는 문법을 의미한다.
 * 마치 javascript 의 map() API 함수를 타입에 적용한 것과 같은 효과를 가진다.
 * 1. Mapped 타입의 기본 문법
 */
// HeroProfiles 에는 이 Mapped 선언이 끝난 후 다음과 같은 타입으로 만들어진다.
//  { Hulk: number } // 첫번째 순회
//  { Thor: number } // 두번째 순회
//  { Capt: number } // 세번째 순회
// 마치 map() API를 쓰는 것 처럼 Heroes에 쓰이는 모든 키에 대한 타입을 정의할 수 있다.
var heroInfo = {
    Hulk: 54,
    Thor: 1000,
    Capt: 33,
};
var _08_01_ageOnly = { age: 23 };
var _08_01_nameOnly = { name: '윤종섭' };
var _08_01_Ironman = { name: 'Tony', age: 23 };
var _08_01_Empty = {};
