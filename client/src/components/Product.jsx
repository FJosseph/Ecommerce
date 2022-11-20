import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Product({ id, name, description, images, price, categories}) {
    return ( 
        <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={images}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
    </Card>
     );
}

export default Product;