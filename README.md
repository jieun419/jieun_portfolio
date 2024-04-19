![Desktop - 7](https://github.com/jieun419/jieun_portfolio/assets/109754988/0d619991-4690-4994-9c8e-95c120205720)

- **`Project` :** 최지은 포트폴리오
- **`Project duration` :** 2023.08.31 - 2023.09.31
- **`Link` :** [배포 사이트](https://jieun-portfolio.vercel.app/)
- **`피그마 구상도`:** [피그마 임시 구상도](https://www.figma.com/proto/yYqRCEUVsz7MqOj5LmHEkH/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?type=design&node-id=137-1569&t=wrYIENswdY00Shik-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=126%3A386&show-proto-sidebar=1&mode=design)
- **`Stack` :** Vite, React, TypeScript, Redux Toolkit, Tailwind CSS, Styled Components

## 설명
노션, 템플릿 소스 등을 이용할 수 있었지만 `저만의 포트폴리오` 사이트를 가지고 싶어 제작했습니다.<br>
주요 색상인 `black & white`로 심플하고 차분한 느낌을 줬고,<br>
간단한 자기 소개와 프로젝트, 이력 등 중요도 순으로 배치해 내용을 구성했습니다.<br>
이를 통해 포트폴리오를 보는 사람들에게 원하는 정보를 쉽게 전달할 수 있도록 했습니다.<br><br>
**지금에서 마무리하지 않고 개선할 점을 찾으며 업데이트하고 있습니다.**

## 작업사항
- ~~`Redux Toolkit`을 활용해 조건에 따라 모달창 내용 다르게 표시~~
  - react-router-dom 도입으로 인해 `Redux Toolkit` 활용가치 떨어짐 (라이트 모드, 다크 모드 도입해 보기)
- `framer-motion` 라이브러리를 활용해 초기 화면에 시선 집중하도록 작업
- 사용자 경험을 개선하기 위해 tooltip 추가
- `Tailwind CSS`를 활용해 일관된 스타일의 반응형 작업
- 데이터를 객체 형식의 데이터로 분리해 진행
- `useRef`등을 활용해 스크롤 시 특정 컨포넌트 애니메이셔 효과 작업, 다른 컴포넌트에서도 사용할 수 있도록 Custom Hook으로 만들어 재사용

## 개선 및 추가사항
- [x] 프로젝트 디테일 영역 문제해결 섹션 추가하기
- [x] 프로젝트 영역 탭 메뉴 추가하기
- [ ] 시작 화면 애니메이션 스킵 기능 고려해 보기
- [ ] 이력서 바로가기 버튼 추가 고려해 보기 (개인 정보 이슈로 고민)
- [ ] mdx파일 도입해 보기 (프로젝트 디테일 내용이 많아짐에 따라 고려 중)
  - [x] react-markdown 도입으로 가독성 높이기 (임시)
  
## 관련 링크
[회고][[나의 포트폴리오 만들기]](https://velog.io/@crg1050/나의-포트폴리오-만들기)<br>
[회고][[포트폴리오 개선하기]](https://velog.io/@crg1050/포트폴리오-개선하기)<br>
[개선][[Tooltip 추가하기]](https://velog.io/@crg1050/포트폴리오-Tooltip-추가하기)<br>

## 작업 화면 (현재 사이트와 스타일이 다소 다를 수 있습니다.)
|Main|
|------|
|![스크린샷 2024-02-03 오전 3 36 35](https://github.com/jieun419/jieun_portfolio/assets/109754988/82ccfef0-67dd-4fac-96e8-82bccd772f37)|
|- 소셜 링크(GitHub, Velog)<br>- 업데이트 날짜<br>- 간략한 소개 표시|

|About me|
|------|
|![스크린샷 2024-02-03 오전 3 37 09](https://github.com/jieun419/jieun_portfolio/assets/109754988/af20b63e-2984-49a9-ab1c-ddd41d619428)![스크린샷 2024-02-03 오전 3 36 58](https://github.com/jieun419/jieun_portfolio/assets/109754988/9027ea56-8c26-47fa-ac17-97edd3831c45)|
|- 인터뷰 형식의 간략한 소개<br>- 간략한 사용 툴 및 스택<br>- 팀원 리뷰 바로보기|

|Career|
|------|
|![스크린샷 2024-02-03 오전 3 40 28](https://github.com/jieun419/jieun_portfolio/assets/109754988/55c8f402-ed34-451e-af89-42b996a56b2e)|
|- 기간, 기관명<br>- 활동 내역<br> - 사용했던 스택|

|Project|
|------|
|![스크린샷 2024-02-03 오전 3 41 00](https://github.com/jieun419/jieun_portfolio/assets/109754988/79d15ca3-e536-4d9f-a0ba-4a317118728c)|
|- 탭 메뉴로 카테고리별 확인 가능<br>- 프로젝트 명<br>- 간략한 소개<br>- 관련 태그|

|Education|
|------|
|![스크린샷 2024-02-03 오전 3 41 20](https://github.com/jieun419/jieun_portfolio/assets/109754988/af2e2920-7b42-4596-8781-7b747dc80c62)|
|- 기간, 기관명<br>- 활동 내역<br> - 사용했던 스택|

|Project Detail|
|------|
|![스크린샷 2024-02-03 오전 4 07 50](https://github.com/jieun419/jieun_portfolio/assets/109754988/c30f948f-0529-4c46-b35e-b22bdaf9717c)|
|- 프로젝트 상세 정보(기간, 인원 등)<br>- 프로젝트 상세 내용(프로젝트 설명, 사용한 기술, 작업 기여도, 문제 해결)<br>- 바로가기 링크(GitHub, 배포 링크, 관련 블로그 링크)|


|Review Detail|
|------|
|![스크린샷 2024-02-03 오전 4 08 12](https://github.com/jieun419/jieun_portfolio/assets/109754988/2a955cbb-fe59-44b0-8cb4-90db908ec414)|
|- 팀원 및 멘토 리뷰 최신순으로 확인 (이름, 프로젝트 명 표시)|

|Mop|
|------|
|![스크린샷 2024-02-03 오전 3 47 56](https://github.com/jieun419/jieun_portfolio/assets/109754988/13704555-310d-4809-95dc-53fea18056d3)|
|- 끝 맺음 표시<br>- 소셜 링크 제공|


