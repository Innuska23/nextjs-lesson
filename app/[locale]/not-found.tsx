"use client";

import styled from "styled-components";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const NotFound = () => {
  return (
    <PageWrapper>
      <ErrorContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>Page Not Found</ErrorMessage>
      </ErrorContainer>
    </PageWrapper>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #ff6b6b;
  margin: 0;
`;

const ErrorMessage = styled.h2`
  font-size: 2rem;
  color: #4a4a4a;
  margin: 1rem 0;
`;

export default NotFound;
