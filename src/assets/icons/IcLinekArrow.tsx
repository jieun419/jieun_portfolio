type StyleProps = {
  width: string;
  height: string;
  color?: string;
  direction?: string;
}

function IcLineArrow({ width, height, color, direction }: StyleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : '15'}
      height={height ? height : '15'}
      viewBox="0 0 28 17"
      fill="none"
    >
      <path
        d={direction ? direction : 'M2 15L14 3L26 15'}
        stroke={color ? color : 'black'}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default IcLineArrow
