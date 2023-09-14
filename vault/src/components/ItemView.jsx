import Image from 'react-bootstrap/Image';

const ItemView = ({ item, key, onClick }) => {
  const { id, picture, number, description, value } = item; 

  return (
    <div className="container item">
      <div>
        <li id={id} key={key} onClick={() => { onClick(item)}}>
          <span className='itemId' style={{display: "inline-block", width: '2rem'}}>{id}</span>
          <span className="itemImage" style={{display: 'inline-block', width: '4rem'}}> <Image src={picture} thumbnail /> </span>
          <span className="itemNumber" style={{display: 'inline-block', width: '15rem'}}> Item Number: {number}  </span>
          <span className="itemDescription" style={{display: 'inline-block', width: '30rem'}}>{description}</span>
          <span className="itemValue"style={{display: '', width: '5rem', textAlign: 'right'}}>{value}</span>
        </li>
      </div>   
    </div>
  )
}

export default ItemView;
