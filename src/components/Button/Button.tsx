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
   * @default "pill"
   */
  shape?: "rectangle" | "rounded" | "pill" | "square" | "squircle" | "circle";
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
   * The size of the button.
   *
   * - "auto": The button will be sized based on the size of the text.
   * - "half": The button will be sized to be 50% of the width of the container.
   * - "full": The button will be sized to be 100% of the width of the container.
   * @default "auto"
   * @since 1.0.3
   */
  size?: "auto" | "half" | "full";
  /**
   * Whether the button should appear to be elevated.
   * @default true
   */
  elevated?: boolean;
}

/**
 * A component that renders a button with a variety of colors, shapes, and variants.
 * @since 1.0.1
 */
const Button: React.FC<ButtonProps> = ({
  type = "button",
  color = "primary",
  shape = "pill",
  variant = "fill",
  size = "auto",
  elevated = true,
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
        styles[`size-${size}`],
        {
          [fgStyles[`${color}`]]: variant !== "fill",
          [fgStyles[`${color}-dark`]]: variant === "fill",
          [bgStyles[color]]: variant === "fill",
          [styles.elevated]: elevated,
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
