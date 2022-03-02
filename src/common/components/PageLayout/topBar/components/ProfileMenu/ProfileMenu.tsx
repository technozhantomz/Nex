import {
  Card,
  PoweroffOutlined,
  SettingOutlined,
} from "../../../../../../ui/src";
import { breakpoints } from "../../../../../../ui/src/breakpoints";
import { Contacts, Vote } from "../../../../../../ui/src/icons";
import { useUserContext } from "../../../../UserProvider/UserProvider";
import { useViewportContext } from "../../../../ViewportProvider";
import { MenuItem } from "../MenuItem";

import * as Styled from "./ProfileMenu.styled";

const { Meta } = Card;

export const ProfileMenu = (): JSX.Element => {
  const { localStorageAccount } = useUserContext();
  const { width } = useViewportContext();

  return (
    <Styled.ProfileMenu bordered={false}>
      <Meta
        avatar={
          <Styled.ProfileAvitar>
            {localStorageAccount?.charAt(0)}
          </Styled.ProfileAvitar>
        }
        title={`Hello ${localStorageAccount}!`}
        description={`@${localStorageAccount}`}
      />
      <ul>
        {width < breakpoints.xs ? (
          <>
            <li>
              <MenuItem
                Href="/voting"
                Icon={<Vote className={"menu-icon"} />}
                Label="Voting"
              />
            </li>
            <li>
              <MenuItem
                Href="/contacts"
                Icon={<Contacts className={"menu-icon"} />}
                Label="Contacts"
              />
            </li>
          </>
        ) : (
          <li className={"link"}>
            <a>See all account activity</a>
          </li>
        )}

        <li>
          <MenuItem
            Href="/settings"
            Icon={<SettingOutlined className={"menu-icon"} />}
            Label="Settings"
          />
        </li>
        {width < breakpoints.xs ? (
          <li className={"link"}>
            <a>See all account activity</a>
          </li>
        ) : (
          " "
        )}
        <li className={"logout"}>
          <MenuItem
            Href="/logout"
            Icon={<PoweroffOutlined className={"menu-icon"} />}
            Label="Logout"
          />
        </li>
      </ul>
    </Styled.ProfileMenu>
  );
};
