import { SlUser } from "react-icons/sl";
interface Props {
  name: "user";
}

export const Icon = ({ name }: Props) => {
  return <div>{name === "user" && <SlUser />}</div>;
};
