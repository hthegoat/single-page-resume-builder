import React from "react";
import DraggableItem from "../atoms/DraggableItem";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const StyledList = styled.div`
  background-color: rebeccapurple;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default function Column({ col: { list, id } }) {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <StyledColumn>
          <StyledList {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((text, index) => (
              <DraggableItem key={text} text={text} index={index} />
            ))}
            {provided.placeholder}
          </StyledList>
        </StyledColumn>
      )}
    </Droppable>
  );
}
