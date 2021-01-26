import React from "react";
import Item from "../atoms/DraggableItem";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { GrDrag } from "react-icons/gr";

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const StyledList = styled.div`
  background-color: rebeccapurple;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-bottom: 30px;
`;

const Dragger = styled(GrDrag)`
  position: absolute;
  bottom: 2px;
  right: -12px;
  font-size: 25px;
  cursor: e-resize;
  transform: rotate(45deg);
`;

export default function Column({ col: { list, id }, bind, reference }) {
  if (reference) {
    return (
      <Droppable droppableId={id}>
        {(provided) => (
          <StyledColumn ref={reference}>
            <StyledList {...provided.droppableProps} ref={provided.innerRef}>
              {list.map((text, index) => (
                <Item key={text} text={text} index={index} />
              ))}
              {provided.placeholder}
            </StyledList>
            <Dragger {...bind()} />
          </StyledColumn>
        )}
      </Droppable>
    );
  } else {
    return (
      <Droppable droppableId={id}>
        {(provided) => (
          <StyledColumn>
            <StyledList {...provided.droppableProps} ref={provided.innerRef}>
              {list.map((text, index) => (
                <Item key={text} text={text} index={index} />
              ))}
              {provided.placeholder}
            </StyledList>
          </StyledColumn>
        )}
      </Droppable>
    );
  }
}
