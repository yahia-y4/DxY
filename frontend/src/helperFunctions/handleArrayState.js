
export function handleArrayState(setFun,index, value){
  setFun(prev => {
    const newItems = [...prev];
    newItems[index] = value;
    return newItems;
  });
};