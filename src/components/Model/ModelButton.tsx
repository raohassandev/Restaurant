import { Model, ModelProps } from "components/Model/OldModel";

interface Props extends ModelProps {
  label: string;
}
export const ModelButton = (props: Props) => {
  const { label } = props;
  return (
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={props.target}>
        {label}
      </button>
      {/* <Model>{children}</Model> */}
      <Model {...props} />
    </div>
  );
};
