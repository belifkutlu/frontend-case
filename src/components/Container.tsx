import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;
