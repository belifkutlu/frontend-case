import styled, { css } from "styled-components";

type Props = {
  title: string;
  bgColor?: "red" | "gray" | "transparent";
  onClick: () => void;
  disabled?: boolean;
};

export default function Button({
  title,
  onClick,
  bgColor = "gray",
  disabled,
}: Props) {
  return (
    <StyledButton bgColor={bgColor} onClick={onClick} disabled={disabled}>
      {title}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ bgColor: string }>`
  border-radius: 12px;
  height: 55px;
  width: 100%;
  border: none;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 700;
  ${(props) =>
    props.bgColor === "transparent" &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.red};
      border: 1px solid ${({ theme }) => theme.colors.red};
    `}
`;
