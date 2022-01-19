import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  z-index: 1;
`;

export const Button = styled.button<{ active?: boolean }>`
  background-color: ${(props) =>
    props.active ? props.theme.colors.grayDarker : props.theme.colors.gray};
  outline: none;
  border-radius: 8px;
  color: black;
  text-align: center;
  text-transform: capitalize;
  height: 40px;
  border: none;
  padding: 10px 16px;
  margin-top: 15px;
  margin-right: 5px;
  cursor: pointer;
  font-size: 12px;

  transition: all 200ms ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.grayDarker};
  }
`;

export const Dropdown = styled.div<{ active?: boolean }>`
  background-color: #fff;
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  margin-top: 15px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  position: absolute;
  min-width: 130px;
`;
