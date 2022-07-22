import { useState } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import Title from "../components/Title";
import { useUser } from "../contexts/user";
import { locales } from "../constants/locales";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [locale, setLocale] = useState("en");
  const userContext = useUser();

  if (userContext?.state.user) {
    return <Navigate to="/" />;
  }

  const disabled = !email || !password || !locale;

  function login() {
    const emailReg = /\S+@\S+\.\S+/;

    if (!emailReg.test(email)) {
      alert("Please enter a valid email address");
    } else {
      const user = { email, password, locale };
      localStorage.setItem("user", JSON.stringify(user));
      userContext?.dispatch({
        type: "setUser",
        user: { email, password, locale },
      });
    }
  }
  return (
    <Wrapper>
      <Title title="Login" />
      <Input
        value={email}
        placeholder="E-mail"
        onChange={(value) => setEmail(value)}
      />
      <Input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(value) => setPassword(value)}
      />
      <Select
        value={locale}
        label="Locale"
        options={locales}
        onChange={(value) => setLocale(value)}
      />
      <Button
        title="Sign In"
        disabled={disabled}
        onClick={login}
        bgColor={!disabled ? "red" : "gray"}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0px 20px;
  padding-top: 50px;
`;
