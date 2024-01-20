export const projectDetailData = [
  {
    name: 'ssthing',
    pointcolor: 'before:bg-[#373737]',
    title: '우주를 테마로 한 회사 소개 사이트',
    subtext:
      '우주를 테마로 한 회사 소개 홈페이지입니다.\n디자인 시안을 Figma로 확인하며 제시한 기한 내에 최대한 클라이언트가 요구한 기능을 작업하려고 했습니다.',
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
    featinfo: [
      '우주를 컨셉으로한 홈페이지로 이미지 요소가 많음',
      '네비게이션 메뉴 클릭 시 메인 화면에서 특정 위치로 이동',
      '서브 페이지에서도 네비게이션 메뉴 클릭 시 메인 화면의 특정 위치로 이동',
    ],
    parts: [
      {
        title: '헤더, 네비게이션 메뉴 작업',
        detail:
          '각 메뉴 클릭 시 해당 섹션으로 부드럽게 이동 되도록 구현하였습니다.\n\n더불어, 서브 페이지에서도 해당 메뉴 클릭 시 메인 페이지에서 해당 위치로 자동 이동 되도록 localStorage에 위치를 저장하는 기능을 추가했습니다. 이를 통해 사용자 경험을 향상시켰습니다.\n\n또한, 디스크 공간을 방지하기 위해 setTimeout()을 활용해 특정 위치에 도달한 후 지정된 시간이 지나면 자동으로 해당 위치 정보를 삭제하도록 조치했습니다.',
      },
      {
        title: '이미지 최적화 작업',
        detail:
          '이미지 요소가 많은 웹 사이트로 이미지 확장자를 webp로 변경하고, 용량 감소를 진행했습니다.\n이를 통해 초기 로딩 속도는 물로 사용자 경험을 향상시켰습니다.',
      },
      {
        title: '웹 표준 / 접근성 고려 및 퍼블리싱',
        detail:
          '디자인된 웹 페이지를 마크업하여 웹 표준을 준수하고 웹 접근성을 고려하여 프로젝트를 진행했습니다.\n\n각 섹션을 팀원과 협업해 PC 부터 Mobile까지 고려한 반응형 웹으로 개발했습니다.\n\n또한 디자이너가 요구한 디자인 시안을 정확히 이해하고, 섬세한 배경 위치 조절을 통해 완성도 높은 디자인을 구현했습니다.',
      },
    ],
  },
  {
    name: 'portfolio',
    pointcolor: 'before:bg-[#373737]',
    title: '지은 포트폴리오',
    subtext:
      '기획 부터 디자인까지 제가 직접 작업했습니다.\n노션, 템플릿 소스 등을 이용할 수 있었지만 저만의 포트폴리오 사이트를 가지고 싶어 제작했습니다.\n주요 색상인 black & white로 전체적으로 심플함을 줬고, UX와 내용 구성을 신경쓰며 진행한 포트폴리오 입니다.\n',
    data: '2023.08 - 진행 중',
    team: '1인 (솔로)',
    tag: ['솔로', '반응형', '포트폴리오', '사이드'],
    imgurl:
      'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/thumbnail_protfolio.webp',
    detailimginfo: [
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/273940311-0a5e824d-ba90-488f-be48-f6fef893890b.png',
        subject: '메인 화면',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/273941704-d5959682-0490-41f7-baab-fbfcfa05f04d.png',
        subject: '나에 대한 소개 화면',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/273941863-5ed32e92-bdb3-4114-a3eb-51a14eee0621.png',
        subject: '프로젝트 리스트 화면',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/273941995-5c170752-19e6-439f-a11a-20833c296756.png',
        subject: '이력 및 학력 화면',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/273945396-bfd4bdd6-4b84-446f-b9bd-844f7a4ea60f.png',
        subject: '프로젝트 상세 내용 모달 창',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/273946285-1825ce2d-1c45-4809-b194-e4fd8a442172.png',
        subject: '팀원 리뷰 상세 내용 모달 창',
      },
    ],
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
      {
        title: '포트폴리오 개선 하기 회고',
        url: 'https://velog.io/@crg1050/포트폴리오-개선하기',
      },
      {
        title: 'Tooltip 추가하기',
        url: 'https://velog.io/@crg1050/포트폴리오-Tooltip-추가하기',
      },
    ],
    featinfo: [],
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
    parts: [
      {
        title: '기획 및 내용 구체화',
        detail:
          '포트폴리오 제작 의도를 파악하고, 간결하면서도 효과적인 순서로 배치했습니다.\n\n수용한 피드백을 기반으로 자기 소개, 경력, 프로젝트, 교육 등 중요도 순으로 구성하여,\n포트폴리오를 보는 사용자들에게 원하는 정보를 쉽게 전달할 수 있도록 고려했습니다.',
      },
      {
        title: 'UI / UX 디자인 (PC, Mobile)',
        detail:
          '저만의 개성을 살려 디자인하는 동시에 여러 사용자들이 편안하게 느낄 수 있는 디자인을 추구했습니다.\n\n무채색인 black & white를 활용해 심플하면서도 차분한 느낌을 주었으며, UX 측면을 고려하며 사용자 경험을 개선하기 위해 노력했습니다.',
      },
      {
        title: '웹 표준 / 접근성 고려 및 퍼블리싱',
        detail:
          '직접 디자인한 웹 페이지를 마크업하여 웹 표준을 준수하고 웹 접근성을 고려하며 진행했습니다.\n\n특히, 메인 화면에서는 수용한 피드백을 반영해 framer-motion라이브러리를 활용했습니다. 첫 접속 시 애니메이션 효과를 적용해 사용자의 시선을 효과적으로 이끌어냈습니다.',
      },
    ],
  },
  {
    name: 'haru',
    pointcolor: 'before:bg-[#77D1FD]',
    title: '하루메이트',
    subtext:
      '당일 일정에서 하루,친구의 mate를 합쳐서 서비스명을 “하루메이트”로 짓게 되었습니다.\n하루메이트는 당일 일정을 만들고 친구에게 손쉽게 공유 할 수 있는 서비스입니다.\n친구와 놀러가기 위해서 계획을 짤 때 일정을 편리하게 공유하면 좋겠다는 생각으로 부터 시작되었습니다.\n\n일정 생성 과정이 지나치게 복잡한 서비스들이 대부분입니다.\n저희의 목표는 사용자들이 더욱 쉽고 간편하게 일정을 만들고 공유 할 수 있는 서비스를 제공하는 것입니다.',
    data: '2023.07 - 2023.08',
    team: '6인 (프론트엔드 3명, 백엔드 3명)',
    tag: ['팀', '반응형', '사이드'],
    imgurl:
      'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/thumbnail_haru.webp',
    detailimginfo: [
      {
        imgurl:
          'https://user-images.githubusercontent.com/77836614/255490884-6341a0f3-e248-4af3-9733-4846c1ae7c51.png',
        subject: '메인 페이지',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/77836614/255491184-93dca001-e946-4665-8093-c50dcdb6aad0.png',
        subject: '일정등록 페이지',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/77836614/255491417-fef65d05-d4b6-4462-9239-86b715b3789b.png',
        subject: '커뮤니티 페이지',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/77836614/255491568-89573d57-166d-456d-ae5d-df5928d4d50b.png',
        subject: '마이 페이지',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/77836614/255491604-a97df5fd-ebe5-4ab1-b93a-93d655772683.png',
        subject: '설정 페이지',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/77836614/255491649-f757bcdb-6a4a-4594-ad92-f6a87ef8d6e3.png',
        subject: '랜딩 페이지',
      },
    ],
    giturl: 'https://github.com/codestates-seb/seb44_main_006',
    depoloyurl: 'https://harumate.netlify.app/',
    blogurl: [
      {
        title: '프로젝트 회고',
        url: 'https://velog.io/@crg1050/코드스테이츠-FE-44기main-project-회고',
      },
    ],
    featinfo: [
      '카카오 맵 API를 활용해 장소 표시 및 검색',
      '일정 등록 및 수정',
      '마이페이지에서 등록한 일정과 즐겨찾기한 일정 확인하기',
      '친구에게 일정 공유하기(링크, 카카오톡 링크)',
      '다른 사람들이 공유한 일정 확인하고 즐겨찾기 추가하기',
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
        title: '공통 컴포넌트 작업',
      },
      {
        title: '웹 표준 / 접근성 고려',
      },
      {
        title: '헤더, 푸터 작업',
        detail:
          'header는 스크롤 여부에 따라 스타일이 변하도록 구현하고, 로그인 후 유저 프로필 사진 클릭 시 메뉴가 나오도록 작업했습니다.\n\nfooter에는 팀원 이름 마우스 호버 시 팀원의 역할이 표시되는 재미있는 요소를 추가하고, 클릭 시 팀원의 Github 페이지로 이동할 수 있도록 작업했습니다.',
      },
      {
        title: '메인 페이지 작업 및 커서 커스터마이징 구현',
        detail:
          '메인 페이지는 독특한 커서 커스터마이징이 돋보이는데, 이미지를 사용하기보다는 마우스 이벤트에 따라 사용자 경험을 개선하기 위해 여러 코드를 참고하여 구현했습니다.',
      },
      {
        title: '마이 페이지 작업 및 유저 닉네임 RU',
        detail:
          '마이 페이지 반응형을 적용하고 유저 닉네임 수정할 수 있도록 작업했습니다. \n\n또한 "탈퇴한 회원" 또는 "탈퇴한 사용자" 닉네임은 사용할 수 없도록 작업해 사용자의 악용사례를 방지했습니다.',
      },
      {
        title: '설정 페이지 작업',
        detail:
          '설정 페이지에 반응형을 적용하고 로그인, 로그아웃 기능을 추가해 사용자 경험을 향상했습니다.',
      },
      {
        title: '전반적인 디자인 총괄 및 로고 디자인',
        detail:
          '전체적인 UI 디자인을 담당하고, UX는 팀원들과 협업하여 수정했습니다. \n뿐만 아니라 로고 디자인도 직접 수행하여 프로젝트의 브랜딩을 기여했습니다.',
      },
    ],
  },
  {
    name: 'stack',
    pointcolor: 'before:bg-[#FA9B59]',
    title: '스택오버플로우',
    subtext:
      '랜덤의 팀원들과 정해진 주제인 스택오버플로우 사이트를 클론 코딩 하며 프로젝트 경험을 쌓았습니다.\n짧은 기간이였지만 기존 사이트의 UI/UX 측면도 고려하고, 기간 내에 구현 할 수 있는지와 없는지 확인하며 진행했습니다.\n\n* 현재 배포 사이트 확인은 가능하나 서버는 닫혀있는 상태입니다.',
    data: '2023.06 - 2023.07',
    team: '6인 (프론트엔드 3명, 백엔드 3명)',
    tag: ['팀', '반응형', '클론코딩', '사이드'],
    imgurl:
      'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/thumbnail_stack.webp',
    detailimginfo: [
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/249023604-d8d39315-78f2-4069-99a2-0f7f7ab444e4.png',
        subject: '메인 페이지',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/249023704-d9b53a20-6fa7-4ae4-a8b3-9d7275ba4690.png',
        subject: '로그인 페이지',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/249023765-882f2706-ff02-466f-87cc-895a8aca66d6.png',
        subject: '검색 페이지',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/249023788-40a8e6e6-9373-40c0-bdd8-c227689a04c1.png',
        subject: '질문 작성/수정 페이지',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/249023810-1df4778b-6748-4f30-a005-39039e189d3b.png',
        subject: '질문 뷰 페이지',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/249023826-e00977d9-57f2-4ad9-b4f0-27927946373c.png',
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
        detail:
          '팀원들과 함께 오버플로우 홈페이지의 UX를 분석하고 짧은 작업 기간을 고려해 기술들을 레벨로 나눴습니다.',
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
          '질문 작성 / 수정하기 페이지 작업을 2인 1조로 작업 구역을 나눠 기능 구현을 진행했으며, 도움이 필요한 경우 같이 상의하며 진행했습니다. 상호 상의하며 진행했습니다.\n\n질문 작성란의 경우 react-quill 라이브러리를 활용하여 구현했습니다.',
      },
      {
        title: '질문 작성 / 수정하기 태그 추가, 수정 구현',
        detail:
          '질문 작성 / 수정하기 페이지에서 태그 영역을 맡았습니다.\n\n태그는 최대 3개 까지만 추가 가능하며, 3개 초과 시 다른 태그를 선택할 수 없도록 select box의 disabled속성을 활용하여 구현했습니다.',
      },
    ],
  },
  {
    name: 'coz',
    pointcolor: 'before:bg-[#6a57e0]',
    title: 'Coz Shopping',
    subtext:
      '코드스테이츠 과제로 주어진 요구 명세서를 확인 하고 해당 내용을 토대로 진행했습니다.\n짧은 기간에 요구한 기능을 구현하는게 목적이며, 프로젝트를 진행하며 필수인\nGit, Github를 학습 하는데 많은 도움이 되었습니다.\n\n* 현재 서버는 닫혀있는 상태입니다.',
    data: '2023.07 - 2023.08',
    team: '1인 (솔로)',
    tag: ['솔로', '사이드'],
    imgurl:
      'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/thumbnail_cozshopping.webp',
    detailimginfo: [
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/239165066-c8cb8e8f-fb28-4a71-9eba-a1c41bdc5e3d.png',
        subject: '메인 페이지',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/239165560-b196d6ab-7038-415d-9e09-a7a9a09f76a1.png',
        subject: '상품 이미지 클릭 시 모달창 표시',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/239166014-9738b70d-eb5b-4fd0-b939-2e912bc1b41a.png',
        subject: '상품 리스트 페이지',
      },
      {
        imgurl:
          'https://user-images.githubusercontent.com/109754988/239166344-d78cd67c-0690-4908-b9f0-e5a7baed0b5d.png',
        subject: '북마크 상품 리스트 페이지',
      },
    ],
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
    featinfo: [
      'API를 활용한 리스트 확인',
      'LocalStrage를 활용한 북마크 기능',
      '해당 컨텐츠 클릭 시 모달로 이미지 크게 보기',
      '상품 리스트 타입에 따라 필터링 (탭 메뉴)',
    ],
    tools: [
      {
        title: 'React',
        detail:
          'React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.',
      },
      // {
      //   title: 'Redux Toolkit',
      //   detail:
      //     'Redux Toolkit은 Redux 상태 관리 라이브러리를 사용하기 위한 보조 도구입니다. Redux보다 코드를 간결하게 작성할 수 있게 도와주며, 전역으로 상태를 관리할 수 있습니다.',
      // },
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
          'localStorage를 활용해 북마크 버튼 클릭 시 북마크 리스트에 추가 되도록 했습니다. 더불어 새로고침 되어도 유지가 되고 북마크 취소할 경우 북마크에서 삭제될 수 있도록 했습니다.',
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
    title: 'IT 온라인 수강 사이트',
    subtext:
      'IT융합 전문 교육센터로 기존 홈페이지를 새롭게 리뉴얼된 홈페이지입니다.\n클라이언트가 제공한 기획서 및 디자인을 확인하고 요구 사항을 참고하여 작업 했습니다.',
    data: '2022 - 약 6개월',
    team: '기여도 70%',
    tag: ['장기', '반응형', '퍼블리싱'],
    depoloyurl: 'https://online.hancomacademy.com/',
    tools: [
      {
        title: 'HTML',
        detail:
          '웹 페이지의 구조를 HTML로 마크업하여 웹 표준을 준수하고, 웹 접근성을 고려하며 작업했습니다.',
      },
      {
        title: 'CSS',
        detail:
          'CSS를 활용하여 각 요소에 일관된 스타일링을 적용하여 사용자 경험을 향상시켰습니다.',
      },
      {
        title: 'JQuery',
        detail:
          'JQuery는 자바스크립트 언어를 단순화시켜 개발을 편리하게 할 수 있도록 도와주는 오픈 소스 기반의 자바스크립트 라이브러리입니다.',
      },
    ],
    featinfo: [],
    parts: [
      {
        title: '담당자와의 직접적인 소통',
        detail:
          '요구사항 등을 정확히 파악하고 이해하기 위해 직접 소통하며 일정과 요구사항을 체크했습니다. 더불어 개선 사항 등 피드백을 받았을 때 열린 마음으로 수용하고, 더 나은 방향으로 제안하여 프로젝트를 구체화해 나갔습니다.',
      },
      {
        title: '프론트엔드 개발자와의 커뮤니케이션',
        detail:
          'Google Sheets를 활용해 진행도, 주요사항 등 작업 현황 및 일정 공유를 했습니다.\n또한 클라이언트의 요구사항을 시각화 해 전달하면서 요구사항을 명확하게 전달하고 주기적인 회의를 통해 개선해 나갔습니다.',
      },
      {
        title: '기타 페이지 디자인 (PC, Mobile)',
        detail:
          '디자인 시안을 받지 못한 기타 페이지 디자인을 담당했습니다.\n이미 디자인되어 있던 기존 페이지와의 일관성을 유지하도록 노력했습니다.',
      },
      {
        title: '반응형 웹 도입을 통한 업무 환경 개선',
        detail:
          '적응형 웹 방식에서 작업하던 업무 환경에서, 이번 프로젝트에서는 동일한 UI에 배치만 변경되는 프로젝트 구성되어 있었습니다.\n반응형 웹을 도입을 통해 업무 환경 및 작업 효율을 2배로 향상시켰습니다.',
      },
      {
        title: '웹 표준 / 접근성 고려 및 퍼블리싱',
        detail:
          '디자인된 웹 페이지를 마크업하여 웹 표준을 준수하고 웹 접근성을 고려하며 진행했습니다.\n\n또한 요구사항에 따라 slick slider와 같은 외부 라이브러리를 활용해 동적인 화면을 보여줬습니다. 간단한 토글 버튼과 같은 작업에는 JQuery를 활용해 구현했습니다.',
      },
    ],
  },
  {
    name: 'goguma',
    pointcolor: 'before:bg-[#7c29a7]',
    title: '재능 중개 마켓 플랫폼',
    subtext:
      '크몽 등의 플랫폼 처럼 해당 프로젝트는 인플루언서의 재능을 거래하는 이커머스 플랫폼 사이트입니다.\n클라이언트가 제공한 기획 내용과 요구사항을 참고하며 진행했고, 더불어 구체화 되지 않은 페이지는 기획 및 문서화해 진행했습니다. \n\n *프로젝트는 완료 했으나 오픈하기 전 퇴사해 오픈 유무 확인이 어렵습니다.',
    data: '2020 - 2021 약 8개월',
    team: '기여도 80%',
    tag: ['장기', '반응형', '퍼블리싱'],

    tools: [
      {
        title: 'HTML',
        detail:
          '웹 페이지의 구조를 HTML로 마크업하여 웹 표준을 준수하고, 웹 접근성을 고려하며 작업했습니다.',
      },
      {
        title: 'CSS',
        detail:
          'CSS를 활용하여 각 요소에 일관된 스타일링을 적용하여 사용자 경험을 향상시켰습니다.',
      },
      {
        title: 'JQuery',
        detail:
          'JQuery는 자바스크립트 언어를 단순화시켜 개발을 편리하게 할 수 있도록 도와주는 오픈 소스 기반의 자바스크립트 라이브러리입니다.',
      },
    ],
    featinfo: [
      '인플루언서 등록',
      '고객사 등록',
      '홍보 상품 등록 및 신청하기',
      '인플루언서와의 거래 신청',
    ],
    parts: [
      {
        title: '담당자와의 직접적인 소통',
        detail:
          '요구사항 등을 정확히 파악하고 이해하기 위해 직접 소통하며 일정과 요구사항을 체크했습니다. 더불어 개선 사항 등 피드백을 받았을 때 열린 마음으로 수용하고, 더 나은 방향으로 제안하여 프로젝트를 구체화해 나갔습니다.',
      },
      {
        title: '프론트엔드 개발자와의 커뮤니케이션',
        detail:
          '요구사항을 시각화 해 같이 전달하면서 요구사항을 명확하게 전달하고, 주기적인 회의를 통해 개선해 나갔습니다.',
      },
      {
        title: '기획이 필요한 페이지의 경우 기획 역할 수행',
        detail:
          '클라이언트가 기획하지 못한 페이지를 기획하고 문서화했습니다.\n이를 클라이언트, 프론트엔드 개발자와 소통하며 프로젝트 방향성을 구체화해 나갔습니다.',
      },
      {
        title: '기타 페이지 디자인 (PC, Mobile)',
        detail:
          '요구한 로고, 색상 코드, 컨셉에 맞춰 디자인 작업을 수행했습니다.',
      },
      {
        title: '레거시 코드 개선을 통한 유지보수성 향상',
        detail:
          '과거에 활용되었던 템플릿을 기반으로 진행하게 되었습니다.\n기존 레거시 코드를 개선하는 작업을 수행하여, 코드의 가독성을 높히고 유지보수성을 향상시켰습니다.',
      },
      {
        title: 'QA 진행을 통한 프로젝트 품질 향상',
        detail:
          'QA업무에서 기능이 올바르게 작동하고 화면이 요구사항에 따라 표시되는지 확인하며 발결된 개선 사항을 정리했습니다.\n이를 프론트엔드 개발자와 공유하며 프로젝트의 품질을 지속적으로 향상시켰습니다.',
      },
      {
        title: '웹 표준 / 접근성 고려 및 퍼블리싱',
        detail:
          '디자인된 웹 페이지를 마크업하여 웹 표준을 준수하고 웹 접근성을 고려하며 진행했습니다. 또한 요구사항에 따라 slick slider와 같은 외부 라이브러리를 활용해 동적인 화면을 보여줬습니다. 간단한 토글 버튼과 같은 작업에는 JQuery를 사용해 구현했습니다.',
      },
    ],
  },
];
