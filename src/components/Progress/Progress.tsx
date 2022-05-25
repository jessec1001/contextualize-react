/**
 * @file Defines the see {@link Progress} component.
 * @copyright Contextualize LLC. 2022
 */

import classNames from "classnames";
import React from "react";
import type { Colors } from "types";
import styles from "./Progress.module.scss";
import bgStyles from "styles/background.module.scss";

/** The props used for the {@link Progress} component. */
interface ProgressProps extends React.ComponentProps<"div"> {
  /**
   * The value of the progress bar.
   * Controls the width of the progress bar.
   * If not set, the progress bar will be indeterminate.
   * @default undefined
   */
  value?: number;
  /**
   * The minimum value of the progress bar.
   * @default 0
   */
  min?: number;
  /**
   * The maximum value of the progress bar.
   * @default 100
   */
  max?: number;

  /**
   * The color of the progress bar.
   * @default "primary"
   */
  color?: Colors;
  /**
   * The shape of the edges of the progress bar.
   * @default "pill"
   */
  shape?: "rectangle" | "rounded" | "pill";
  /**
   * Whether the progress bar should appear to be elevated.
   * @default true
   */
  elevated?: boolean;
  /**
   * Whether the progress bar should be animated with a sliding motion.
   * @default false
   */
  animated?: boolean;
  /**
   * Whether the progress bar should be disabled.
   * @default false
   */
  disabled?: boolean;
}

/**
 * A component that displays an animatable progress bar with a variety of colors.
 * @since 1.0.3
 */
const Progress: React.FC<ProgressProps> = ({
  value = undefined,
  min = 0,
  max = 100,
  color = "primary",
  shape = "pill",
  elevated = true,
  animated = false,
  disabled = false,
  children,
  className,
  style,
  ...props
}) => {
  const progress = value && (value - min) / (max - min);
  return (
    <div
      style={{ ["--progress" as any]: progress, ...style }}
      className={classNames(
        styles.progress,
        styles[`shape-${shape}`],
        {
          [styles.animated]: animated,
          [styles.elevated]: elevated,
          [styles.disabled]: disabled,
        },
        className
      )}
      data-value={progress}
      {...props}
    >
      <div
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        role="progressbar"
        className={classNames(styles.progressInternal, bgStyles[color])}
      />
    </div>
  );
};

export default Progress;
export type { ProgressProps };
