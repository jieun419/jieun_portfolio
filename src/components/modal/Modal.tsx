import { ReactNode } from "react";
import tw from "tailwind-styled-components";
import DropShadow from "../atoms/dropShadow/DropShadow";
import useModal from "../../hooks/useModal";

const ModalContainer = tw.article`
  fixed
  inset-x-0
  inset-y-0
  z-[20]
  overflow-y-auto
  py-10
  px-40
  max-md:px-0
  max-md:py-0
 `

const Modal = ({ children }: { children: ReactNode }) => {
  const { closeModal } = useModal();

  return (
    <ModalContainer>
      {children}
      <DropShadow closeModal={closeModal} />
    </ModalContainer>
  );
};

export default Modal;