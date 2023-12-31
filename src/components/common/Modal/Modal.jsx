import { X } from "@phosphor-icons/react";
import { StylesContentModal, StylesModal } from "./modal.styles";

const Modal = ({ open, title, fechaModal, children }) => {
    const handleClose = (e) => {
      e.target.id === "modal" && fechaModal();
    };
    return (
      <>
        {open && (
          <StylesModal id="modal" onClick={handleClose}>
            <StylesContentModal>
              <section className="header">
                <X color={'white'} onClick={fechaModal} cursor="pointer" size={32}/>
              </section>
              {children}
            </StylesContentModal>
          </StylesModal>
        )}
      </>
    );
  };
  
  export default Modal;