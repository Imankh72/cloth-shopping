import styled from "styled-components";

const CustomButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default CustomButton;

const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  background-color: ${(p) =>
    p.google ? "var(--color-google-blue)" : "var(--color-black)"};
  color: var(--color-white);
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 4px;

  &:hover {
    background-color: var(--color-white);
    color: ${(p) =>
      p.google ? "var(--color-google-blue)" : "var(--color-black)"};
    outline: 1px solid
      ${(p) => (p.google ? "var(--color-google-blue)" : "var(--color-black)")};
  }
`;
