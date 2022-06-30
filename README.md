

# 호텔 리뷰 분석을 통한 추천 서비스

- 리뷰 분석을 통해 지역 별 호텔의 특징을 분석하고 유저의 입력 값에 따라 최적의 호텔 추천 서비스


## 프로젝트 구성 안내


## 1. 프로젝트 소개

**엔드유저에게 보이는 웹서비스에 대한 소개**
  - AI : TF-IDF, Pororo, Doc2Vec, Konlpy (Python)
  - BE : Python, Flask, Flask-restx, Flask-SqlAlchemy, Swagger OAS, MariaDB, Docker, Gunicorn
  - FE : React, React-Router-Dom, React Scroll, Recoil, Tailwind-css, Axios, Intersection Observer, Swiper
  - 국내 주요 지역의 호텔 리뷰 분석을 통해 각 호텔 별 특징을 분석함
  - 유저의 입력값에 따라 유사도 점수 순으로 호텔를 필터링하여 적합한 호텔 추천

## 2. 프로젝트 기획 의도

  - 코로나로 인한 해외여행 제한이 국내여행 확대로 이어짐 
  - 국내 주요 도시의 호텔에 대한 이용 증가, 리뷰 증가
  - 호텔 예약 웹사이트의 여러가지 복잡한 필터들을 단순화 할 필요를 느꼈고, 사용자의 요구에 따라 적절한 호텔을 추천해주는 서비스의 필요성
  - 선호에 따라 비슷한 유형의 숙소를 손쉽게 비교할 수 있도록 서비스를 제공하면 효용이 높아질 것이라 예상함.

## 3. 서비스 주요 기능 설명

**웹서비스의 유용성, 편의성 및 시각화의 실용성에 대한 설명**
  - 주요 기능 (주된 활용성) 및 서브 기능 소개
   1) 필터링 기능 : 긍부정 리뷰 분리 / 호텔 별 리뷰 키워드 제공
   2) 검색 및 추천 기능 : 유저의 선호에 따라 원하는 테마를 입력하여 유사한 호텔 추천
   3) 로그인 기능 : 찜하기 등 고객 커스터마이징

  - 프로젝트만의 차별점, 기대 효과
   1) 기존의 웹 서비스와는 달리 사용자의 요구에 따른 입력값을 활용해 적합한 호텔을 추천해주는 상호작용 가능함.
   2) 단순히 지역, 가격이 아닌 유저가 원하는 테마를 기준으로 숙소를 비교, 분석 할 수 있음.
   3) 서비스를 사용하는 유저들의 더 효율적인 검색과 선택이 이루어질 수 있음.
   4) 데이터가 축적된다면 더욱 정확한 추천서비스를 제공할 것으로 기대됨.

## 4. 프로젝트 구성도
  - 와이어프레임 (https://whimsical.com/DNDUtyZzsKDmL3mWzEwgKT)

## 5. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
| 김태현 | 팀장/인공지능 개발 |
| 강현희 | 인공지능 개발 |
| 김현주 | 백엔드 개발 |
| 이수진 | 백엔드, 프론트엔드 개발 |
| 이호준 | 프론트엔드 개발 |

**멤버별 responsibility**

1. 김태현: 팀장/인공지능 담당

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성, 데이터 전처리 진행
- 개발 단계: 팀원간의 일정 등 조율 및 인공지능 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 강현희: 인공지능 담당

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 전처리 진행
- 개발 단계: 와이어프레임을 기반으로 인공지능 모델 구현, 모델 학습 진행
- 수정 단계: 피드백 반영해서 모델 정확도 향상 및 추가 기능 구현

3. 김현주: 백엔드 담당

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, DB 세팅 및 개발 환경 설정
- 개발 단계: 와이어프레임을 기반으로 추천 호텔 정보, 리뷰, 상세페이지 정보 반환 API 및 데이터베이스 완성
- 수정 단계: 최종 배포 진행 및 피드백 반영해서 백엔드 설계 수정

4. 이수진: 백엔드, 프론트엔드 담당

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, DB 세팅 및 개발 환경 설정
- 개발 단계: 와이어프레임을 기반으로 유저 로그인 기능 API, 찜 목록 반환 API 및 데이터베이스 완성
- 수정 단계: 최종 배포 진행 및 피드백 반영해서 백엔드 설계 수정

5. 이호준: 프론트엔드 담당

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 와이어프레임 작성
- 개발 단계: 디자인 및 레이아웃 등 프론트 개발 (웹 & 모바일)
- 수정 단계: 피드백 반영해서 프론트엔드 설계 수정
