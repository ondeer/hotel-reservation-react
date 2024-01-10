import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

const Modal = ({ className, children }) => {
  const navigate = useNavigate();
  const handleCloseModal = () => {
    navigate("..");
  };
  return (
    <>
      <div className={classes.backdrop} onClick={handleCloseModal} />
      <dialog open className={`${classes.modal} ${className}`}>
        {children}
      </dialog>
    </>
  );
};
export default Modal;
