import Image from 'react-bootstrap/Image';

const ItemView = ({ item, onClick }) => {
  const { id, picture, number, description, value } = item; 
  
  return (
    <div className="container">
      <div>
        <li id={item.id} key={key} onClick={() => { onClick(item)}}>
          <span className='itemId' style={{display: "inline-block", width: '2rem'}}>{item.id}</span>
          <span className="itemImage" style={{display: 'inline-block', width: '4rem'}}> <Image src={item.picture} thumbnail /> </span>
          <span className="itemNumber" style={{display: 'inline-block', width: '15rem'}}> Item Number: {item.number}  </span>
          <span className="itemDescription" style={{display: 'inline-block', width: '30rem'}}>{item.description}</span>
          <span className="itemValue"style={{display: '', width: '5rem', textAlign: 'right'}}>{item.value}</span>
        </li>
      </div>   
    </div>
  )
}

export default ItemView;
