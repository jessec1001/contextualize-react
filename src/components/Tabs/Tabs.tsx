// import React from "react";
// import { useControllableState } from "hooks";
// import Area from "./Tabs.Area";
// import Bar from "./Tabs.Bar";
// import Panel from "./Tabs.Panel";
// import Tab from "./Tabs.Tab";
// import TabsContext from "./TabsContext";

// /** The props used for the {@link Tabs} component. */
// interface TabsProps {
//   /** The currently active tab of the tabs. If not specified, the component is uncontrolled. */
//   activeTab?: string | number | null;
//   /** The initially active tab of the tabs. Used for uncontrolled components for setting the initial state. */
//   initialTab?: string | number | null;

//   /** Whether tabs in the tab bar should be draggable. */
//   draggableTabs?: boolean;

//   /** The event handler that is called whenever the active tab changes. */
//   onChangeTab?: (tab: string | number | null) => void;
//   /** The event handler that is called whenever a tab is dragged to another position. */
//   onDragTab?: (
//     source: string | number | null,
//     target: string | number | null
//   ) => void;
// }
// /** The props used for the {@link Area} component. */
// interface TabsAreaProps {
//   /** The direction that the tab area should stretch. */
//   direction: "horizontal" | "vertical";
//   /** Whether the tabs area should be stretched inside of a flexbox. */
//   flex?: boolean;
// }
// /** The props used for the {@link Panel} component. */
// interface PanelProps {
//   /** The unique identifier of the tab that this component corresponds to. */
//   id: string | number;
// }
// /**
//  * The props used for the {@link Tab} component.
//  */
// interface TabProps {
//   /** The unique identifier of the tab that this component corresponds to. */
//   id: string | number;

//   /** The status indicator used to decorate the tab navigation bar. */
//   status?: "none" | "modified" | "unmodified" | "info" | "warning" | "error";

//   /** Whether the tab is closeable by the user. */
//   closeable?: boolean;

//   /** The event handler for when the tab has requested to close. */
//   onClose?: () => void;
//   /** The event handler for when the tab has been focused. */
//   onFocus?: () => void;
// }

// /**
//  * Defines the composition of the compound {@link Tabs} component.
//  * @borrows Area as Area
//  * @borrows Bar as Bar
//  * @borrows Tab as Tab
//  * @borrows Panel as Panel
//  */
// interface TabsComposition {
//   Area: typeof Area;
//   Bar: typeof Bar;
//   Tab: typeof Tab;
//   Panel: typeof Panel;
// }

// /**
//  * A component that renders a tabbed environment by the use of tabs and panels. The tabs can be placed inside of a
//  * standard tab bar for easy navigation. Each tab and each panel has an associated identifier. This identifier is used
//  * to determine the currently active tab. There may only be a single or no active tab and its corresponding panel is the
//  * only panel that will be rendered.
//  *
//  * This component has an optionally controlled active tab state that can be specified.
//  * @example
//  * ```jsx
//  * <Tabs>
//  *   <Tabs.Area direction="horizontal">
//  *     <Tabs.Bar>
//  *       <Tabs.Tab id={1} title={"First Tab"} />
//  *       <Tabs.Tab id={2} title={"Second Tab"} color="error" />
//  *     </TabBar>
//  *     <Tabs.Panel id={1}>
//  *       This content displays when the first tab is active.
//  *     </Tabs>
//  *     <Tabs.Panel id={2}>
//  *       This content displays when the second tab is active.
//  *     </Tabs>
//  *   </Tabs.Area>
//  * </Tabs>
//  * ```
//  */
// const Tabs: React.FC<TabsProps> & TabsComposition = ({
//   activeTab,
//   initialTab = null,
//   draggableTabs = false,
//   onChangeTab = () => {},
//   onDragTab = () => {},
//   children,
//   ...props
// }) => {
//   // We use an optionally controlled active tab.
//   const [actualActiveTab, setActiveTab] = useControllableState(
//     initialTab,
//     activeTab,
//     onChangeTab
//   );

//   // We store some information about the source and target of dragging.
//   const [dragSource, setDragSource] = useState<string | number | null>(null);
//   const [dragTarget, setDragTarget] = useState<string | number | null>(null);
//   const handleDrag = () => {
//     onDragTab(dragSource, dragTarget);
//     setDragSource(null);
//     setDragTarget(null);
//   };

//   // We wrap the child elements in a tabs context to provide the tabs functionality.
//   return (
//     <TabsContext.Provider
//       value={{
//         draggableTabs: draggableTabs,
//         dragSource: dragSource,
//         dragTarget: dragTarget,
//         setDragSource: setDragSource,
//         setDragTarget: setDragTarget,
//         finishDrag: handleDrag,

//         activeTab: actualActiveTab,
//         setActiveTab: setActiveTab,
//       }}
//     >
//       {children}
//     </TabsContext.Provider>
//   );
// };

// /** A component that renders a tab within a tab container with specified properties on the tab button. */
// const Tab: FunctionComponent<Modify<HTMLAttributes<HTMLDivElement>, TabProps>> =
//   ({
//     id,
//     status,
//     closeable,
//     onClose = () => {},
//     onFocus = () => {},
//     onClick = () => {},
//     onDragStart = () => {},
//     onDragEnd = () => {},
//     onDragOver = () => {},
//     children,
//     ...props
//   }) => {
//     // We use the state of the tabs context to perform some rendering and functions of this component.
//     const {
//       draggableTabs,
//       setDragSource,
//       setDragTarget,
//       finishDrag,
//       dragTarget,
//       activeTab,
//       actions: tabActions,
//     } = useTabs();

//     // These event handlers update the tab state while emitting relevant events.
//     const handleFocus = (event: React.MouseEvent<HTMLDivElement>) => {
//       tabActions.set(id);
//       onClick(event);
//       onFocus();
//     };
//     const handleClose = (event: React.MouseEvent) => {
//       if (activeTab === id) tabActions.clear();
//       onClose();
//       event.stopPropagation();
//     };

//     // These event handlers deal with dragging the tab.
//     const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
//       if (!draggableTabs) return;

//       // Add data to the drag event for the tab.
//       event.dataTransfer.setData("text/json+tab", JSON.stringify(id));
//       event.dataTransfer.effectAllowed = "move";
//       setDragSource(id);

//       // Emit the drag start event.
//       onDragStart(event);
//     };
//     const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
//       if (!draggableTabs) return;
//       finishDrag();

//       // Emit the drag end event.
//       onDragEnd(event);
//     };
//     const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//       if (!draggableTabs) return;

//       // Prevent the propagation of the drag event so that the tab bar does not become the drag target.
//       event.stopPropagation();
//       setDragTarget(id);

//       // Emit the drag over event.
//       onDragOver(event);
//     };

//     // How to deal with tab dragging?
//     // When dragging over a tab, the tab will be moved to either the left or right of the tab.
//     // When dragging over the tab bar, the tab will be moved to the end of the tab bar.

//     return (
//       <div
//         className={classNames("Tab", `status-${status}`, {
//           active: activeTab === id,
//           closeable: closeable,
//           drag: draggableTabs && dragTarget === id,
//         })}
//         draggable={draggableTabs}
//         onClick={handleFocus}
//         onDragStart={handleDragStart}
//         onDragEnd={handleDragEnd}
//         onDragOver={handleDragOver}
//         {...props}
//       >
//         <div className="Tab-Content">{children}</div>
//         {closeable && <CloseButton onClick={handleClose} />}
//       </div>
//     );
//   };

// /** A component that contains the content for a tab. */
// const Panel: FunctionComponent<PanelProps> = ({ id, children }) => {
//   // Get the state of the tabs and check if this is the active tab.
//   const { activeTab } = useTabs();
//   const currentTab = activeTab === id;

//   // We return a component that should be rendered conditionally based on the active tab.
//   return (
//     <div className={classNames("TabPanel", { hidden: !currentTab })}>
//       {children}
//     </div>
//   );
// };

// /** The bar containing interactive tab bar buttons. */
// const Bar: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
//   children,
//   onDragOver = () => {},
//   onMouseOut = () => {},
//   ...props
// }) => {
//   // We use the state of the tabs context to perform some rendering and functions of this component.
//   const { draggableTabs, setDragTarget, dragSource, dragTarget } = useTabs();

//   // These event handlers deal with dragging the tab.
//   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     if (!draggableTabs) return;
//     if (event.dataTransfer.types.includes("text/json+tab")) setDragTarget(null);

//     // Emit the drag over event.
//     onDragOver(event);
//   };

//   return (
//     <div
//       className={classNames("TabBar", {
//         drag: draggableTabs && dragSource !== null && dragTarget === null,
//       })}
//       onDragOver={handleDragOver}
//       {...props}
//     >
//       <div className="TabBar-Wrapper">{children}</div>
//     </div>
//   );
// };

// /** The area component containing all relevant tab components. */
// const Area: FunctionComponent<
//   Modify<HTMLAttributes<HTMLDivElement>, AreaProps>
// > = ({ direction, flex, children, ...props }) => {
//   return (
//     <div className={classNames("TabArea", direction, { flex })} {...props}>
//       {children}
//     </div>
//   );
// };
// Tabs.Area = Area;
// Tabs.Bar = Bar;
// Tabs.Tab = Tab;
// Tabs.Panel = Panel;

// export default Tabs;
// export type { TabsProps, TabsComposition };
