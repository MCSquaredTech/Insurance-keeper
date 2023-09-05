
const ItemView = (data) => {
  const { number, picture, description, value } = data;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="itemTheme">
            <span className="itemNumber">{number}</span>
            <span className="itemPicture">{picture}</span>
            <span className="itemDescription">{description}</span>
            <span className="itemValue">{value}</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ItemView;
