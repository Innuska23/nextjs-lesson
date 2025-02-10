"use client";

import Image, { StaticImageData } from "next/image";
import { CharacterStatusType } from "../../../assets/api/rick-and-morty-api";

type PropsType = {
  status: CharacterStatusType;
  src: StaticImageData;
};

const Status = ({ status, src }: PropsType) => {
  return <Image src={src} alt="" width={20} height={20} />;
};

export default Status;
