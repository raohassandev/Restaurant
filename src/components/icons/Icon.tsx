import "./icon.scss";

import { AiOutlineMenu, AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { BiEdit, BiTrashAlt } from "react-icons/bi";

import { CSSProperties } from "react";
import { HiOutlineBell } from "react-icons/hi2";
import { SlUser } from "react-icons/sl";

export const IconName = {
  user: "user",
  trash: "trash",
  edit: "edit",
  menu: "menu",
  menu_fold: "menu_fold",
  menu_unfold: "menu_unfold",
  notification: "notification"
};

interface Props {
  name: keyof typeof IconName | string;
  size?: number | string;
  color?: string;
  className?: string;
  style?: CSSProperties;
  title?: string;
  onClick?: () => void;
}

export const Icon = (props: Props) => {
  console.log(typeof props)
  const { name, className, onClick } = props;
  const iconStyle = `icon box-with-shadow ${className}`;
  return (
    <div onClick={onClick}>
      {name === IconName.user && <SlUser className={iconStyle} {...props} />}
      {name === IconName.edit && <BiEdit className={iconStyle} {...props} />}
      {name === IconName.trash && <BiTrashAlt className={iconStyle} {...props} />}
      {name === IconName.menu && <AiOutlineMenu className={iconStyle} {...props} />}
      {name === IconName.menu_fold && <AiOutlineMenuUnfold className={iconStyle} {...props} />}
      {name === IconName.menu_unfold && <AiOutlineMenuFold className={iconStyle} {...props} />}
      {name === IconName.notification && <HiOutlineBell className={iconStyle} {...props} />}
    </div>
  );
};
