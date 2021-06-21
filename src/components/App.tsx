import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "./utils/fetcher";
import { RenderList } from "./List/RenderList";

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { getNewDatalist } from "./utils/getDraggableItem";

export const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const responseData = await fetchData();
      setData(responseData);
    })()
  }, [])

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;
    console.log(result);

    // setData(getNewDatalist(data,result));

    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setData(items);
  }

  return (
    <>
      <h1>Restaurant List</h1>
      
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='container-list'>
            {(provided) => (
              <div 
                {...provided.droppableProps} 
                ref={provided.innerRef}
              >
                <RenderList resList={data} setData={setData} />
                {provided.placeholder}
              </div>
            )} 
          </Droppable>
        </DragDropContext>
    </>
  )
}

