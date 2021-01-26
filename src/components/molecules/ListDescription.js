import React from "react";
import styled from "styled-components";

import SectionHeader from "../molecules/SectionHeader";

export const UnorderedList = styled.ul`
  padding-inline-start: 20px;
`;

export default function ListDescription({ title, Icon, description }) {
  return (
    <>
      <SectionHeader title={title} Icon={Icon} />
      <UnorderedList>
        {description.map((data, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: data }}></li>
        ))}
      </UnorderedList>
    </>
  );
}
