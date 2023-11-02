import { Model, ModelProps } from "components/Model/Model";

import { Button } from "components/button/Button";
import React from "react";

interface Props extends ModelProps {
  label: string;
}
export const ModelButton = (props: Props) => {
  const { label } = props;
  return (
    <Button label="df">
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        {label}
      </button>
      {/* <Model>{children}</Model> */}
      <Model {...props} />
    </Button>
  );
};
