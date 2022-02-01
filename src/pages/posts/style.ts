import styled from "styled-components";
import {down, up, between } from "styled-breakpoints";

export const Container = styled.div`
  padding: 20px 15px 0;
  ${up("md")} {
    padding: 60px 50px 0;
  }
`;

export const Header = styled.h1`
  font-size: 45px;
  margin-bottom: 0px;
`;

export const YearContainer = styled.div`
  width: 100%;
  display: block;
  border-bottom: 1px solid #e8e8e9;
  margin-top: 60px;
  
  ${up("md")} {
    display: flex;
  }
`;

export const LeftContainer = styled.div`
  color: #19192780;
  font-size: 20px;
  width: 50%;
  margin-bottom: 10px;
`;

export const RightContainer = styled.div`
  width: 100%;

  ${up("md")} {
    width: 50%;
    padding: 0 14px;
  }
`;

export const Post = styled.div`
  font-size: 17px;
  color: #191927cf;
  margin-bottom: 40px;

a {
  text-decoration: none;
}
`;

export const PostTitle = styled.div`
  font-weight: bold;
  margin-bottom: 3px;
`