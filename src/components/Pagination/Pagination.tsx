/**
 * @file Defines the see {@link Pagination} component.
 * @copyright Contextualize LLC. 2022
 */

import classNames from "classnames";
import React from "react";
import { Button } from "components";
import { useControllableState } from "hooks";
import styles from "./Pagination.module.scss";

/** The props used for the {@link Pagination} component. */
interface PaginationProps extends React.ComponentProps<"div"> {
  /**
   * Whether the pagination should stretch to fill its container width.
   * @default false
   */
  stretch?: boolean;

  /**
   * Whether to show the previous page button.
   * @default false
   */
  showPrev?: boolean;
  /**
   * Whether to show the next page button.
   * @default false
   */
  showNext?: boolean;
  /**
   * Whether to show the first page button.
   * @default false
   */
  showFirst?: boolean;
  /**
   * Whether to show the last page button.
   * @default false
   */
  showLast?: boolean;

  /**
   * The current page number.
   * @default undefined
   */
  page?: number;
  /**
   * The minimum page number to show.
   * @default 1
   */
  minPage?: number;
  /**
   * The maximum page number to show.
   * @default 1
   */
  maxPage?: number;

  /**
   * The number of pages to display at the extreme ends of the pagination.
   * @default 1
   */
  numberBorderPages?: number;
  /**
   * The number of pages to display on either side of the current page in the pagination.
   * @default 1
   */
  numberNeighborPages?: number;

  /**
   * Custom button props for the current page button.
   * @default
   * {
   *   shape: "circle",
   *   color: "primary",
   *   variant: "ghost",
   *   elevated: false,
   * }
   */
  currentButtonProps?: React.ComponentProps<typeof Button>;
  /**
   * Custom button props for non-current page buttons.
   * @default
   * {
   *   shape: "circle",
   *   color: "normal",
   *   variant: "fill",
   *   elevated: false,
   * }
   */
  noncurrentButtonProps?: React.ComponentProps<typeof Button>;

  /**
   * An event handler that is called when the page is changed.
   * @oaran page The new page number.
   * @default undefined
   */
  onPageChange?: (page: number) => void;
}

/**
 * A component that renders an interactive pagination control.
 * @since 1.0.6
 */
const Pagination: React.FC<PaginationProps> = ({
  stretch = false,
  showPrev = false,
  showNext = false,
  showFirst = false,
  showLast = false,
  page = undefined,
  minPage = 1,
  maxPage = 1,
  numberBorderPages = 1,
  numberNeighborPages = 1,
  currentButtonProps = {
    shape: "circle",
    color: "primary",
    variant: "ghost",
    elevated: false,
  },
  noncurrentButtonProps = {
    shape: "circle",
    color: "normal",
    variant: "fill",
    elevated: false,
  },
  onPageChange = () => {},
  className,
  children,
  ...props
}) => {
  // We optionally allow the page to be controlled by the parent component.
  const [controlledPage, setPage] = useControllableState(1, page, onPageChange);

  // We setup the defaults for the min and max page numbers.
  maxPage = Math.max(minPage, maxPage);
  React.useEffect(() => {
    setPage(Math.min(Math.max(minPage, controlledPage), maxPage));
  }, [minPage, maxPage]);

  // We calculate the pages to display by counting from min to max.
  // We represent a normal page as a number and an ellipsis separator as null.
  const pages: (number | null)[] = [];
  const nearFirst =
    controlledPage - minPage <= numberBorderPages + numberNeighborPages + 1;
  const nearLast =
    maxPage - controlledPage <= numberBorderPages + numberNeighborPages + 1;
  let counting = true;
  for (let k = minPage; k <= maxPage; k++) {
    if (
      (nearFirst &&
        k <= minPage + numberBorderPages + 2 * numberNeighborPages + 1) ||
      (nearLast &&
        k >= maxPage - numberBorderPages - 2 * numberNeighborPages - 1) ||
      Math.min(maxPage - k, k - minPage) < numberBorderPages ||
      Math.abs(k - controlledPage) <= numberNeighborPages
    ) {
      pages.push(k);
      counting = true;
    } else if (counting) {
      pages.push(null);
      counting = false;
    }
  }

  return (
    <div
      className={classNames(
        styles.pagination,
        { [styles.stretch]: stretch },
        className
      )}
      {...props}
    >
      {/* We enable shortcut buttons in the backwards direction when not at a minimum. */}
      {showFirst && (
        <Button
          {...noncurrentButtonProps}
          disabled={controlledPage === minPage}
          onClick={() => setPage(minPage)}
        >
          &lt;&lt;
        </Button>
      )}
      {showPrev && (
        <Button
          {...noncurrentButtonProps}
          disabled={controlledPage === minPage}
          onClick={() => setPage(Math.max(minPage, controlledPage - 1))}
        >
          &lt;
        </Button>
      )}

      {pages.map((pageNumber) => {
        if (pageNumber === null) {
          return <span className={styles.paginationSeparator}>...</span>;
        }
        return (
          <Button
            {...(controlledPage === pageNumber
              ? currentButtonProps
              : noncurrentButtonProps)}
            disabled={controlledPage === pageNumber}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </Button>
        );
      })}

      {/* We enable shortcut buttons in the forwards direction when not at a maximum. */}
      {showNext && (
        <Button
          {...noncurrentButtonProps}
          disabled={controlledPage === maxPage}
          onClick={() => setPage(Math.min(maxPage, controlledPage + 1))}
        >
          &gt;
        </Button>
      )}
      {showLast && (
        <Button
          {...noncurrentButtonProps}
          disabled={controlledPage === maxPage}
          onClick={() => setPage(maxPage)}
        >
          &gt;&gt;
        </Button>
      )}
    </div>
  );
};

export default Pagination;
export type { PaginationProps };
