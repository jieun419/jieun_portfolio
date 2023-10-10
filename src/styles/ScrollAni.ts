import { styled } from 'styled-components';

type Props = {
  delay?: string;
};

export const ScrollAni = styled.div<Props>`
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
