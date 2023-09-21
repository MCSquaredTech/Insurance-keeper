import ItemView from "./ItemView";

const ItemsList = () => {
    
  const item = data.map((item, index) => { 
      return <ItemView item={item} key={index} onClick={onClick} />
    })

  return (
    <>
      { item }
    </>
  )
}

export default ItemsList;


