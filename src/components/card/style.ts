import styled from "styled-components";

export const Shadow = styled.div`
  opacity: 0;
  width: 230px;
  height: 230px;
  border-radius: 8px;
  color: #fff;
  transition: all 300ms ease;

  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  background: linear-gradient(
    180deg,
    transparent 62%,
    rgba(0, 0, 0, 0.00345888) 63.94%,
    rgba(0, 0, 0, 0.014204) 65.89%,
    rgba(0, 0, 0, 0.0326639) 67.83%,
    rgba(0, 0, 0, 0.0589645) 69.78%,
    rgba(0, 0, 0, 0.0927099) 71.72%,
    rgba(0, 0, 0, 0.132754) 73.67%,
    rgba(0, 0, 0, 0.177076) 75.61%,
    rgba(0, 0, 0, 0.222924) 77.56%,
    rgba(0, 0, 0, 0.267246) 79.5%,
    rgba(0, 0, 0, 0.30729) 81.44%,
    rgba(0, 0, 0, 0.341035) 83.39%,
    rgba(0, 0, 0, 0.367336) 85.33%,
    rgba(0, 0, 0, 0.385796) 87.28%,
    rgba(0, 0, 0, 0.396541) 89.22%,
    rgba(0, 0, 0, 0.4) 91.17%
  );
`;

export const Container = styled.div<{ imgSrc: string }>`
  width: 230px;
  height: 230px;
  border-radius: 8px;
  box-shadow: 0.9px 0.9px 2.7px rgba(0, 0, 0, 0.022),
    2.2px 2.3px 6.9px rgba(0, 0, 0, 0.031),
    4.4px 4.8px 14.2px rgba(0, 0, 0, 0.039),
    9.1px 9.9px 29.2px rgba(0, 0, 0, 0.048), 25px 27px 80px rgba(0, 0, 0, 0.07);

  background-image: url(${(props) => props.imgSrc});

  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale3d(1.05, 1.05, 1.05);
    background-color: red;
  }

  &:hover ${Shadow} {
    opacity: 1;
  }
`;

export const Title = styled.h4``;

export const Description = styled.p`
  font-size: 10px;
`;
