import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: 3rem;
`;

export const List = styled.ul`
  font-size: 2rem;
  font-weight: 400;
  text-align: left;
`;
export const Item = styled.li`
  list-style-type: none;
  padding: 2px;
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`;
