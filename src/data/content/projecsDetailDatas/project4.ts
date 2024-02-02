export const project4 = {
  name: 'stack',
  pointcolor: 'before:bg-[#FA9B59]',
  title: '스택오버플로우',
  subtext:
    '랜덤의 팀원들과 정해진 주제인 스택오버플로우 사이트를 클론 코딩 하며 프로젝트 경험을 쌓았습니다.\n짧은 기간이였지만 기존 사이트의 UI/UX 측면도 고려하고, 기간 내에 구현 할 수 있는지와 없는지 확인하며 진행했습니다.\n\n* 현재 배포 사이트 확인은 가능하나 서버는 닫혀있는 상태입니다.',
  data: '2023.06 - 2023.07',
  team: '6인 (프론트엔드 3명, 백엔드 3명)',
  tag: ['팀', '반응형', '클론코딩', '사이드'],
  imgurl: 'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/thumbnail_stack.webp',
  detailimginfo: [
    {
      imgurl: 'https://user-images.githubusercontent.com/109754988/249023604-d8d39315-78f2-4069-99a2-0f7f7ab444e4.png',
      subject: '메인 페이지',
    },
    {
      imgurl: 'https://user-images.githubusercontent.com/109754988/249023704-d9b53a20-6fa7-4ae4-a8b3-9d7275ba4690.png',
      subject: '로그인 페이지',
    },
    {
      imgurl: 'https://user-images.githubusercontent.com/109754988/249023765-882f2706-ff02-466f-87cc-895a8aca66d6.png',
      subject: '검색 페이지',
    },
    {
      imgurl: 'https://user-images.githubusercontent.com/109754988/249023788-40a8e6e6-9373-40c0-bdd8-c227689a04c1.png',
      subject: '질문 작성/수정 페이지',
    },
    {
      imgurl: 'https://user-images.githubusercontent.com/109754988/249023810-1df4778b-6748-4f30-a005-39039e189d3b.png',
      subject: '질문 뷰 페이지',
    },
    {
      imgurl: 'https://user-images.githubusercontent.com/109754988/249023826-e00977d9-57f2-4ad9-b4f0-27927946373c.png',
      subject: '마이 페이지',
    },
  ],
  giturl: 'https://github.com/codestates-seb/seb44_pre_015',
  depoloyurl: 'https://mz-developer-15.netlify.app/',
  blogurl: [
    {
      title: '질문 작성페이지 태그 선택 영역',
      url: 'https://velog.io/@crg1050/코드스테이츠-FE-44기pre-project-9일차',
    },
    {
      title: '프로젝트 회고',
      url: 'https://velog.io/@crg1050/코드스테이츠-FE-44기pre-project-13일차회고',
    },
  ],
  tools: [
    {
      title: 'Vite',
      detail:
        'Vite는 최신 브라우저의 기본 ES 모듈 기능을 사용하여 더 빠른 개발 서버 시작 및 주문형 컴파일을 가능하게 합니다. 이로 인해 CRA의 Webpack 기반 서버에 비해 응답성이 뛰어난 개발 경험을 얻을 수 있었습니다.',
    },
    {
      title: 'React',
      detail:
        'React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.',
    },
    {
      title: 'Redux Toolkit',
      detail:
        'Redux Toolkit은 Redux 상태 관리 라이브러리를 사용하기 위한 보조 도구입니다. Redux보다 코드를 간결하게 작성할 수 있게 도와주며, 전역으로 상태를 관리할 수 있습니다.',
    },
    {
      title: 'Tailwind CSS',
      detail:
        'Tailwind는 CSS 프레임워크로, 클래스 기반 스타일링을 합니다. 일관된 디자인을 단시간에 쉽게 구현할 수 있습니다.',
    },
    {
      title: 'Styled Components',
      detail:
        'Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다. 또한 tailwind 사용시 클래스가 길어져 코드가 지저분해 지는 단점을 보완해 줍니다.',
    },
  ],
  featinfo: [
    'API를 활용한 질문 리스트 확인 및 검색',
    '질문 등록 및 수정',
    '질문 상세내용 확인 및 답변/댓글 달기',
    '질문/답변에 대한 하트 추가',
    '마이페이지에서 본인 활동 확인',
  ],
  parts: [
    {
      title: '기획 및 UI / UX 디자인',
      detail: '팀원들과 함께 오버플로우 홈페이지의 UX를 분석하고 짧은 작업 기간을 고려해 기술들을 레벨로 나눴습니다.',
    },
    {
      title: '공통 컴포넌트 작업',
    },
    {
      title: '웹 표준 / 접근성 고려',
    },
    {
      title: '질문 작성 / 수정하기 페이지 작업',
      detail:
        '질문 작성 / 수정하기 페이지 작업을 2인 1조로 작업 구역을 나눠 기능 구현을 진행했으며, 도움이 필요한 경우 같이 상의하며 진행했습니다.\n\n질문 작성란의 경우 react-quill 라이브러리를 활용하여 구현했습니다.',
    },
    {
      title: '질문 작성 / 수정하기 태그 추가, 수정 구현',
      detail:
        '질문 작성 / 수정하기 페이지에서 태그 영역을 맡았습니다.\n\n태그는 최대 3개 까지만 추가 가능하며, 3개 초과 시 다른 태그를 선택할 수 없도록 select box의 disabled 속성과 some 메서드 활용하여 구현했습니다.',
    },
  ],
  trouble: [
    {
      title: '배포시 HTTP로 인한 배포 이슈',
      detail:
        '비용 문제로 HTTP로 서버와 통신하고 있었습니다.\nGithub, Vercel로 배포 시도하던 중 HTTPS로 배포해야 한다는 이슈로 배포를 할 수 없던 상황이였습니다.\n\nNetlify로 배포시 proxy를 활용해 문제를 해결할 수 있었습니다.\n최상단 경로에 netlify.toml를 생성해 경로를 설정한 후, vite.config에 서버 경로에 대한 작성을 통해 문제를 성공적으로 해결할 수 있었습니다.',
    },
  ],
};
