import React from "react";
import classNames from "classnames";
import styles from "./Accordian.module.scss";

/** The props used for the {@link Header} component. */
interface HeaderProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
}

/** The header for an accordian. */
const Header: React.FC<HeaderProps> = ({ children, className, ...props }) => {
  return (
    <div className={classNames(styles.header, className)} {...props}>
      {children}
    </div>
  );
};

export default Header;
export type { HeaderProps };
