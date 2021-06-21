import React, { useEffect } from "react";
import { useState } from "react";
import { Arrow } from "../ArrowSVG/Arrow"
import { ListItemDiv } from "./ListItemDiv";

import { Droppable } from 'react-beautiful-dnd';


interface ListItemProps {
  ref?: any,
  parent: {
    name: string,
    id: string
  },
  child?: any[],
  depth: string[],
}

export const ListItem: React.FC<ListItemProps> = ({parent, child, depth}) =>{
  const [expand, setExpand] = useState(false);
  const [hasChild, setHasChild] = useState(true);

  function handleExpand() {
    setExpand(!expand);
  }


  useEffect(() => {
    setHasChild(Boolean(child?.some(item => item)))
  }, [child])

  return (
    <ListItemDiv>
      <div>
        <Arrow expand={expand} handleExpand={handleExpand} hasChild={hasChild} />
      </div>
      <div>
        <div>{parent.name}</div>
        {expand && hasChild && (
          // <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId={parent.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {child}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          // </DragDropContext>
        )}
      </div>
    </ListItemDiv>
  )
}