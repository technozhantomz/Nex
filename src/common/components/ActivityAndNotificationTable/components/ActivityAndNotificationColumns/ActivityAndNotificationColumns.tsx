import counterpart from "counterpart";

import { ActivityRow } from "../../../../types";
import { TableHeading } from "../../../TableHeading";
import { UserLinkExtractor } from "../../../UserLinkExtractor";
import * as Styled from "../../ActivityAndNotificationTable.styled";
import { ActivityAndNotificationTag } from "../ActivityAndNotificationTag";

export type ActivityAndNotificationType = {
  title: () => JSX.Element;
  dataIndex: string;
  key: string;
  render:
    | ((value: string) => JSX.Element)
    | ((status: boolean, record: any) => JSX.Element)
    | ((status: string, record: any) => JSX.Element)
    | undefined;
  filters:
    | {
        text: string;
        value: string;
      }[]
    | undefined;
  filterMode: string | undefined;
  filterSearch: boolean | undefined;
  onFilter: ((value: string, record: ActivityRow) => boolean) | undefined;
  sorter:
    | ((
        a: {
          time: string;
        },
        b: {
          time: string;
        }
      ) => number)
    | undefined;
};

export const ActivityAndNotificationColumns = (
  isNotificationTab: boolean,
  markTheNotificationAsReadOrUnread: (id: string, unread: boolean) => void
): ActivityAndNotificationType[] => {
  const headings = isNotificationTab
    ? ["time", "translated_type", "info", "id", "fee", "status"]
    : ["time", "translated_type", "info", "id", "fee"];

  const keys = isNotificationTab
    ? ["time", "translatedType", "info", "id", "fee", "status"]
    : ["time", "translatedType", "info", "id", "fee"];

  const renders = isNotificationTab
    ? [
        undefined,
        (_type: string, record: any): JSX.Element => (
          <ActivityAndNotificationTag type={record.type} />
        ),
        (value: string): JSX.Element => (
          <UserLinkExtractor infoString={value} />
        ),
        undefined,
        undefined,
        (status: boolean, record: any): JSX.Element => (
          <>
            {status ? (
              <Styled.NotificationTableStatusButton
                onClick={() =>
                  markTheNotificationAsReadOrUnread(record.id, !status)
                }
              >
                {counterpart.translate(`pages.profile.notification.unread`)}
              </Styled.NotificationTableStatusButton>
            ) : (
              counterpart.translate(`pages.profile.notification.read`)
            )}
          </>
        ),
      ]
    : [
        undefined,
        (_type: string, record: any): JSX.Element => (
          <ActivityAndNotificationTag type={record.type} />
        ),
        (value: string): JSX.Element => (
          <UserLinkExtractor infoString={value} />
        ),
        undefined,
        undefined,
      ];

  const filters = isNotificationTab
    ? [undefined, undefined, undefined, undefined, undefined, undefined]
    : [undefined, undefined, undefined, undefined, undefined];

  const filterModes = isNotificationTab
    ? [undefined, "menu", undefined, undefined, undefined, undefined]
    : [undefined, "menu", undefined, undefined, undefined];

  const filterSearch = isNotificationTab
    ? [undefined, false, undefined, undefined, undefined, undefined]
    : [undefined, false, undefined, undefined, undefined];

  const onFilters = isNotificationTab
    ? [
        undefined,
        (value: string, record: ActivityRow): boolean =>
          record.type.includes(value),
        undefined,
        undefined,
        undefined,
        undefined,
      ]
    : [
        undefined,
        (value: string, record: ActivityRow): boolean =>
          record.type.includes(value),
        undefined,
        undefined,
        undefined,
      ];

  const sorters = isNotificationTab
    ? [
        (a: { time: string }, b: { time: string }) =>
          new Date(a.time).getTime() - new Date(b.time).getTime(),
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ]
    : [
        (a: { time: string }, b: { time: string }) =>
          new Date(a.time).getTime() - new Date(b.time).getTime(),
        undefined,
        undefined,
        undefined,
        undefined,
      ];

  return headings.map((heading, index) => {
    return {
      title: (): JSX.Element => <TableHeading heading={heading} />,
      dataIndex: keys[index],
      key: keys[index],
      render: renders[index],
      filters: filters[index],
      filterMode: filterModes[index],
      filterSearch: filterSearch[index],
      onFilter: onFilters[index],
      sorter: sorters[index],
    };
  });
};
