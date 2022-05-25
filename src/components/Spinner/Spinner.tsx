/**
 * @file Defines the see {@link Spinner} component.
 * @copyright Contextualize LLC. 2022
 */

import classNames from "classnames";
import React from "react";
import styles from "./Spinner.module.scss";

/** The props used for the {@link Spinner} component. */
interface SpinnerProps extends React.ComponentProps<"svg"> {
  /**
   * The value of the spinner.
   * Controls the angle of the spinner.
   * If not set, the spinner will be indeterminate.
   * @default undefined
   */
  value?: number;
  /**
   * The minimum value of the spinner.
   * @default 0
   */
  min?: number;
  /**
   * The maximum value of the spinner.
   * @default 100
   */
  max?: number;

  /**
   * Whether the spinner should have separation padding on the sides.
   * @default false
   */
  padded?: boolean;
}

/**
 * A component that renders a spinning circle to indicate progress or loading.
 * The color of this spinner matches the color of its parent by default.
 * @since 1.0.4
 */
const Spinner: React.FC<SpinnerProps> = ({
  value = undefined,
  min = 0,
  max = 100,
  padded = false,
  className,
  ...props
}) => {
  // By default, if indeterminate, use a 3/4 filled arc.
  const progress = value
    ? (2 * Math.PI * (value - min)) / (max - min)
    : (3 * Math.PI) / 2;
  return (
    <svg
      viewBox="-16 -16 32 32"
      className={classNames(
        styles.spinner,
        { [styles.padded]: padded },
        className
      )}
      data-value={value}
      {...props}
    >
      <path
        d={computeSpinnerPath(14, 0, progress)}
        className={styles.spinnerPath}
      />
    </svg>
  );
};

/**
 * Computes the Cartesian coordinates of a point on a circle.
 * @param radius The radius of the circle.
 * @param angle The angle of the point.
 * @returns The Cartesian coordinates of the point.
 */
const computeCartesian = (radius: number, angle: number) => {
  // We want spinners to start at the top of the circle and go clockwise.
  angle = angle - Math.PI / 2;
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
};
/**
 * Computes the SVG path data of an arc.
 * @param radius The radius of the arc.
 * @param startAngle The start angle of the arc.
 * @param endAngle The end angle of the arc.
 * @returns The SVG path data of the arc.
 */
const computeSpinnerPath = (
  radius: number,
  startAngle: number,
  endAngle: number
): string => {
  const start = computeCartesian(radius, endAngle);
  const end = computeCartesian(radius, startAngle);
  const largeArc = endAngle - startAngle <= Math.PI ? 0 : 1;
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y}`;
};

export default Spinner;
export type { SpinnerProps };
