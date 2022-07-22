import styled from "styled-components";

import Title from "../components/Title";
import Select from "../components/Select";
import Button from "../components/Button";
import { useUser } from "../contexts/user";
import { locales } from "../constants/locales";

export default function Account() {
  const userContext = useUser();
  const user = userContext?.state.user;

  return (
    <Wrapper>
      <Title title="Account" />
      <UserName>Elif Kutlu</UserName>
      <InfoWrapper>
        <InfoItem>E-mail: {user?.email}</InfoItem>
        <InfoItem>Password: {user?.password}</InfoItem>
        <InfoItem>Current Locale: {user?.locale.toUpperCase()}</InfoItem>
      </InfoWrapper>

      <Select label="Locale" options={locales} value={user?.locale}></Select>
      <Button
        title="Logout"
        onClick={() => {
          localStorage.removeItem("user");
          userContext?.dispatch({ type: "setUser", user: null });
        }}
        bgColor="transparent"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 20px;
  padding-top: 50px;
`;

const UserName = styled.h3`
  font-weight: 700;
  font-size: 36px;
  margin: 10px 0px;
`;

const InfoWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  margin-bottom: 20px;
`;

const InfoItem = styled.p`
  font-weight: 600;
`;
