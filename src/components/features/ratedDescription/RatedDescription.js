import React from "react";
import { useSelector } from "react-redux";
import { BsBook } from "react-icons/bs";

import { selectRatedDescription } from "./ratedDescriptionSlice";
import SectionHeader from "../../molecules/SectionHeader";
import RatingElement from "../../molecules/RatingElement";

export default function RatedDescription() {
  const data = useSelector(selectRatedDescription);

  return (
    <>
      <SectionHeader title={data.title} Icon={BsBook} onEditRoute="ratedDescription" />
      <div>
        {data.description.map((data, index) => (
          <RatingElement itemLabel={data.name} itemRating={data.rating} key={data.name} index={index} />
        ))}
      </div>
    </>
  );
}
