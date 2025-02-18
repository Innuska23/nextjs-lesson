"use client";

import Link from "next/link";
import styled from "styled-components";
import { useTranslations } from "../../../hooks/useTranslations";

type LinkBlockProps = {
  title: string;
  path: string;
};

function LinkBlock({ title, path }: LinkBlockProps) {
  const { locale } = useTranslations();

  return (
    <Link href={`/${locale}/${path}`}>
      <LinkContainer>{title}</LinkContainer>
    </Link>
  );
}

const LinkContainer = styled.div`
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(131, 134, 135, 0);

  & h2 {
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 0.7rem;
  }

  @media (max-width: 700px) {
    padding: 4px;

    & h2 {
      font-weight: 600;
      font-size: 24px;
    }
  }
`;

export default LinkBlock;
