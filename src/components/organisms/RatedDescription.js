import React from "react";

import SectionHeader from "../molecules/SectionHeader";
import RatingElement from "../molecules/RatingElement";

export default function RatedDescription({ title, Icon, description }) {
  return (
    <>
      <SectionHeader title={title} Icon={Icon} />
      <div>
        {description.map((data) => (
          <RatingElement itemLabel={data.name} itemRating={data.rating} key={data.name} />
        ))}
      </div>
    </>
  );
}
