import ReactModal from "react-modal";
import styles from "./Modal.module.css";

ReactModal.setAppElement("#__next");

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

const Modal = ({ isOpen, onClose, children, title }: Props) => {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="onRequestClose Example"
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={false}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      {title && (
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      )}

      <div className={styles.content}>{children}</div>
    </ReactModal>
  );
};

export default Modal;
