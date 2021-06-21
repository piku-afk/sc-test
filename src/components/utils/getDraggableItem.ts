export const getDraggedItem = (data: any[], draggableId: string) => {
  let dataCopy: any[] = [];
  let currentItem: any;
  let childrenArray: any[] = [];
  const path = draggableId.split(',');

  path.forEach((item, index) => {
    if(index === 0) {
      // currentItem = data.filter(i => i.RestaurantName === item)[0];

      data.every((i, index) => {
        if(i.RestaurantName === item) {

        }
      })
      
      return;
    } else if(index === 1) {
      currentItem = currentItem['menu'].filter((i: any) => i.name === item)[0];
      childrenArray = currentItem.children;
      return;
    }
    childrenArray.every(child => {
      if(child.name === item) {
        currentItem = child;
        childrenArray = child.children;
        return false;
      }
      return true;
    })

  })
  console.log(path);
  console.log('children: ', childrenArray)
  return currentItem;
};


export const getNewDatalist = (data: any[], result: any) => {
  const {destination, draggableId, source} = result;

  const path: any[] = draggableId.split(',');

  const [deletedData, listData] = deleteData(data, source, path);
  const newData = updateData(listData, deletedData, destination, path)
  // console.log(deleteData(data, source, path));
  // console.log(newData);
  
  return newData;
}

// items = Array.from(data);
// const [draggedItem] = items.splice(result.source.index, 1);
// items.splice(result.destination.index, 0, draggedItem);

function deleteData(data: any[], source: any, path: any[]) {
   let listData = Array.from(data);
   const { droppableId, index } = source;
  
  // let deletedData: any = {};
  
  // path.forEach((item, index) => {

  for(let i = 0; i < path.length; i++) {
    if(i === 0) {
      // const [ deletedItem ] = listData.splice(index, 1);

      const [ deletedItem ] = listData.filter(item => item.RestaurantID === droppableId);
      listData = listData.filter(item => item.RestaurantID !== droppableId);
      return [ deletedItem, listData];
    } else if(i === 1) {
      // listData.forEach(liData => {
      //   if(liData) {}
      // })
        
    }

  }
  return [];





  // })

  // return [deletedData, listData]
}

function updateData(data: any[], deletedData: any, destination: any, path: any[]) {
  let listData = Array.from(data);
  const { droppableId, index } = destination;

  if(droppableId === 'container-list') {
    listData.splice(index, 0, deletedData);   
  }

  for(let i = 0; i < path.length; i++) {
    if(i === 0) {
      listData.splice(index, 0, deleteData);
      return listData;
    }
  }
  
  // path.forEach((item, index) => {
  //     if(index === 0) {
      
  //   }
  // })


  return listData;
}