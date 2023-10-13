export const projectDetailData = [
  {
    name: 'ssthing',
    pointcolor: 'before:bg-[#373737]',
    title: 'SSTHING',
    subtext:
      '우주가 컨셉인 회사 소개 홈페이지입니다. 디자인 시안을 figma로 확인하며\n최대한 클라이언트가 요구한 디자인과 기능을 비슷하게 작업하려고 노력했습니다.',
    data: '2023.10 - 약 3일',
    team: '2인 (프론트엔드 2명)',
    tag: ['팀', '반응형', '퍼블리싱'],
    depoloyurl: 'https://ssting.io/',
    tools: [
      {
        title: 'React',
        detail:
          'React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.',
      },
      {
        title: 'TypeScript',
        detail:
          'TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.',
      },
      {
        title: 'Styled Components',
        detail:
          'Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다. 또한 tailwind 사용시 클래스가 길어져 코드가 지저분해 지는 단점을 보완해 줍니다.',
      },
    ],
    parts: [
      {
        title: '헤더 작업',
        detail:
          '각 메뉴 클릭 시 해당 섹션으로 이동 되도록했습니다. 또한 서브페이지에서도 해당 메뉴 클릭 시 메인에서 해당 영역으로 이동 되도록 localStorage를 활용해 작업했습니다.',
      },
      {
        title: '퍼블리싱',
        detail:
          '디자인된 웹 페이지를 마크업하여 웹 표준을 준수하고 웹 접근성을 고려하며 진행했습니다.\n각 섹션을 팀원과 나눠 PC 부터 Mobile 환경까지 반응형 작업을 했습니다.\n또한 디자이너가 요구한 시안을 확인하며 배경 위치를 조절했습니다.',
      },
    ],
  },
  {
    name: 'portfolio',
    pointcolor: 'before:bg-[#373737]',
    title: '지은 포트폴리오',
    subtext:
      '노션, 템플릿 소스 등을 이용할 수 있었지만 저만의 포트폴리오 사이트를 가지고 싶어 제작했습니다.  주요 색상인 black & white로 전체적으로 심플함을 줬습니다.',
    data: '2023.08 - 2023.09',
    team: '1인 (솔로)',
    tag: ['솔로', '반응형', '포트폴리오'],
    imgurl:
      'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/thumbnail_protfolio.webp',
    giturl: 'https://github.com/jieun419/jieun_portfolio',
    depoloyurl: 'https://jieun-portfolio.vercel.app/',
    blogurl: [
      {
        title: '모바일 환경에서 100vh 이슈',
        url: 'https://velog.io/@crg1050/포트폴리오-모바일-환경에서-100vh-이슈',
      },
      {
        title: '나의 포트폴리오 만들기 회고',
        url: 'https://velog.io/@crg1050/나의-포트폴리오-만들기',
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
        title: 'TypeScript',
        detail:
          'TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.',
      },
      {
        title: 'Redux Toolkit',
        detail:
          'Redux Toolkit은 Redux 상태 관리 라이브러리를 사용하기 위한 보조 도구입니다. Redux보다 코드를 간결하게 작성할 수 있게 도와주며, 전역으로 상태를 관리할 수 있습니다.',
      },
      {
        title: 'Tailwind',
        detail:
          'Tailwind는 CSS 프레임워크로, 클래스 기반 스타일링을 합니다. 일관된 디자인을 단시간에 쉽게 구현할 수 있습니다.',
      },
      {
        title: 'Styled Components',
        detail:
          'Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다. 또한 tailwind 사용시 클래스가 길어져 코드가 지저분해 지는 단점을 보완해 줍니다.',
      },
    ],
    parts: [
      {
        title: '기획 및 내용 구체화',
        detail:
          '포트폴리오를 만들려는 의도를 파악하고 순서를 배치 했습니다. 간단한 자기 소개화 프로젝트, 이력 등 중요도 순으로 배치해 내용을 구성했습니다. 이를 통해 포트폴리오를 보는 사람들에게 원하는 정보를 쉽게 전달할 수 있도록 했습니다.',
      },
      {
        title: 'UI/UX 디자인',
        detail:
          '무채색인 black & white로 심플하고 차분한 느낌을 줬습니다. 또한 UX 측면을 고려하며 디자인하려고 노력했습니다.',
      },
      {
        title: '퍼블리싱',
        detail:
          '직접 디자인한 웹 페이지를 마크업하여 웹 표준을 준수하고 웹 접근성을 고려하며 진행했습니다.',
      },
    ],
  },
  {
    name: 'haru',
    pointcolor: 'before:bg-[#77D1FD]',
    title: '하루메이트',
    subtext:
      '당일 일정에서 하루,친구의 mate를 합쳐서 서비스명을 “하루메이트”로 짓게 되었습니다.  하루메이트는 당일 일정을 만들고 친구에게 손쉽게 공유 할 수 있는 서비스입니다. 친구와 놀러가기 위해서 계획을 짤 때 일정을 편리하게 공유하면 좋겠다는 생각으로 부터 시작되었습니다.   일정 생성 과정이 지나치게 복잡한 서비스들이 대부분입니다. 저희의 목표는 사용자들이 더욱 쉽고 간편하게 일정을 만들고 공유 할 수 있는 서비스를 제공하는 것입니다.',
    data: '2023.07 - 2023.08',
    team: '6인 (프론트엔드 3명, 백엔드 3명)',
    tag: ['팀', '반응형'],
    imgurl:
      'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/thumbnail_haru.webp',
    giturl: 'https://github.com/codestates-seb/seb44_main_006',
    depoloyurl: 'https://harumate.netlify.app/',
    blogurl: [
      {
        title: '프로젝트 회고',
        url: 'https://velog.io/@crg1050/코드스테이츠-FE-44기main-project-회고',
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
        title: 'TypeScript',
        detail:
          'TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.',
      },
      {
        title: 'Redux Toolkit',
        detail:
          'Redux Toolkit은 Redux 상태 관리 라이브러리를 사용하기 위한 보조 도구입니다. Redux보다 코드를 간결하게 작성할 수 있게 도와주며, 전역으로 상태를 관리할 수 있습니다.',
      },
      {
        title: 'React Query',
        detail:
          'React Query는 React 애플리케이션에서 데이터 가져오기, 관리 및 캐싱을 단순하게 만들어주는 JavaScript 라이브러리입니다. 서버로부터 데이터를 비동기적으로 가져오고 관리하기 위한 다양한 도구와 패턴을 제공하며, API 요청을 처리하고 캐싱하여 성능을 최적화할 수 있습니다.',
      },
      {
        title: 'Styled Components',
        detail:
          'Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다.',
      },
    ],
    parts: [
      {
        title: '기획 구성',
        detail:
          '쉽고 간단하게 일정을 만들고 공유할 수 있는 서비스를 제작하고자 했습니다. Figma에서 제공하는 Figjam을 활용해 팀원들과 flow chart를 만들고 벤치마킹을 통해 아이디어를 구체화 했습니다.',
      },
      {
        title: '헤더 푸터 작업',
        detail:
          '헤더 스크롤 유무에 따라 스타일을 다르게 주었습니다. 로그인 후 유저 프로필 사진 클릭 시 메뉴가 나오도록 작업했습니다. 푸터의 팀원 이름 마우스 호버 시 역할이 보여지는 재미요소를 넣었고, 클릭 시 팀원 github로 이동 됩니다.',
      },
      {
        title: '메인 페이지 작업 및 커서 커스터마이징 구현',
        detail:
          '메인 페이지는 다른 프로젝트와 다르게 조금 독특했던 점은 커서 커스터마이징였습니다. 이미지를 이용해 쉽게 마무리할 수 있었지만 마우스 이벤트할 경우 사용자 경험에 좋지 않다 생각했습니다. window position 및 여러 코드를 참고하여 구현하게 되었습니다.',
      },
      {
        title: '마이 페이지 작업 및 유저 닉네임 RU',
        detail:
          '마이 페이지 반응형을 적용하고 유저 닉네임 수정할 수 있도록 작업했습니다.',
      },
      {
        title: '설정 페이지 작업',
        detail:
          '설정 페이지 반응형을 적용하고 및 로그인, 로그아웃 기능을 추가해 사용자 경험을 개선했습니다.',
      },
      {
        title: '전반적인 디자인 총괄 및 로고 디자인',
        detail:
          '전반적인 UI 디자인을 맡았습니다. UX는 팀원들과 함께 상의하여 수정했습니다. 로고 디자인도 직업 진행해 프로젝트의 브랜딩을 제공했습니다.',
      },
    ],
  },
  {
    name: 'stack',
    pointcolor: 'before:bg-[#FA9B59]',
    title: '스택오버플로우',
    subtext:
      '랜덤의 팀원들과 정해진 주제인 스택오버플로우 사이트를 클론 코딩 하며 프로젝트 경험을 쌓았습니다. 짧은 기간이였지만 기존 사이트의 UI/UX 측면도 고려하고, 기간 내에 구현 할 수 있는지와 없는지 확인하며 진행했습니다.',
    data: '2023.06 - 2023.07',
    team: '6인 (프론트엔드 3명, 백엔드 3명)',
    tag: ['팀', '반응형', '클론코딩'],
    imgurl:
      'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/thumbnail_stack.webp',
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
        title: 'Tailwind',
        detail:
          'Tailwind는 CSS 프레임워크로, 클래스 기반 스타일링을 합니다. 일관된 디자인을 단시간에 쉽게 구현할 수 있습니다.',
      },
      {
        title: 'Styled Components',
        detail:
          'Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다. 또한 tailwind 사용시 클래스가 길어져 코드가 지저분해 지는 단점을 보완해 줍니다.',
      },
    ],
    parts: [
      {
        title: '기획 및 UI/UX 디자인',
        detail:
          '팀원들과 함께 오버플로우 홈페이지의 UX를 분석하고 짧은 작업 기간을 고려해 기술들을 레벨로 나눴습니다.',
      },
      {
        title: '질문 작성 / 수정하기 페이지 작업',
        detail:
          '질문 작성 / 수정하기 페이지 작업을 2인 1조로 협력하며 진행했습니다.',
      },
      {
        title: '질문 작성 / 수정하기 태그 CU',
        detail:
          '질문 작성 / 수정하기 페이지에서 태그 영역을 맡았습니다. 태그는 최대 3개 까지만 추가할 수 있고, 3개 초과 시 다른 태그 선택이 안 되도록 작업했습니다.',
      },
    ],
  },
  {
    name: 'coz',
    pointcolor: 'before:bg-[#6a57e0]',
    title: 'Coz Shopping',
    subtext:
      '코드스테이츠 과제로 주어진 요구 명세서를 확인 하고 해당 내용을 토대로 진행했습니다. 짧은 기간에 요구한 기능을 구현하는게 목적이며, 프로젝트를 진행하며 필수인 git, github를 학습 하는데 많은 도움이 되었습니다.',
    data: '2023.07 - 2023.08',
    team: '1인 (솔로)',
    tag: ['팀', '반응형', '클론코딩'],
    imgurl:
      'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/thumbnail_cozshopping.webp',
    giturl: 'https://github.com/jieun419/fe-sprint-coz-shopping',
    depoloyurl: '',
    blogurl: [
      {
        title: '프로젝트 요구 분석 및 플래닝',
        url: 'https://velog.io/@crg1050/코드스테이츠-FE-44기-솔로-프로젝트-1-프로젝트-요구-분석-및-플래닝',
      },
      {
        title: '헤더, 푸터, 4개의 컴포넌트 작업..ing',
        url: 'https://velog.io/@crg1050/코드스테이츠-FE-44기-솔로-프로젝트-2-헤더-푸터-4개의-컴포넌트-작업..ing',
      },
      {
        title: '4개의 컴포넌트 작업..ing',
        url: 'https://velog.io/@crg1050/코드스테이츠-FE-44기-솔로-프로젝트-3-4개의-컴포넌트-작업..ing',
      },
      {
        title: '메인 화면, 북마크 기능 구현',
        url: 'https://velog.io/@crg1050/코드스테이츠-FE-44기-솔로-프로젝트-4-메인-화면-북마크-기능-구현',
      },
      {
        title: '상품 리스트, 북마크 리스트 구현',
        url: 'https://velog.io/@crg1050/코드스테이츠-FE-44기-솔로-프로젝트-5-상품-리스트-북마크-리스트-구현',
      },
    ],
    tools: [
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
        title: 'Styled Components',
        detail:
          'Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다.',
      },
    ],
    parts: [
      {
        title: '북마크 구현',
        detail:
          'localStorage를 활용해 북마크 버튼 클릭 시 북마크 리스트에 추가 되도록 했습니다. 또한 새로고침 되어도 유지가 되고 북마크 취소할 경우 북마크에서 삭제될 수 있도록 했습니다.',
      },
      {
        title: '타입에 따른 상태 다르게 보이기',
        detail:
          '요구사항에서 총 4가지 컨텐츠가 있었고 다른 내용을 표기했습니다. 이부분 참고하여 타입에 따라 다르게 표기 되도록 작업했습니다.',
      },
    ],
  },
  {
    name: 'hancom',
    pointcolor: 'before:bg-[#0b4da1]',
    title: '한컴아카데미 온라인',
    subtext:
      'IT융합 전문 교육센터로 기존 홈페이지를 새롭게 리뉴얼된 홈페이지입니다. 클라이언트가 제공한 기획서 및 디자인을 확인하고 요구 사항을 참고하여 작업 했습니다.',
    data: '2022 - 약 6개월',
    team: '기여도 70%',
    tag: ['팀', '반응형', '퍼블리싱'],
    depoloyurl: 'https://online.hancomacademy.com/',
    tools: [
      {
        title: 'HTML/CSS',
        detail:
          'HTML, CSS로 마크업하여 웹 표준을 준수하고 웹 접근성을 고려하며 진행했습니다.',
      },
      {
        title: 'JQuery',
        detail:
          'JQuery는 자바스크립트 언어를 간편하게 사용할 수 있도록 단순화시킨 오픈 소스 기반의 자바스크립트 라이브러리입니다.',
      },
    ],
    parts: [
      {
        title: '담당자와의 직접적인 소통',
        detail:
          '요구사항 등을 정확히 파악하고 이해하기 위해 직접 소통하며 일정과 요구사항을 체크했습니다. 또한 개선 사항 등 피드백을 받았을 때 열린 마음으로 수용하며 진행했습니다.',
      },
      {
        title: '프론트엔드 개발자와의 커뮤니케이션',
        detail:
          'Google Sheets를 활용해 작업 현황 및 일정 공유를 했습니다. 또한 요구사항을 시각화 해 같이 전달하면서 요구사항을 명확하게 전달하고 주기적인 회의를 통해 개선해 나갔습니다.',
      },
      {
        title: '기타 페이지 디자인',
        detail:
          '디자인 시안을 받지 못한 페이지 디자인을 담당했습니다. 이미 디자인되어 있던 기존 페이지와의 일관성을 유지하도록 노렸습니다.',
      },
      {
        title: '퍼블리싱',
        detail:
          '디자인된 웹 페이지를 HTML, CSS로 마크업하여 웹 표준을 준수하고 웹 접근성을 고려하며 진행했습니다. 또한 요구사항에 따라 slick slider와 같은 외부 라이브러리를 활용해 동적인 화면을 보여줬습니다. 간단한 토글 버튼과 같은 작업에는 JQuery를 사용해 구현했습니다.',
      },
    ],
  },
  {
    name: 'woojieun',
    pointcolor: 'before:bg-[#46a6bb]',
    title: '우지은 스피치랩',
    subtext:
      '스피치 전문 학원으로 온라인으로도 수강을 할 수 있는 홈페이지입니다. 클라이언트가 제공한 기획서를 확인하고 요구 사항을 참고하여 작업 했습니다. 반응형이 아닌 PC/Mobile 도메인이 분리되어 있습니다.',
    data: '2021 - 약 10개월',
    team: '기여도 80%',
    tag: ['팀', '분리형', '디자인', '퍼블리싱'],
    depoloyurl: 'https://wspeechlab.com/',
    tools: [
      {
        title: 'HTML/CSS',
        detail:
          'HTML, CSS로 마크업하여 웹 표준을 준수하고 웹 접근성을 고려하며 진행했습니다.',
      },
      {
        title: 'JQuery',
        detail:
          'JQuery는 자바스크립트 언어를 간편하게 사용할 수 있도록 단순화시킨 오픈 소스 기반의 자바스크립트 라이브러리입니다.',
      },
    ],
    parts: [
      {
        title: '담당자와의 직접적인 소통',
        detail:
          '요구사항 등을 정확히 파악하고 이해하기 위해 직접 소통하며 일정과 요구사항을 체크했습니다. 또한 개선 사항 등 피드백을 받았을 때 열린 마음으로 수용하며 진행했습니다.',
      },
      {
        title: '프론트엔드 개발자와의 커뮤니케이션',
        detail:
          'Google Sheets를 활용해 작업 현황 및 일정 공유를 했습니다. 또한 요구사항을 시각화 해 같이 전달하면서 요구사항을 명확하게 전달했습니다.',
      },
      {
        title: '웹 디자인 (PC, Mobile)',
        detail:
          '기존 본사 홈페이지를 참고해 홈페이지를 방문했을 때 위화감이 나지 않도록 했습니다. 컨셉인 차분, 단아한 느낌을 살리려고 노력했습니다. PC 뿐만 아니라 Mobile환경의 화면도 디자인했습니다.',
      },
      {
        title: '퍼블리싱',
        detail:
          '디자인된 웹 페이지를 HTML, CSS로 마크업하여 웹 표준을 준수하고 웹 접근성을 고려하며 진행했습니다. 또한 요구사항에 따라 slick slider와 같은 외부 라이브러리를 활용해 동적인 화면을 보여줬습니다. 간단한 토글 버튼과 같은 작업에는 JQuery를 사용해 구현했습니다.',
      },
    ],
  },
];
