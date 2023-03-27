import { useState } from "react";
import { Link } from "react-router-dom";

export default ({
  link,
  text,
  colorText,
  colorbg1,
  colorbg2,
  padding="",
  paddingbot=""
}: {
  link: string;
  text: string;
  colorText?: string;
  colorbg1?: string;
  colorbg2?: string;
    padding?: string;
    paddingbot?: string;
}) => {

    return (
      <div className="relative mx-1 flex flex-col">
        <Link
          to={link}
          className={` peer flex flex-col ${padding} ${paddingbot} ${colorText}`}
        >
          {text}
        </Link>
        <span className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-y-50 scale-x-0 ${colorbg2} duration-200 peer-hover:scale-x-100 ${colorbg1}`}></span>
      </div>
    );

};