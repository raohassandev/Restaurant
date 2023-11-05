import { Button, Modal, ModalDialogProps, ModalProps } from "react-bootstrap";
import React, { useEffect, useState } from "react";

interface Props extends ModalProps, ModalDialogProps {
  visible?: boolean;
  children: React.ReactNode;
  headerTitle?: string;
  titleNo?: string;
  onClose?: () => void;
  titleYes?: string;
  onSubmit?: () => void;
  header?: boolean;
  footer?: boolean;
}

export const ModalComponent = ({
  visible,
  children,
  header,
  headerTitle,
  footer,
  onClose,
  onSubmit,
  titleYes,
  titleNo,
}: Props) => {
  return (
    <>
      <Modal
        show={visible}
        onHide={() => {
          if (onClose) onClose();
        }}
        backdrop="static"
        keyboard={false}>
        {header && (
          <Modal.Header closeButton>
            <Modal.Title>{headerTitle}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{children}</Modal.Body>
        {footer && (
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                if (onClose) onClose();
              }}>
              {titleNo}
            </Button>
            <Button variant="primary" onClick={onSubmit}>
              {titleYes}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};
