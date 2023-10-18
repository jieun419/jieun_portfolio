type StyleProps = {
  width: string;
  height: string;
}

function IcMail({ width, height }: StyleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : '15'}
      height={height ? height : '15'}
      viewBox="0 0 538 404"
      fill="none"
    >
      <path
        d="M0.750488 0.613525V67.7139L269.152 201.915L537.553 67.7139V0.613525H0.750488ZM0.750488 134.814V403.216H537.553V134.814L269.152 269.015L0.750488 134.814Z"
        fill="black"
      />
    </svg>
  )
}

export default IcMail;

