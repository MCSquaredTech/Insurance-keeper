import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemCardView = ({item, onClick}) => {
// Card for Vault Items 
  console.log('You are in the Card View',item);
  const { picture, title, description, value } = item; 

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
          <div>{value}</div>
        </Card.Text>
        <Button variant="primary" onClick={onClick}>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default ItemCardView;
