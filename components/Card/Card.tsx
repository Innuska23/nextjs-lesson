import { PropsWithChildren } from "react";
import styled from "styled-components";

interface CardProps {
  name: string;
}

export default function Card({ children, name }: PropsWithChildren<CardProps>) {
  return (
    <CardBlock>
      <Name>{name}</Name>
      {children}
    </CardBlock>
  );
}

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid #facaff;
  box-shadow: 0 2px 3px 1px #fa52d3;
  border-radius: 15px;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 24px;
`;
