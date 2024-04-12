export const project7 = {
  name: 'poke',
  pointcolor: 'before:bg-[#ED1B24]',
  title: '포켓몬 도감',
  subtext:
    '포켓몬 API를 알게되어 작업을 진행하게 되었습니다.\nReact Query는 물론 무한 스크롤링, 다크모드, axios를 공부하기 위해 제작하게 되었습니다.\n\n현재는 완성도 높은 프로젝트를 구현하기 위해 꾸준히 개선하고 있습니다.',
  data: '2023.09 - 진행 중',
  team: '1인 (솔로)',
  tag: ['솔로', '토이'],
  imgurl: 'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/thumbnail_pokedex.webp',
  detailimginfo: [
    {
      imgurl: 'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_poke1.webp',
      subject: '메인 화면',
    },
    {
      imgurl: 'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_poke2.webp',
      subject: '포켓몬 상세 정보',
    },
    {
      imgurl: 'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_poke3.webp',
      subject: '메인 화면 - 다크모드',
    },
    {
      imgurl: 'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_poke4.webp',
      subject: '포켓몬 상세 정보 - 다크모드',
    },
    {
      imgurl: 'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_poke5.webp',
      subject: '검색 페이지',
    },
    {
      imgurl: 'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/project_poke6.webp',
      subject: '검색 페이지 - 검색 키워드 없을 경우',
    },
  ],
  giturl: 'https://github.com/jieun419/poke-dex',
  depoloyurl: 'https://je-poke-dex.vercel.app/',
  blogurl: [
    {
      title: '다크모드 구현 하기 (react, reduxToolkit, styled components)',
      url: 'https://velog.io/@crg1050/다크모드-구현-하기-react-reduxToolkit-styled-components',
    },
    {
      title: '컴포넌트 분리하기',
      url: 'https://velog.io/@crg1050/포켓몬-도감-컴포넌트-분리하기',
    },
    {
      title: 'useEffect에서 불필요한 호출이 발생되는 이슈',
      url: 'https://velog.io/@crg1050/포켓몬-도감-불필요한-데이터-불러오는-이슈',
    },
    {
      title: 'URLSearchParams를 활용해 검색 페이지 구현',
      url: 'https://velog.io/@crg1050/포켓몬-도감-URLSearchParams메서드를-활용해-검색-페이지-구현',
    },
  ],
  featinfo: [
    '포켓몬API를 활용해 포켓몬 데이터 불러오기',
    '스크롤할 경우 20개씩 포켓몬 데이터 무한 스크롤링',
    '특정 포켓몬 클릭 시 포켓몬 정보 모달창 표시',
    'Redux Toolkit, localStorage를 활용해 다크모드 지원',
    'URLSearchParams메서드를 활용해 포켓몬 검색',
    '한/영 지원 (검색시 영문만 가능)',
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
      title: '프로젝트 기획 및 디자인 구성',
      detailList: [
        `\`Figma\`를 활용해 직관적으로 원하는 정보만 보일 수 있도록 구조 작업`,
        `현재에도 지속적으로 프로젝트를 구체화 진행 중`,
      ],
    },
    {
      title: 'Lazy, Suspense 통해 코드 스플리팅 작업 및 뷰포트에 보이지 않는 이미지 로딩 지연',
      detailList: [
        `초기 로딩 최적화를 위해 페이지 이동 구간에 \`Lazy\`, \`Suspese\`를 통해 코드 스플리팅 작업 진행`,
        `이미지 태그에 \`loading="lazy\` 속성을 추가해 뷰포트에 보이지 않는 **이미지 로딩을 지연**시켜 초기 로딩 속도 향상`,
      ],
    },
    {
      title: 'Redux Toolkit, localStorage를 통해 다크모드 테마 제공',
      detailList: [
        `\`Redux Toolkit\`로 테마에 대한 상태를 저장하여 **전역으로 테마 상태 관리**`,
        `\`localStorage\`를 활용해 유저 **브라우저에 테마 타입 저장**하여 새로고침해도 테마가 유지되므로써 사용자 경험을 향상`,
      ],
    },
    {
      title: '라이브러리 사용 없이 scrollHeight, scrollTop, clientHeight 요소 활용해 무한 스크롤 구현',
      detailList: [
        `\`scrollHeight\`, \`scrollTop\`, \`clientHeight\` 요소를 활용해 뷰포트 바닥에 닿을 경우 요청한 데이터만큼만 불러오도록 무한 스크롤 구현`,
        `초기 로딩 시 모든 데이터를 불러오지 않고 사용자가 스크롤 할 때 필요한 만큼의 데이터를 불러와 성능을 향상시켜 사용자 경험 개선`,
        `이후 React Query에서 제공하는 \`useInfiniteQuery\` 쿼리를 사용해 구현 예정`,
      ],
    },
    {
      title: '원하는 포켓몬을 쉽게 찾기 위해 URLSearchParams 활용해 검색 페이지 및 검색 기능 구현',
      detailList: [
        `\`input action\` 속성을 통해 페이지가 이동하면서 URL 파라미터에 검색 키워드 저장`,
        `\`URLSearchParams\` 메서드를 활용해 검색 키워드를 추출 후 React Query의 useQuery와 Redux Toolkit을 활용해 \`filtering\`된 검색 결과를 표시`,
        `원하는 검색 결과가 없을 경우의 조건문을 통하여 \`Nothing\` 컴포넌트 보이도록해 사용자 경험을 향상`,
      ],
    },
  ],
  trouble: [
    {
      title: '포켓몬 데이터 리스트를 업데이트 하는 useEffect에서 초기 렌더링시 불필요한 호출이 발생하는 이슈',
      detailList: [
        `**[문제점]** \`useEffect\`를 활용해 초기 로딩 시 포켓몬 데이터 리스트를 업로드하는 과정에서 3번의 호출이 감지 되었습니다. 무한 스크롤로 인해 뷰포트가 바닥을 감지하여 이루어지는 이슈로 생각해 스켈레톤을 추가했으나, 동일한 문제가 발생했습니다.`,
        `**[해결]** \`console.log\`를 활용해 초기 렌더링 시 포켓몬 데이터 리스트가 빈 배열로 들어오는 시점에서 **useEffect가 2번 호출되는 이슈**를 확인하게 되었습니다. useEffect에 포켓몬 데이터 리스트가 있을 경우에만 실행하도록 조건문을 추가해 불필요한 렌더링을 막을 수 있었습니다.`,
        `**[회고]** useEffect를 사용할 경우 **초기 로딩에 대한 처리를 신중하게 고려**하는 것이 중요하다 생각하게 되었습니다.`,
      ],
    },
    {
      title: '방대한 포켓몬 데이터로 인한 성능 최적화 이슈',
      detailList: [
        `**[문제점]** 포켓몬 데이터가 방대함으로 인해 최적화에 대한 고민이 많았습니다.`,
        `**[해결]** 무한스크롤링을 도입해 메모리 소모를 최소화, \`React.lazy\`,\`Suspense\`를 활용해 초기 로딩 시의 성능을 향상, img태그에 \`loading="lazy"\` 속성을 추가해 이미지의 로딩 최적화했습니다.`,
      ],
    },
  ],
};
