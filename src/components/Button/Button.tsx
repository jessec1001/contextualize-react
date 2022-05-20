import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
}
const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};

export default Button;
export type { ButtonProps };
