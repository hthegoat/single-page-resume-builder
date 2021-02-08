import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsBook } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";

import {
  selectRatedDescription,
  addDescriptionItem,
  updateDescriptionItemName,
  updateDescriptionItemRating,
  deleteDescriptionItem,
} from "./ratedDescriptionSlice";

import SectionHeader from "../../molecules/SectionHeader";
import RatingElement from "../../molecules/RatingElement";

export default function EditRatedDescription() {
  const data = useSelector(selectRatedDescription);
  const dispatch = useDispatch();
  const focusIndex = useRef(-1);

  function clickHandler(event) {
    const index = event.target.closest("[data-index]")?.dataset?.index;
    const rating = event.target.closest("[data-rating]")?.dataset?.rating;

    if (index !== undefined && rating !== undefined) {
      dispatch(updateDescriptionItemRating({ index, rating }));
    } else if (index !== undefined) {
      dispatch(deleteDescriptionItem(index));
    }
  }

  function changeHandler(event) {
    const index = event.target.closest("[data-index]")?.dataset?.index;
    focusIndex.current = +index;
    dispatch(updateDescriptionItemName({ index, value: event.target.value }));
  }

  function addhandler() {
    dispatch(addDescriptionItem());
  }

  return (
    <>
      <SectionHeader title={data.title} Icon={BsBook} />
      <div onClick={clickHandler}>
        {data?.description.map((data, index) => (
          <RatingElement
            itemLabel={data.name}
            itemRating={data.rating}
            key={data.name}
            index={index}
            changeHandler={changeHandler}
            focusIndex={focusIndex.current}
          />
        ))}
      </div>
      <GrAddCircle onClick={addhandler} />
    </>
  );
}
