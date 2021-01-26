import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { TitleHeader } from "../atoms/Styles";
import { IconHolder } from "../atoms/Styles";
import { MdEdit } from "react-icons/md";

const MdEditCustom = styled(MdEdit)`
  color: black;
  position: absolute;
  right: 0;
  cursor: pointer;

  @media print {
    display: none;
  }
`;

export default function SectionHeader({ title, Icon }) {
  return (
    <TitleHeader>
      <IconHolder>
        <Icon />
      </IconHolder>
      <span>{title}</span>
      <Link to={"layout"}>
        <MdEditCustom />
      </Link>
    </TitleHeader>
  );
}
