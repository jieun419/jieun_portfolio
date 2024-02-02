type StyleProps = {
  width: string;
  height: string;
}

const icSpeechBubble = ({ width, height }: StyleProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width={width ? width : '15'}
      height={height ? height : '15'}
      viewBox="0 0 205 154"
      fill="none">
      <path d="M205 154L172 108L205 108L205 154Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M205 0H0V126H205V0ZM56.5 73C61.7467 73 66 68.7467 66 63.5C66 58.2533 61.7467 54 56.5 54C51.2533 54 47 58.2533 47 63.5C47 68.7467 51.2533 73 56.5 73ZM112 63.5C112 68.7467 107.747 73 102.5 73C97.2533 73 93 68.7467 93 63.5C93 58.2533 97.2533 54 102.5 54C107.747 54 112 58.2533 112 63.5ZM148.5 73C153.747 73 158 68.7467 158 63.5C158 58.2533 153.747 54 148.5 54C143.253 54 139 58.2533 139 63.5C139 68.7467 143.253 73 148.5 73Z"
        fill="black" />
    </svg>
  );
};

export default icSpeechBubble;