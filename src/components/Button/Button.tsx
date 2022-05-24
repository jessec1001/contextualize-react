/**
 * @file Defines the see {@link Button} component.
 * @copyright Contextualize LLC. 2022
 */

import classNames from "classnames";
import React from "react";
import type { Colors } from "types";
import styles from "./Button.module.scss";
import fgStyles from "styles/foreground.module.scss";
import bgStyles from "styles/background.module.scss";

/** The props used for the {@link Button} component. */
interface ButtonProps extends React.ComponentProps<"button"> {
  /**
   * The color of the button.
   * @default "primary"
   */
  color?: Colors;
  /**
   * The shape of the edges of the button.
   * @default "rounded"
   */
  shape?: "rectangle" | "rounded" | "pill" | "circle";
  /**
   * The variant of the button style to use.
   *
   * - "fill": The background of the button is filled with the button color.
   * - "ghost": The background of the button is transparent and the border and text are filled with the button color.
   * - "outline": The background of the button is transparent and the text is filled with the button color.
   * @default "fill"
   */
  variant?: "fill" | "ghost" | "text";
  /**
   * Whether the button should appear to be elevated.
   * @default true
   */
  elevated?: boolean;
  /**
   * Whether the button should have a fixed width across all buttons.
   * If fixed, a button will take up a width in [4em, 8em] up to 25% if possible.
   * @default true
   */
  fixed?: boolean;
}

/**
 * A simple button component that is filled visually.
 * @since 1.0.1
 */
const Button: React.FC<ButtonProps> = ({
  type = "button",
  color = "primary",
  shape = "pill",
  variant = "fill",
  elevated = true,
  fixed = true,
  children,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      className={classNames(
        styles.button,
        styles[`shape-${shape}`],
        styles[`variant-${variant}`],
        {
          [fgStyles[color]]: variant !== "fill",
          [bgStyles[color]]: variant === "fill",
          [styles.elevated]: elevated,
          [styles.fixed]: fixed,
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
