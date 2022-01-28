import styled from "styled-components";
export const CheckBoxWrapper = styled.div`
  position: relative;
  margin: 0px 0px 0px 8px;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 20px;
  border-radius: 15px;
  background: var(--color-success);
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 1px;
    background: #ffffff;
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 38px;
  height: 20px;
  &:checked + ${CheckBoxLabel} {
    background: var(--color-success);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
