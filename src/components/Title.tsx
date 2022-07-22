import styled from "styled-components";

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return <StyledTitle>{title}</StyledTitle>;
}

const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  font-size: 32px;
  margin: 0;
  margin-bottom: 20px;
`;
