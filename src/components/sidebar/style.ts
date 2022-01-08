import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "@styled-icons/heroicons-outline/Menu";
import { up } from "styled-breakpoints";

export const Container = styled.div`
  margin: 20px 15px;
  display: flex;
  justify-content: space-between;

  ${up("md")} {
    margin: 20px 50px;
  }
`;

export const Name = styled.h3``;

export const Button = styled(Link)`
  border-radius: 8px;
  color: black;
  height: 30px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 200ms ease;
  white-space: nowrap;
  font-weight: bold;

  display: flex;
  align-items: center;
`;

export const ButtonRight = styled.button<{ active: boolean }>`
  border-radius: 8px;
  height: 30px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 200ms ease;
  white-space: nowrap;
  background: none;
  padding: 0;

  align-items: center;
  justify-self: center;
`;

export const ButtonDropdown = styled(Link)`
  border-radius: 8px;
  height: 30px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 200ms ease;
  white-space: nowrap;
  font-weight: bold;

  display: flex;
  align-items: center;
  
`;

const Icon = css`
  margin-right: 5px;
`;

export const Menu = styled(MenuIcon)`
  ${Icon};
  width: 25px;
`;
export const Dropdown = styled.div<{ active: boolean }>`
  min-width: 250px;
  height: auto;
  padding: 20px 10px;
  display: ${(props) => (props.active ? "flex" : "none")};
  background-color: #fff;
  border-radius: 8px;
  flex-direction: column;
  position: absolute;
  right: 0px;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  z-index: 3;
`;

export const DropdownDown = styled.div`
  width: 100%;
  background-color: #fff;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #e7e7e9;
  font-size: 13px;
`;

export const DropdownItem = styled.a`
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
`;

export const Right = styled.div`
  display: inline-block; 
  position: relative;
`;

