import React from "react";
import classNames from "classnames";
// TODO: Introduce a caret icon.
// import { CaretIcon } from "components/icons";
import { useAccordian } from "./AccordianContext";
import styles from "./Accordian.module.scss";

/** The props used for the {@link Toggle} component. */
interface ToggleProps extends React.ComponentProps<"button"> {
  /** Whether or not the toggler should include a standard caret icon. */
  caret?: boolean;
}

/** A component that toggles an accordian component and can optionally display as a caret icon. */
const Toggle: React.FC<ToggleProps> = ({
  type = "button",
  caret,
  children,
  className,
  onClick = () => {},
  ...props
}) => {
  // Get the state of the accordian and the actions to operate on it.
  const { toggled, actions } = useAccordian();

  return (
    <button
      type={type}
      className={classNames(styles.toggle, className)}
      onClick={(e) => {
        onClick(e);
        actions.toggle();
      }}
      {...props}
    >
      {/* Render the children of this component normally. */}
      {children}

      {/* TODO: Reimplement. */}
      {/* If the caret flag has been set, we use a caret icon to  */}
      {/* {caret && <CaretIcon direction={toggled ? "down" : "right"} />} */}
    </button>
  );
};

export default Toggle;
export type { ToggleProps };
