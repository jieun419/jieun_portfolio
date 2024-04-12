export const project6 = {
  name: 'portfolio',
  pointcolor: 'before:bg-[#373737]',
  title: '포트폴리오 사이트',
  subtext:
    '기획 부터 디자인까지 제가 직접 작업했습니다.\n노션, 템플릿 소스 등을 이용할 수 있었지만 저만의 포트폴리오 사이트를 가지고 싶어 제작했습니다.\n주요 색상인 black & white로 전체적으로 심플함을 줬고, UX와 내용 구성을 신경쓰며 진행한 포트폴리오 입니다.\n',
  data: '2023.08 - 진행 중',
  team: '1인 (솔로)',
  tag: ['솔로', '반응형', '포트폴리오', '사이드'],
  imgurl: 'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/thumbnail_portfolio.webp',
  detailimginfo: [
    {
      imgurl:
        'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_portfolio1.webp',
      subject: '메인 화면',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_portfolio2.webp',
      subject: '나에 대한 소개 화면',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_portfolio3.webp',
      subject: '이력 및 학력 화면',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_portfolio4.webp',
      subject: '프로젝트 리스트 화면',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_portfolio5.webp',
      subject: '프로젝트 상세 내용 모달 창',
    },
    {
      imgurl:
        'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_portfolio6.webp',
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
    {
      title: '포트폴리오 고도화 작업 회고',
      url: 'https://velog.io/@crg1050/포트폴리오-interview-형식-tab기능-추가하기',
    },
  ],
  featinfo: [
    '패드백을 수용하고, 지속적으로 개선 중',
    '메인 화면, 마지막 화면에서 github, velog 바로가기',
    '소개 - 커리어 - 프로젝트 - 교육 순으로 표시',
    '프로젝트 "자세히보기" 버큰 클릭 시 상세한 정보 표시 (github, 배포 링크, 관련 블로그 링크)',
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
      title: '포트폴리오 제작 의독를 파악하고 기획 및 구체화 작업',
      detailList: [
        `커리어 코칭 등을 통해 수용한 피드백을 기반으로 자기 소개, 경력, 프로젝트, 교육 등 중요도 순으로 **간결하면서도 효과적인 순서로 배치**`,
        `포트폴리오를 보는 사용자들에게 원하는 정보를 쉽게 전달할 수 있도록 고려`,
        `현재 지속적으로 피드백을 받고 개선하면서 **고도화 진행 중**`,
      ],
    },
    {
      title: '개성을 살려 UI / UX 디자인 (PC, Mobile)',
      detailList: [
        `저만의 개성을 살려 디자인하는 동시에 여러 사용자들이 편안하게 느낄 수 있는 디자인 추구하며 작업`,
        `무채색인 black & white를 활용해 심플하면서도 차분한 느낌을 주었으며, **\`Tooltip\`, 익숙한 배치 등 UX 측면을 고려**하며 사용자 경험을 개선하기 위해 노력 중`,
      ],
    },
    {
      title: '웹 표준 / 접근성 고려 및 인터랙션 작업',
      detailList: [
        `직접 디자인한 웹 페이지를 마크업하여 웹 표준을 준수하고 웹 접근성을 고려하며 진행.`,
        `메인 화면에서 수용한 피드백을 반영해 애니메이션을 간단하게 구현할 수 있도록 **\`framer-motion\` 라이브러리 활용해 사용자의 시선을 효과적으로 이끌어냄**`,
      ],
    },
  ],
  trouble: [
    {
      title: '초기 화면이 시선 집중되지 않았던 문제로 framer-motion 라이브러리 활용',
      detailList: [
        `**[문제점]** 초반 피드백을 받았을 때 심플하고 눈에 잘 들어오지 않는다는 피드백을 받았습니다.`,
        `**[해결]** 피드백을 수용하고 애니메이션 효과를 간단하게 구현할 수 있는 \`framer-motion\`라이브러리를 활용해 매끄러운 애니메이션 효과를 구현하고 배경 이미지를 추가했습니다. **사용자의 시선을 효과적으로 이끌어냈고, 긍정적인 피드백**을 받을 수 있었습니다.`,
      ],
    },
    {
      title: '받았던 피드백으로 포트폴리오 지속적으로 개선 작업',
      detailList: [
        `**[문제점]** 지속적으로 개선시키던 중, 여러 프로젝트를 소개하고 있기에 사용자가 쉽게 찾기 어려울 것 같아 고민하게 되었습니다.`,
        `**[해결]** 이를 해결하기 위해 \`Tab Menu\`를 추가하여 원하는 프로젝트 리스트 바로 찾을 수 있도록 수정하고, [About Me] 섹션을 \`Interview\` 형식으로 변경하여 저에 대한 정보를 보다 쉽게 전달할 수 있도록 사용자 경험을 개선하고자 했습니다.`,
      ],
    },
  ],
};
