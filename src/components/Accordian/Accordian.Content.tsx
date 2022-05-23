import React from "react";
import classNames from "classnames";
import { useAccordian } from "./AccordianContext";
import styles from "./Accordian.module.scss";

/** The props used for the {@link Content} component. */
interface ContentProps extends React.ComponentProps<"div"> {}

/** A component that contains the content for an {@link Accordian} component. */
const Content: React.FC<ContentProps> = ({ children, className, ...props }) => {
  // Get the state of the accordian and the actions to operate on it.
  const { toggled } = useAccordian();

  // We return a component that should be rendered conditionally based on the toggled state.
  return (
    <div
      className={classNames(styles.content, className, {
        [styles.toggled]: toggled,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Content;
export type { ContentProps };
