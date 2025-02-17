"use client";

import Link from "next/link";
import styled from "styled-components";
import { useTranslations } from "../../../hooks/useTranslations";

interface LinkBlockProps {
  title: string;
  href?: string;
}

const LinkBlock = ({ title, href }: LinkBlockProps) => {
  const { locale } = useTranslations();
  const fullHref = href
    ? `/${locale}${href}`
    : `/${locale}/${title.toLowerCase()}`;

  return (
    <Link href={fullHref} passHref>
      <LinkContainer>{title}</LinkContainer>
    </Link>
  );
};

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
