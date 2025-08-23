// components/CompareRedirectModal.tsx
import { Modal, Button } from "react-bootstrap";

interface CompareRedirectModalProps {
  show: boolean;
  handleClose: () => void;
  handleRedirect: () => void;
}

const CompareRedirectModal = ({
  show,
  handleClose,
  handleRedirect,
}: CompareRedirectModalProps) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>مقایسه اقلام</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      شما دو مورد را به لیست مقایسه اضافه کرده اید. آیا مایل به مشاهده
      صفحه مقایسه هستید؟
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          لغو
        </Button>
        <Button variant="primary" onClick={handleRedirect}>
          دیدن صفحه مقایسه
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CompareRedirectModal;
