import ItemView from "./ItemView";

const ItemsList = ({data, setData, policyHolder, onClick, onSave, onEdit, onDelete}) => {
  const { first, last, phone, email, policy } = policyHolder; 
  
  const item = data.map((item, index) => { 
      return <ItemView item={item} key={index} onClick={onClick} />
    })

  return (
    <>
      <div>Policy Holder: {first} {last} </div>
      <div>Policy Number: {policy} </div>
      <div>Phone: {phone}  Email: {email} </div>
      <hr />
      { item }
    </>
  )
}

export default ItemsList;
