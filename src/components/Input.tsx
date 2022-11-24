import { FunctionComponent } from "react";
import styles from "./Input.module.css";

type InputType = {
  placeholder?: string;
};

const Input: FunctionComponent<InputType> = ({ placeholder = "sup" }) => {
  return (
    <div className={styles.frameDiv}>
      <div className={styles.yourNameDiv}>{placeholder}</div>
    </div>
  );
};

export default Input;
