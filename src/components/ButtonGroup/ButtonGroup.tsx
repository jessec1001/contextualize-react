import classNames from "classnames";
import React from "react";
import styles from "./ButtonGroup.module.scss";

/** The props used for the {@link ButtonGroup} component. */
interface ButtonGroupProps extends React.ComponentProps<"div"> {
  /**
   * Whether the sides of the buttons should be connected together.
   * @default false
   */
  connected?: boolean;
  /**
   * Whether the button group should stretch to fill its container width.
   * @default true
   */
  stretch?: boolean;
}

/**
 * A component that renders a group of buttons.
 * @since 1.0.2
 */
const ButtonGroup: React.FC<ButtonGroupProps> = ({
  connected = false,
  stretch = true,
  className,
  children,
  ...props
}) => {
  return (
    <div
      role="group"
      className={classNames(
        styles.buttonGroup,
        {
          [styles.connected]: connected,
          [styles.stretch]: stretch,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;
export type { ButtonGroupProps };
