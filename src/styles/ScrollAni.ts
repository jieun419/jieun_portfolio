import { styled } from 'styled-components';

type PropsT = {
  delay?: string;
  width?: string;
};

export const ScrollAni = styled.div<PropsT>`
  width: ${(props) => (props.width ? props.width : '')};
  height: auto;
  transition: 0.5s;

  &.fadeIn {
    opacity: 1;
  }

  &.fadeOut {
    opacity: 0;
  }

  &.fadeAn {
    animation-name: scroll;
    animation-duration: 1s;
    animation-delay: ${(props) => props.delay && props.delay};
    transform: translateY(0);
  }

  &.mdH {
    @media not all and (min-width: 1280px) {
      height: 100vh;
    }
    @media not all and (min-width: 1024px) {
      height: auto;
    }
  }

  @keyframes scroll {
    0% {
      opacity: 0;
      transform: translateY(-80px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default ScrollAni;
