import React from "react";
import Column from "../../molecules/Column";
import { Link } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { updateLayoutOnSameColumn, updateLayoutOnDifferentColumn, selectLayout, updateWidth } from "./layoutSlice";

import { Splitter, SplitterPanel } from "primereact/splitter";
import "primereact/resources/primereact.min.css";

import { Button } from "antd";
import { ColumnFlexCenter } from "../../atoms/Styles";

export default function Layout() {
  const dispatch = useDispatch();
  const columns = useSelector(selectLayout);

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

  const onResizeEnd = (event) => {
    dispatch(updateWidth(event.sizes));
  };

  return (
    <ColumnFlexCenter>
      <DragDropContext onDragEnd={onDragEnd}>
        <Splitter style={{ width: "500px" }} onResizeEnd={onResizeEnd}>
          <SplitterPanel size={67} minSize={33} style={{ overflow: "hidden" }}>
            <Column col={columns.column1} />
          </SplitterPanel>
          <SplitterPanel size={33} minSize={33} style={{ overflow: "hidden" }}>
            <Column col={columns.column2} />
          </SplitterPanel>
        </Splitter>
      </DragDropContext>

      <Button type="primary">
        <Link to="/">Home</Link>
      </Button>
    </ColumnFlexCenter>
  );
}
