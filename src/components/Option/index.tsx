import React from "react";
import styles from "./option.module.scss";

type OptionType = {
  children: string;
  veracity: boolean;
  hide: boolean;
  openVeracity: (text: string) => void;
  disabled: boolean;
};

const Option: React.FC<OptionType> = ({
  children,
  veracity,
  hide,
  openVeracity,
  disabled
}) => {

  const onClickOption = () => {
    openVeracity(children);
  };

  return (
    <button
      disabled={disabled}
      onClick={onClickOption}
      className={`${styles.option} ${hide ? "" : styles[String(veracity)]}`}
    >
      {children}
    </button>
  );
};

export default Option;
