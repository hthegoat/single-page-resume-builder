import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const Section = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TitleHolder = styled.div`
  height: 27px;
`;

export default function SectionHeader({ title, Icon, onEditRoute }) {
  return (
    <Section>
      <IconHolder>
        <Icon />
      </IconHolder>
      <TitleHolder>{title}</TitleHolder>
      <Link to={onEditRoute ?? "layout"}>
        <MdEditCustom />
      </Link>
    </Section>
  );
}
