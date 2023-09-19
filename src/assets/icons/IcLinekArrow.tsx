type StyleProps = {
  width: string;
  height: string;
  color?: string;
}

function IcLineArrow({ width, height, color }: StyleProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width={width ? width : '15'}
      height={height ? height : '15'}
      viewBox="0 0 28 17"
      fill="none"
    >
      <path
        d="M2 15L14 3L26 15"
        stroke={color ? color : 'black'}
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  )
}

export default IcLineArrow
