import styled from "styled-components";

export const IconHolder = styled.span`
  svg {
    margin-right: 10px;
    color: black;
    font-size: 1.5rem;
    vertical-align: bottom;
  }
`;

export const ItalicDiv = styled.div`
  font-style: italic;
`;

export const RowFlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const ColumnFlexCenter = styled(RowFlexCenter)`
  flex-direction: column;
  align-items: center;
`;
