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
}
export const Model = ({ header, footer, title, titleNo, titleYes, onClose, onSubmit, children }: ModelProps) => {
  //   return <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">{children}</div>;
  return (
    <div>
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            {header && (
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Category
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            )}
            <div className="modal-body">{children}</div>
            {footer && (
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
