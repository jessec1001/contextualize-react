/**
 * @file Defines the see {@link Box} component.
 * @copyright Contextualize LLC. 2022
 */

import classNames from "classnames";
import React from "react";
import type { Colors } from "types";
import styles from "./Box.module.scss";
import fgStyles from "styles/foreground.module.scss";
import bgStyles from "styles/background.module.scss";

/** The props used for the {@link Box} component. */
interface BoxProps extends React.ComponentProps<"div"> {
  /**
   * The color of the box.
   * @default "primary"
   */
  color?: Colors;

  /**
   * The type of accent to apply to the side of the box to distinguish it from surrounding content.
   * @default "none"
   */
  accent?: "none" | "solid" | "dashed" | "dotted";
  /**
   * The shape of the edges of the box.
   * If the box has an accent, the accent side will not be rounded.
   * @default "rectangle"
   */
  shape?: "rectangle" | "rounded";
  /**
   * Whether the box should appear to be elevated.
   * @default true
   */
  elevated?: boolean;
}

/**
 * A component that renders its children in a box with a variety of colors.
 * @since 1.0.5
 */
const Box: React.FC<BoxProps> = ({
  color = "primary",
  accent = "none",
  shape = "rounded",
  elevated = true,
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames(
        styles.box,
        styles[`accent-${accent}`],
        styles[`shape-${shape}`],
        { [styles.elevated]: elevated },
        bgStyles[`${color}-light`],
        fgStyles[`${color}-dark`],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
export type { BoxProps };
