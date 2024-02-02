function IcArrow({ isToggle, isToggled }: { isToggle: boolean, isToggled?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="9"
      viewBox="0 0 7 9"
      fill="none"
    >
      <path
        d={
          isToggled || isToggle
            ? "M4.5 7L0.602885 0.25L8.39711 0.250001L4.5 7Z"
            : "M7 4.5L0.250001 8.39712L0.250001 0.602886L7 4.5Z"
        }
        fill="#232323"
      />
    </svg>

  );
}

export default IcArrow;