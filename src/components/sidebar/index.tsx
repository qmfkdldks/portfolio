import React from "react";
import {
  Container,
  Button,
  ButtonRight,
  Menu,
  Dropdown,
  DropdownItem,
  ButtonDropdown,
  Name,
  Right,
  Left
} from "./style";
import useDropdown from "../../hooks/useDropdown";
import { useBreakpoint } from "styled-breakpoints/react-styled";
import { up } from "styled-breakpoints";

const Sidebar: React.FunctionComponent = () => {
  const [openDropdown, setOpenDropDown, containerRef] = useDropdown();

  const isDesktop = useBreakpoint(up("md"));
  console.log({ isDesktop });
  return (
    <Container>
      <Left id="left-navbar-items">
        <Button to="/">
          <Name>Brian Kang</Name>
        </Button>
      </Left>
      <Right ref={containerRef}>
        {!isDesktop && (
          <>
            <ButtonRight id="menuButton" active={openDropdown}>
              <Menu
                onClick={() => {
                  setOpenDropDown(!openDropdown);
                }}
              />
            </ButtonRight>
            <Dropdown id="dropdown" active={openDropdown}>
              <DropdownItem>
                <ButtonDropdown to="/posts">Posts</ButtonDropdown>
              </DropdownItem>
            </Dropdown>
          </>
        )}
        {isDesktop && <Button to="/posts">Posts</Button>}
      </Right>
    </Container>
  );
};

export default Sidebar;
