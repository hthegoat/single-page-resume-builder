import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: paleturquoise;
  border-radius: 4px;
  height: 50px;
  padding: 4px 8px;
  transition: background-color 0.5s ease-out;
  margin: 8px;
  flex-grow: 1;

  :hover {
    background-color: #fff;
    transition: background-color 0.1s ease-in;
  }
`;

export default function DraggableItem({ text, index }) {
  return (
    <Draggable draggableId={text} index={index}>
      {(provided) => (
        <StyledItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {text}
        </StyledItem>
      )}
    </Draggable>
  );
}
