import counterpart from "counterpart";
import { CSSProperties, ReactNode } from "react";

type Args = {
  loading: boolean;
  pageSize: number;
  showSizeChanger?: boolean;
};
export function renderPaginationConfig({
  loading,
  pageSize,
  showSizeChanger = false,
}: Args):
  | false
  | {
      hideOnSinglePage: boolean;
      showSizeChanger: boolean;
      size: string;
      defaultPageSize: number;
      showLessItems: boolean;
      itemRender: (
        _page: number,
        type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
        element: ReactNode
      ) => ReactNode;
    } {
  return !loading
    ? {
        hideOnSinglePage: !showSizeChanger,
        showSizeChanger: showSizeChanger,
        defaultPageSize: pageSize,
        size: "small",
        showLessItems: true,
        itemRender: (
          _page: number,
          type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
          element: ReactNode
        ) => {
          if (type === "prev") {
            return (
              <>
                {" "}
                {_page > 0 ? (
                  <a
                    style={
                      {
                        marginRight: "8px",
                      } as CSSProperties
                    }
                  >
                    {counterpart.translate(`buttons.previous`)}
                  </a>
                ) : (
                  ""
                )}
              </>
            );
          }
          if (type === "next") {
            return (
              <a style={{ marginLeft: "8px" } as CSSProperties}>
                {counterpart.translate(`buttons.next`)}
              </a>
            );
          }
          return element;
        },
      }
    : false;
}