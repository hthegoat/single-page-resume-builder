import React, { useRef, useEffect } from "react";
import RatingTablet from "../atoms/Tablet";
import styled from "styled-components";

import { Input } from "antd";

import { AiFillDelete } from "react-icons/ai";

const RatedData = styled.div`
  margin-top: 10px;
`;

const RatedType = styled.div`
  display: inline-block;
  width: 160px;
  font-weight: bold;
`;

const RatedRating = styled.div`
  display: inline-block;
`;

export default function RatingElement({ itemLabel, itemRating, index, changeHandler, focusIndex }) {
  const ref = useRef(null);

  const tablets = [];
  for (let i = 1; i <= 5; i++) {
    tablets.push(<RatingTablet data-index={index} data-rating={i} filled={i <= itemRating} key={i} />);
  }

  useEffect(() => {
    if (index === focusIndex) {
      ref.current.focus();
    }
  }, [index, focusIndex]);

  return (
    <RatedData>
      <RatedType>{itemLabel}</RatedType>
      <Input style={{ width: "160px", backgroundColor: "khaki" }} ref={ref} value={itemLabel} data-index={index} onChange={changeHandler} />
      <RatedRating>{tablets}</RatedRating>
      <AiFillDelete data-index-delete={index} />
    </RatedData>
  );
}
