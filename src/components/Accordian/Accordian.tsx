import React from "react";
// TODO: Reimplement use controllable state.
// import { useControllableState } from "hooks";
import Content from "./Accordian.Content";
import Header from "./Accordian.Header";
import Toggler from "./Accordian.Toggler";
import AccordianContext from "./AccordianContext";

/** The props used for the {@link Accordian} component. */
interface AccordianProps {
  /** Whether the accordian is toggled. If not specified, the component is uncontrolled. */
  toggled?: boolean;
  /** Whether the accordian is toggled initially. Used for uncontrolled components and their initial state. */
  initialToggled?: boolean;
  /** The event handler that is called whenever the toggle state of the accordian changes. */
  onToggle?: (toggled: boolean) => void;

  children?: React.ReactNode;
}

/**
 * Defines the composition of the compound {@link Accordian} component.
 * @borrows Header as Header
 * @borrows Content as Content
 * @borrows Toggler as Toggler
 */
interface AccordianComposition {
  Header: typeof Header;
  Content: typeof Content;
  Toggler: typeof Toggler;
}

/**
 * A component that renders a toggleable accordian element. The header of this element is always visible while the
 * content of the element is visible only if the accordian is toggled. The toggle element should always be contained in
 * the header of the accordian and will toggle the accordian's state.
 *
 * This component has an optionally controlled toggle state that controls whether the accordian content is visible.
 * @example
 * ```jsx
 * <Accordian>
 *  <Accordian.Header>
 *   My Accordian <!-- This text is always visible. -->
 *   <Accordian.Toggle caret />
 *  </Accordian.Header>
 *  <Accordian.Content>
 *   My accordian has some content. <!-- This text is only visible when the accordian is toggled. -->
 *  </Accordian.Content>
 * </Accordian>
 * ```
 */
const Accordian: React.FC<AccordianProps> & AccordianComposition = ({
  toggled = false,
  initialToggled = true,
  onToggle,
  children,
  ...props
}) => {
  // We use an optionally controlled toggled state.

  // We wrap the child elements in an accordian context to provide the accordian functionality.
  return (
    <AccordianContext.Provider
      value={{ toggled: toggled, setToggled: () => {} }}
    >
      {children}
    </AccordianContext.Provider>
  );
};
Accordian.Content = Content;
Accordian.Header = Header;
Accordian.Toggler = Toggler;

export default Accordian;
export type { AccordianProps };
