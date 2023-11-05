import React from "react";

export interface ModelProps {
  children?: React.ReactNode;
  title?: string;
  titleNo?: string;
  onClose?: () => void;
  titleYes?: string;
  onSubmit?: () => void;
  header?: boolean;
  footer?: boolean;
  target: string;
}
export const Model = ({
  header,
  footer,
  title,
  target,
  titleNo,
  titleYes,
  onClose,
  onSubmit,
  children,
}: ModelProps) => {
  return (
    <div>
      <div className="modal fade" id={target.split("#")[1]} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            {header && (
              <div className="modal-header">
                <h1 className="modal-title fs-3" id="exampleModalLabel">
                  {title}
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            )}
            <div className="modal-body">{children}</div>
            {footer && (
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>
                  {titleNo}
                </button>
                <button type="button" className="btn btn-primary" onClick={onSubmit}>
                  {titleYes}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
