import { ReactNode } from "react";
import { Header } from "../Header/Header";
import styled from "styled-components";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const Main = styled.div`
  width: 100%;
  padding-bottom: 10px;
  overflow: hidden;
`;
