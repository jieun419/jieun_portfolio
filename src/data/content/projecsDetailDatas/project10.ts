export const project10 = {
  name: 'deskMood',
  pointcolor: 'before:bg-[#EC4D2B]',
  title: 'DeskMood - 데스크무드',
  subtext:
    '직장인, 학생, 전문직종 등 다양한 분야의 사람들이 데스크 테리어를 공유하고, 본인만의 무드를 찾을 수 있는 어플리케이션으로 글쓰기, 투표하기, 나만의 무드 찾기 등을 제공하고 있습니다.\n\n 현재 프로젝트 진행 중이며, 기획 단계부터 참여하여 와이어프레임, API 설계에 주도적으로 기여하고 있습니다. 25년도 안에 출시가 목표이고, 1차 MVP 완료를 목표로 하고 있습니다.',
  data: '2024.07 - 진행중',
  team: '5인 (프론트엔드 2명, 백엔드 1명, 기획자 1명, 디자이너 1명)',
  tag: ['팀', '반응형', '사이드'],
  featinfo: [
    '네이버, 구글 로그인',
    '나만의 무드 찾기, 무드 보드 만들기',
    '무드 즐겨찾기',
    '게시글 작성, 수정, 삭제, 투표하기',
    '주제가 맞는 사람들과 게시판 공유',
  ],
  tools: [
    {
      title: 'Next.js',
      detail:
        'React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.',
    },
    {
      title: 'TypeScript',
      detail:
        'TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.',
    },
    {
      title: 'Recoil',
      detail:
        'Recoil은 상태 관리 라이브러리입니다. 이전 Redux와 달리 Atomic 방식으로 상태 관리의 복잡도를 줄이고 코드의 간결성을 높이는데 기여합니다.',
    },
    {
      title: 'Tanstack Query',
      detail:
        'Tanstack Query는 React 애플리케이션에서 데이터 가져오기, 관리 및 캐싱을 단순하게 만들어주는 JavaScript 라이브러리입니다. 서버로부터 데이터를 비동기적으로 가져오고 관리하기 위한 다양한 도구와 패턴을 제공하며, API 요청을 처리하고 캐싱하여 성능을 최적화할 수 있습니다.',
    },
    {
      title: 'CSS Module',
      detail:
        'CSS Module은 Next.js에서 사용되는 CSS 관리 방식으로 컴포넌트별로 고유한 클래스 네임을 자동 생성하여 스타일 충돌을 방지합니다.',
    },
  ],
  parts: [
    {
      title: 'Notion, Discord, GitHub 를 통해 팀원간의 커뮤니케이션 진행',
      detailList: [
        '회의 내용, svg 파일, 환경 변수 설정 등을 Notion에 문서화 하여 팀원들과 공유',
        '실시간 이슈 처리가 필요한 경우 DIscord를 활용해 신속히 해결',
        '백엔드 팀과 특정 이슈나 개선 사항이 발생하면 GitHub Issuse 페이지를 통해 협업 및 피드백 진행',
      ],
    },
    {
      title: '기획 단계 부터 참여하여 프로젝트 설계에 기여 ',
      detailList: [`프로젝트 초기 단계에서 와이어프레임 설계와 API 설계를 주도적으로 수행하며 개발 방향성을 확립`],
    },
    {
      title: 'JWT 토큰을 활용한 인증 구현',
      detailList: [
        `\`Axios Interceptor\`를 활용하여 반복되는 요청을 일관되게 관리하며 코드의 재사용성을 향상`,
        `기존 Access Token과 Refresh Token을 동시에 발급 받던 방식을 백엔드 팀과 협업하여 Access Token만 발급 받고, Refresh Token은 Cookie에 자동 저장 되도록 수정해 보안 강화`,
      ],
    },
    {
      title: 'Tanstack Query의 캐싱, 값 업데이트, 에러 핸들링 기능을 활용하여 효율적인 비동기 처리 구현',
    },
    {
      title: 'React Hook Form을 사용하여 폼의 상태 관리 코드를 단순화하고 일관성 확보',
    },
  ],
};
