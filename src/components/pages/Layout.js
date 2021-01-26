import React, { useRef } from "react";
import Column from "../molecules/Column";
import { Link } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { updateLayoutOnSameColumn, updateLayoutOnDifferentColumn, selectLayout, updateWidth } from "../features/layoutSlice";

import { Button } from "antd";
import { useDrag } from "react-use-gesture";
import { useMeasure } from "react-use";
import { useSpring, animated } from "react-spring";

import { RowFlexCenter } from "../atoms/Styles";

const StyledColumns = animated(styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 10px auto;
  width: 50%;
  gap: 4px;
  width: 600px;
`);

export default function Layout() {
  const dispatch = useDispatch();
  const columns = useSelector(selectLayout);

  let [ref, { width }] = useMeasure();
  let initWidth = useRef(width);

  const [{ columnWidth }, setSpring] = useSpring(() => {
    return {
      columnWidth: typeof columns.column1.width === "number" ? columns.column1.width * 6 : 400,
    };
  });

  const bind = useDrag((state) => {
    if (!state.active || initWidth.current === 0) {
      initWidth.current = width;
    }

    if (!state.active) {
      dispatch(updateWidth(initWidth.current));
      return;
    }

    const leftWidth = initWidth.current + state.movement[0];
    if (leftWidth <= 200) {
      setSpring({ columnWidth: 200 });
    } else if (leftWidth >= 400) {
      setSpring({ columnWidth: 400 });
    } else {
      setSpring({ columnWidth: leftWidth });
    }
  });

  const onDragEnd = ({ source, destination }) => {
    if (destination === undefined || destination === null) return null;
    if (source.droppableId === destination.droppableId && destination.index === source.index) return null;
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    if (start === end) {
      dispatch(
        updateLayoutOnSameColumn({
          source,
          destination,
        })
      );
    } else {
      dispatch(
        updateLayoutOnDifferentColumn({
          source,
          destination,
        })
      );
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <StyledColumns style={{ gridTemplateColumns: columnWidth.interpolate((columnWidth) => `${columnWidth}px 1fr`) }}>
          <>
            <Column col={columns.column1} bind={bind} reference={ref} />
            <Column col={columns.column2} />
          </>
        </StyledColumns>
      </DragDropContext>
      <RowFlexCenter>
        <Button type="primary">
          <Link to="/">Home</Link>
        </Button>
      </RowFlexCenter>
    </>
  );
}
