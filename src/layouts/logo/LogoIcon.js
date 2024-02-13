import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import LogoDark from "../../../assets/images/logos/logo-dark.svg";

const LogoIcon = () => {
  return (
    <Link href="/admin">
      <p className="text-pink-500 no-underline text-center font-bold"> NexCritque </p>
    </Link>
  );
};

export default LogoIcon;
