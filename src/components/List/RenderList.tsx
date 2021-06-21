import { Draggable } from 'react-beautiful-dnd';
import { ListItem } from './ListItem';

interface RenderListProps {
  resList: any[],
  setData: React.Dispatch<React.SetStateAction<any[]>>
}

export const RenderList: React.FC<RenderListProps> = ({resList, setData}) => {
  return (
    <>
      {resList.map((res, index) => {
        const resName = res.RestaurantName || res.name;
        const resID = res.RestaurantID || res.id;
        const depth = [resName]
        return (
          <Draggable 
            draggableId={depth.join(',')}
            key={resID} 
            index={index}
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <ListItem
                parent={{name: resName, id: resID}}
                child={loopChildrenRecursively(res.menu, depth)}
                depth={[resName]}
                />
              </div>
            )}
          </Draggable>
        )
      })
      }
    </>
  )
}

// first implement for outer restaurant list darag and drop 
// then worry about depth

function loopChildrenRecursively(child: any[], parent: string[]) {
  return child.map((item: any, index) => {
    if(item.type === 'sectionheader') {
      const { children, name } = item;
      const depth = [...parent, name];
      return <Draggable
        draggableId={depth.join(',')}
        key={name} 
        index={index}
      >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <ListItem 
              parent={{name, id: String(item.id)}} 
              child={loopChildrenRecursively(children, depth)}
              depth={depth} 
            />
          </div>
        )}
      </Draggable>

    } else if(item.type === 'item' && item.selected === 1) {
      const menuItemName = item.name;
      const depth = [...parent, menuItemName];

      return <Draggable
        draggableId={depth.join(',')}
        key={menuItemName} 
        index={index}
      >
        {(provided) => (
          <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          >
            <ListItem
              parent={{name: menuItemName, id: String(item.id)}} 
              child={loopChildrenRecursively(item.children, depth)}
              depth={depth} 
            />
          </div>
        )}
      </Draggable>

    } else if(item.selected === 0) {
       return null 
       
    } else {
      const cName = item.name;
      const depth = [...parent, cName];

      return <Draggable
        draggableId={depth.join(',')}
        index={index}
        key={cName} 
      >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <ListItem 
              parent={{name: cName, id: String(item.id)}} 
              child={loopChildrenRecursively(item.children, depth)} 
              depth={depth} 
            />
          </div>
        )}
      </Draggable>
    }
  })
}