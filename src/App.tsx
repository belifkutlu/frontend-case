import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Login from "./pages/Login";
import List from "./pages/List";
import Account from "./pages/Account";
import BottonBar from "./components/BottonBar";
import Container from "./components/Container";
import { UserProvider } from "./contexts/user";
import GuardRoute from "./components/GuardRoute";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Container>
          <BottomBarWrapper>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<GuardRoute />}>
                <Route path="/" element={<List />} />
                <Route path="/account" element={<Account />} />
              </Route>
            </Routes>
            <BottonBar />
          </BottomBarWrapper>
        </Container>
      </UserProvider>
    </ThemeProvider>
  );
}

const BottomBarWrapper = styled.div`
  height: 100vh;
`;
