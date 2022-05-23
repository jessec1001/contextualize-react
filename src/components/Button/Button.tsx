import React from "react";
import classNames from "classnames";
import type { Colors } from "types";
import styles from "./Button.module.scss";
import baseStyles from "./ButtonBase.module.scss";
import "styles/globals.module.scss";
import "styles/reset.module.scss";
import fgStyles from "styles/foreground.module.scss";
import bgStyles from "styles/background.module.scss";

/** The props used for the {@link Button} component. */
interface ButtonProps extends React.ComponentProps<"button"> {
  /** The color of the button. Defaults to primary. */
  color?: Colors;
  /** Whether the button should be rendered as an outline. Defaults to false. */
  outline?: boolean;
  /** The sizing of the butotn. */
  sizing?: "normal" | "bulky";
}

/** A simple button component that is filled visually. */
const Button: React.FC<ButtonProps> = ({
  type = "button",
  color = "primary",
  outline = false,
  sizing = "normal",
  children,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      className={classNames(
        baseStyles.button,
        styles.button,
        {
          [styles.outline]: outline,
          [styles.bulky]: sizing === "bulky",
          [fgStyles[color]]: outline,
          [bgStyles[color]]: !outline,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
export type { ButtonProps };
