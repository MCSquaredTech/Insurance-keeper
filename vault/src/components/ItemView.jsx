
const ItemView = ({ data, setData}) => {
  

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {data.map((item, key) => { 
            return (
              <div>
                <li key={item.id}>
                  <span className="itemId" style={{display: 'inline-block', width: '4rem'}}>Key: {item.id}  </span>
                  <span className="itemNumber" style={{display: 'inline-block', width: '15rem'}}> Item Number: {item.number}  </span>
                  <span className="itemDescription" style={{display: 'inline-block', width: '30rem'}}>{item.description}</span>
                  <span className="itemValue"style={{display: '', width: '5rem', textAlign: 'right'}}>{item.value}</span>
                </li>
              </div>
          )
              
          })}
          
        </div>
      </div>
      
    </div>
  )
}

export default ItemView;
