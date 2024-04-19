import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { overlayActions } from "../store/overlay-slice";

const useModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openScroll = () => {
    document.body.style.removeProperty('overflow');
  };

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    navigate('/');
    openScroll();
  };

  const openModal = (name: string) => {
    dispatch(overlayActions.targetName(name));
    navigate(`/${name}`);
    lockScroll();
  };

  return { closeModal, openModal }

};

export default useModal;